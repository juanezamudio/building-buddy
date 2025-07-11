-- Enable uuid-ossp extension
create extension if not exists "uuid-ossp";

-- ENUM types
create type listing_category as enum ('Tools', 'Kitchenware', 'Party Supplies', 'Electronics', 'Fitness', 'Other');
create type request_status as enum ('pending', 'approved', 'declined', 'picked_up', 'returned');

-- profiles table
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  is_admin boolean default false,
  created_at timestamptz default now()
);

-- invite_codes table
create table invite_codes (
  code text primary key,
  created_by uuid references profiles(id),
  expires_at timestamptz,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- listings table
create table listings (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid references profiles(id) on delete cascade,
  title text not null,
  description text,
  category listing_category not null,
  available_from date,
  available_to date,
  tip_amount numeric,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- requests table
create table requests (
  id uuid primary key default uuid_generate_v4(),
  listing_id uuid references listings(id) on delete cascade,
  requester_id uuid references profiles(id) on delete cascade,
  status request_status default 'pending',
  requested_at timestamptz default now(),
  approved_at timestamptz,
  start_date date,
  end_date date,
  tip_amount numeric,
  updated_at timestamptz default now()
);

-- messages table
create table messages (
  id uuid primary key default uuid_generate_v4(),
  request_id uuid references requests(id) on delete cascade,
  sender_id uuid references profiles(id) on delete cascade,
  content text not null,
  sent_at timestamptz default now()
);

-- RLS policies
alter table profiles enable row level security;
alter table invite_codes enable row level security;
alter table listings enable row level security;
alter table requests enable row level security;
alter table messages enable row level security;

-- Only owners can edit their own listings
create policy "Owner can update their listings" on listings
  for update using (auth.uid() = owner_id);

-- Only requesters & listing owners can read/write requests and messages
create policy "Requesters and owners can access requests" on requests
  for select using (auth.uid() = requester_id or auth.uid() = (select owner_id from listings where listings.id = requests.listing_id));
create policy "Requesters and owners can access messages" on messages
  for select using (auth.uid() = sender_id or auth.uid() = (select owner_id from listings where listings.id = (select listing_id from requests where requests.id = messages.request_id)));

-- Admins can bypass as needed (example: allow admin full access)
create policy "Admins can do anything" on listings
  using (exists (select 1 from profiles where id = auth.uid() and is_admin));
create policy "Admins can do anything" on requests
  using (exists (select 1 from profiles where id = auth.uid() and is_admin));
create policy "Admins can do anything" on messages
  using (exists (select 1 from profiles where id = auth.uid() and is_admin));
