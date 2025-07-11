# BuildingBuddy MVP

A mobile-first React + Vite + Tailwind web app integrated with Supabase for apartment-building resource exchange.

## Getting Started

### 1. Install dependencies
```sh
npm install
```

### 2. Create `.env` file
Copy `.env.example` to `.env` and fill in your Supabase project settings and invite codes:
```sh
cp .env.example .env
```

### 3. Run Supabase migrations
- Use the SQL in `supabase/migrations/20250710_init.sql` to set up your database (Supabase SQL editor or CLI).

### 4. Start the dev server
```sh
npm run dev
```

### 5. Invite Codes
- Invite codes are checked against the `invite_codes` table or the ENV variables in `.env` (INVITE_CODE_1, etc).
- Admins (see `profiles.is_admin`) can bypass invite code checks.

## Project Structure
```
src/
  main.tsx
  App.tsx
  supabaseClient.ts
  utils/auth.ts
  components/
    Auth/
      SignIn.tsx
      SignUp.tsx
      RequireAuth.tsx
    Listing/
      ListingForm.tsx
      ListingList.tsx
    Chat/
      ChatList.tsx
      ChatWindow.tsx
  pages/
    index.tsx
    create-listing.tsx
    my-requests.tsx
    chat/[requestId].tsx
supabase/
  migrations/20250710_init.sql
```

## Next Steps
- Implement Supabase queries/mutations in component stubs.
- Style and refine components for your building’s needs.
- Add push notifications or UI alerts for new chat messages and request status changes.
- Deploy using Windsurf or Netlify.

---

**Happy Building!**
