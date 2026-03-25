-- Anonymous burn-after-reading messages
-- Notes:
-- - RLS is enabled and no public policies are created.
-- - Access should happen via a server-side Supabase client using the service role key.

create extension if not exists pgcrypto;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'message_status') then
    create type public.message_status as enum ('active', 'seen', 'destroyed');
  end if;
end $$;

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  content text not null,
  caution_text text,
  is_blurred boolean not null default false,
  expires_at timestamptz,
  max_views integer not null default 1,
  view_count integer not null default 0,
  author_wants_status boolean not null default false,
  status public.message_status not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint messages_slug_length check (char_length(slug) between 6 and 16),
  constraint messages_max_views_positive check (max_views >= 1),
  constraint messages_view_count_nonnegative check (view_count >= 0),
  constraint messages_view_count_le_max_views check (view_count <= max_views)
);

create unique index if not exists messages_slug_key on public.messages (slug);
create index if not exists messages_status_idx on public.messages (status);
create index if not exists messages_expires_at_idx on public.messages (expires_at);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_messages_updated_at on public.messages;
create trigger set_messages_updated_at
before update on public.messages
for each row
execute function public.set_updated_at();

alter table public.messages enable row level security;
