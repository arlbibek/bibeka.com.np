-- Global click counter for /click
-- Access intended via server-side Supabase client.

create table if not exists public.click_counters (
  name text primary key,
  count bigint not null default 0,
  updated_at timestamptz not null default now()
);

create or replace function public.increment_click_counter(counter_name text default 'global')
returns bigint
language plpgsql
as $$
declare
  new_count bigint;
begin
  insert into public.click_counters(name, count)
  values (counter_name, 1)
  on conflict (name)
  do update set
    count = public.click_counters.count + 1,
    updated_at = now()
  returning count into new_count;

  return new_count;
end;
$$;

-- Enable realtime updates for this table (optional but recommended for /click)
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    begin
      alter publication supabase_realtime add table public.click_counters;
    exception when duplicate_object then
      -- already added
      null;
    end;
  end if;
end $$;

