import { groningenConfig } from "@/config/cities/groningen";

export const CityGuidesConfig = {
  groningen: groningenConfig,
} as const;

export const defaultCitySlug = "groningen";

export function getCityConfig(citySlug: keyof typeof CityGuidesConfig = defaultCitySlug) {
  return CityGuidesConfig[citySlug];
}
