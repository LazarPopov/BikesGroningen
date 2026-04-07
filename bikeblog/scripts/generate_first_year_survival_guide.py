from __future__ import annotations

from pathlib import Path
import textwrap


PAGE_WIDTH = 595
PAGE_HEIGHT = 842
MARGIN_X = 54
TOP_Y = 790
BOTTOM_Y = 72


class Page:
    def __init__(self) -> None:
        self.commands: list[str] = []
        self.y = TOP_Y


class PdfBuilder:
    def __init__(self) -> None:
        self.pages: list[Page] = []
        self.current = Page()
        self.pages.append(self.current)

    def ensure_space(self, lines: int = 1, leading: int = 14) -> None:
        if self.current.y - (lines * leading) < BOTTOM_Y:
            self.current = Page()
            self.pages.append(self.current)

    def add_text(self, text: str, font: str, size: int, x: int | None = None, y: int | None = None) -> None:
        x = MARGIN_X if x is None else x
        y = self.current.y if y is None else y
        escaped = (
            text.replace("\\", "\\\\")
            .replace("(", "\\(")
            .replace(")", "\\)")
        )
        self.current.commands.append(
            f"BT\n/{font} {size} Tf\n1 0 0 1 {x} {y} Tm\n({escaped}) Tj\nET"
        )

    def line(self, text: str, font: str = "F1", size: int = 10, leading: int = 14, indent: int = 0) -> None:
        self.ensure_space(1, leading)
        self.add_text(text, font, size, x=MARGIN_X + indent)
        self.current.y -= leading

    def space(self, amount: int = 10) -> None:
        self.current.y -= amount
        if self.current.y < BOTTOM_Y:
            self.current = Page()
            self.pages.append(self.current)

    def paragraph(
        self,
        text: str,
        font: str = "F1",
        size: int = 10,
        leading: int = 14,
        width: int = 82,
        indent: int = 0,
    ) -> None:
        lines = textwrap.wrap(text, width=width, break_long_words=False)
        self.ensure_space(len(lines), leading)
        for line in lines:
            self.add_text(line, font, size, x=MARGIN_X + indent)
            self.current.y -= leading

    def bullet(self, text: str, width: int = 78) -> None:
        lines = textwrap.wrap(text, width=width, break_long_words=False)
        self.ensure_space(len(lines), 14)
        for index, line in enumerate(lines):
            prefix = "- " if index == 0 else "  "
            self.add_text(f"{prefix}{line}", "F1", 10, x=MARGIN_X + 8)
            self.current.y -= 14

    def checklist(self, text: str, width: int = 76) -> None:
        lines = textwrap.wrap(text, width=width, break_long_words=False)
        self.ensure_space(len(lines), 14)
        for index, line in enumerate(lines):
            prefix = "[] " if index == 0 else "   "
            self.add_text(f"{prefix}{line}", "F1", 10, x=MARGIN_X + 8)
            self.current.y -= 14

    def heading(self, text: str) -> None:
        self.space(6)
        self.line(text, font="F2", size=14, leading=18)
        self.space(2)

    def footer(self, page_number: int) -> None:
        self.add_text(
            f"Bikes Groningen | First Year Survival Guide 2026 | Page {page_number}",
            "F1",
            9,
            x=MARGIN_X,
            y=36,
        )

    def build(self) -> bytes:
        objects: list[bytes] = []

        def add_object(data: str | bytes) -> int:
            payload = data.encode("latin-1") if isinstance(data, str) else data
            objects.append(payload)
            return len(objects)

        font_regular = add_object("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
        font_bold = add_object("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

        page_refs: list[int] = []
        content_refs: list[int] = []

        for index, page in enumerate(self.pages, start=1):
            self.current = page
            self.footer(index)
            content = "\n".join(page.commands).encode("latin-1")
            content_ref = add_object(
                b"<< /Length " + str(len(content)).encode("ascii") + b" >>\nstream\n" + content + b"\nendstream"
            )
            content_refs.append(content_ref)

            page_ref = add_object(
                f"<< /Type /Page /Parent PAGES_REF 0 R /MediaBox [0 0 {PAGE_WIDTH} {PAGE_HEIGHT}] "
                f"/Contents {content_ref} 0 R /Resources << /Font << /F1 {font_regular} 0 R /F2 {font_bold} 0 R >> >> >>"
            )
            page_refs.append(page_ref)

        kids = " ".join(f"{ref} 0 R" for ref in page_refs)
        pages_ref = add_object(f"<< /Type /Pages /Kids [{kids}] /Count {len(page_refs)} >>")
        catalog_ref = add_object(f"<< /Type /Catalog /Pages {pages_ref} 0 R >>")

        resolved_objects: list[bytes] = []
        for payload in objects:
            resolved_objects.append(payload.replace(b"PAGES_REF", str(pages_ref).encode("ascii")))

        chunks = [b"%PDF-1.4\n"]
        offsets = [0]

        for index, payload in enumerate(resolved_objects, start=1):
            offsets.append(sum(len(chunk) for chunk in chunks))
            chunks.append(f"{index} 0 obj\n".encode("ascii"))
            chunks.append(payload)
            chunks.append(b"\nendobj\n")

        xref_offset = sum(len(chunk) for chunk in chunks)
        chunks.append(f"xref\n0 {len(resolved_objects) + 1}\n".encode("ascii"))
        chunks.append(b"0000000000 65535 f \n")
        for offset in offsets[1:]:
            chunks.append(f"{offset:010d} 00000 n \n".encode("ascii"))

        chunks.append(
            (
                f"trailer\n<< /Size {len(resolved_objects) + 1} /Root {catalog_ref} 0 R >>\n"
                f"startxref\n{xref_offset}\n%%EOF\n"
            ).encode("ascii")
        )

        return b"".join(chunks)


def build_document() -> PdfBuilder:
    pdf = PdfBuilder()

    pdf.line("Bikes Groningen", font="F2", size=13, leading=18)
    pdf.line("The Groningen First Year Survival Guide 2026", font="F2", size=23, leading=30)
    pdf.line("Everything you need to know and what the KEI-week will not tell you", size=11, leading=18)
    pdf.line("Last updated: April 7, 2026", size=10, leading=16)
    pdf.space(8)
    pdf.paragraph(
        "This guide is built for first-year students who need the fast version of Groningen: housing, bikes, "
        "student life, theft habits, and the money mistakes that are easiest to avoid before the semester gets busy.",
        size=10,
        width=84,
    )

    pdf.heading("1. The Housing Hunt: Don't Get Scammed")
    pdf.bullet("If you do not have a room by August, the search gets much harder fast.")
    pdf.bullet("Signaal is the automation play: do not refresh rental sites manually. Use it to track matching rooms in Groningen the second they appear.")
    pdf.bullet("Signaal link: https://signaal.app")
    pdf.bullet("Use code ASJOBS for 10% off the paid version.")
    pdf.bullet("Domakin is the eyes-and-ears option when you are not in the city yet. They can help with room searching and attend viewings for you.")
    pdf.bullet("Domakin room searching: https://www.domakin.nl/services/room-searching")
    pdf.bullet("Domakin viewing service: https://www.domakin.nl/services/viewing")
    pdf.bullet("Use code BIKESGRO for 10% off your Domakin service.")
    pdf.bullet("Housing WhatsApp groups: https://www.rentswap.nl/whatsapp-netherlands")
    pdf.bullet("Golden rule: never wire money for a room before a proper viewing, a trusted remote viewing, or a contract you actually understand.")

    pdf.heading("2. The Bike Economy: Buy Smart")
    pdf.bullet("July is the goated month to buy. Students leave the city and cheap bikes appear. September is usually the most expensive month.")
    pdf.bullet("Aim for EUR 75-EUR 120. Cheaper can become a repair liability. Flashier becomes a theft target.")
    pdf.bullet("Swapfiets is a solid short-term landing option, but buying usually wins if you stay for multiple years.")
    pdf.bullet("September waitlists and theft or key penalties make last-minute renting less attractive than it looks.")
    pdf.bullet("No driving licence? No problem. In Groningen, a reliable bike is your actual freedom machine.")
    pdf.bullet("Shop link: https://bikestoregroningen.nl")

    pdf.heading("3. Beyond the Books: Student Associations")
    pdf.bullet("Groningen becomes home faster when you join something early, whether that is cultural, social, or degree-based.")
    pdf.bullet("Examples worth knowing: Bulgarian Society Groningen, Hellenic Student Association, ESN Groningen, and COVER for AI and Computing Science students.")
    pdf.bullet("The real move is simple: join one group in your first weeks so your network starts before your routine locks in.")

    pdf.heading("4. Anti-Theft and 'Is it Gone?' Checklist")
    pdf.bullet("Never lock only the front wheel. If you do, the wheel may be the only part still waiting for you later.")
    pdf.bullet("Always lock the frame to a fixed object with a second lock, especially near Vismarkt, Grote Markt, and busy campus racks.")
    pdf.bullet("Hide a cheap Action tracker under the saddle. It is a low-key extra layer that can help when a bike gets moved.")
    pdf.bullet("In busy spots like Vismarkt or Zernike, look back at your bike before you walk away. Parking memory saves a lot of fake panic.")
    pdf.bullet("If your bike is gone, check the municipality and Fietsdepot Groningen guidance first. It may have been removed instead of stolen.")

    pdf.heading("5. Moving Fast and Making Money")
    pdf.bullet("Some students treat a scooter from Marktplaats as a speed investment. Around EUR 450 can be a useful benchmark, but inspect carefully before buying.")
    pdf.bullet("Want to fund student life fast? Delivery work and other local student roles move quickly on Student Jobs Groningen.")
    pdf.bullet("Jobs link: https://www.studentjobsgroningen.nl")
    pdf.bullet("Backup transport matters on chaos days. Keep CHECK, Bolt, and the NS app ready for OV-fiets or OV-ebike availability.")

    pdf.heading("6. The 2026 Fine-Free Cheat Sheet")
    pdf.bullet("Phone in hand while riding: EUR 430 before admin costs, based on the official OM pages checked for this guide.")
    pdf.bullet("No required bike lights: EUR 75 before admin costs, based on the official OM pages checked for this guide.")
    pdf.bullet("Respect posted shopping-hour restrictions in places like the Herestraat and always follow the local signs on the day.")
    pdf.bullet("If your bike disappears around Grote Markt, the municipality says you may be able to collect it free at Ossenmarkt within 24 hours. After that it moves to the depot in Vinkhuizen and collection costs EUR 25, card only.")
    pdf.bullet("During Red Bull District Ride 2026, expect the centre to be chaos. CHECK, Bolt, and NS OV-fiets are good backup options when closures get messy.")

    pdf.heading("Your First-Year Checklist")
    pdf.checklist("Housing: set up Signaal alerts and use Domakin if you cannot attend viewings yourself.")
    pdf.checklist("Bike: buy in July if you can and stay in the EUR 75-EUR 120 range.")
    pdf.checklist("Social: sign up for ESN, BGSG or HSAG, or your study association.")
    pdf.checklist("Anti-theft: lock the frame to something fixed, add a second lock, and hide a tracker.")
    pdf.checklist("Income: check Student Jobs Groningen for delivery gigs and flexible work.")
    pdf.checklist("Backup transport: install CHECK, Bolt, and the NS app before the next chaos day arrives.")

    pdf.heading("Quick Links and Codes")
    pdf.bullet("Signaal: https://signaal.app | Code: ASJOBS")
    pdf.bullet("Domakin room searching: https://www.domakin.nl/services/room-searching | Code: BIKESGRO")
    pdf.bullet("Domakin viewing: https://www.domakin.nl/services/viewing | Code: BIKESGRO")
    pdf.bullet("RentSwap WhatsApp groups: https://www.rentswap.nl/whatsapp-netherlands")
    pdf.bullet("Bike Store Groningen: https://bikestoregroningen.nl")
    pdf.bullet("Student Jobs Groningen: https://www.studentjobsgroningen.nl")
    pdf.space(6)
    pdf.paragraph(
        "Official check note: municipality bike-removal guidance and the published OM fine pages were checked while updating this PDF. "
        "Service availability, discounts, and event logistics can still change, so always double-check the official page before acting.",
        size=9,
        width=86,
    )

    return pdf


def main() -> None:
    project_root = Path(__file__).resolve().parent.parent
    output_dir = project_root / "public" / "downloads"
    output_dir.mkdir(parents=True, exist_ok=True)

    pdf_bytes = build_document().build()

    new_path = output_dir / "groningen-first-year-survival-guide-2026.pdf"
    legacy_path = output_dir / "groningen-bike-map.pdf"

    new_path.write_bytes(pdf_bytes)
    legacy_path.write_bytes(pdf_bytes)


if __name__ == "__main__":
    main()
