create extension if not exists pgcrypto;

create table if not exists public.bikeblog (
  id uuid primary key,
  created_at timestamptz not null default timezone('utc', now()),
  city text not null,
  name text not null,
  email text not null,
  phone text,
  locale text not null check (locale in ('nl', 'en')),
  source text not null,
  intent text not null,
  article_slug text,
  campaign_source text,
  notes text,
  gdpr_consent boolean not null default false,
  partner_notification boolean not null default false,
  submitted_at timestamptz not null,
  user_agent text,
  referrer text
);

create index if not exists bikeblog_created_at_idx on public.bikeblog (created_at desc);
create index if not exists bikeblog_city_idx on public.bikeblog (city);
create index if not exists bikeblog_email_idx on public.bikeblog (email);
create index if not exists bikeblog_campaign_source_idx on public.bikeblog (campaign_source);
create index if not exists bikeblog_article_slug_idx on public.bikeblog (article_slug);

alter table public.bikeblog enable row level security;
