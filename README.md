# 🏢 BuildingBuddy

Welcome to **BuildingBuddy** – the playful, modern web app for sharing, borrowing, and connecting with your neighbors! 🛠️🤝

## ✨ Features

- **Animated Landing Page:**
  - Modern hero section with animated SVG blobs and icons
  - Smooth section transitions, scroll-triggered animations, and a fun palette
  - Responsive, mobile-first design
- **Poppins Font:**
  - Clean, friendly, and easy to read
- **SVG & Icon Power:**
  - Beautiful Lucide icons and custom SVG backgrounds
- **Authentication & Onboarding:**
  - Supabase-powered sign-up/sign-in with email/password
  - Invite code validation for secure onboarding (with admin bypass)
  - Friendly error handling and loading states
- **Protected Routes:**
  - Dashboard and app features are gated for authenticated users
- **Theming & Branding:**
  - Custom color palette, rounded UI, and playful details
  - Footer with standard company links

## 🚀 Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Create your `.env` file**
   ```sh
   cp .env.example .env
   # Fill in your Supabase project settings and invite codes
   ```
3. **Run Supabase migrations**
   - Use the SQL in `supabase/migrations/20250710_init.sql` to set up your database (Supabase SQL editor or CLI).
4. **Start the dev server**
   ```sh
   npm run dev
   ```
5. **Visit your app!**
   - Open [http://localhost:5173](http://localhost:5173) and enjoy the animated landing page 🎉

## 🗂️ Project Structure
```
src/
  main.tsx
  App.tsx
  supabaseClient.ts
  utils/auth.tsx
  components/
    Auth/
      SignIn.tsx
      SignUp.tsx
      SignOut.tsx
      RequireAuth.tsx
    Listing/
      ListingForm.tsx
      ListingList.tsx
    Chat/
      ChatList.tsx
      ChatWindow.tsx
  pages/
    Landing.tsx
    index.tsx
    create-listing.tsx
    my-requests.tsx
    chat/[requestId].tsx
supabase/
  migrations/20250710_init.sql
```

## 📝 Environment Variables
- `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` for Supabase
- `VITE_INVITE_CODE_1`, `VITE_INVITE_CODE_2`, ... for onboarding codes

## 💡 Development Notes
- **Font:** Uses [Poppins](https://fonts.google.com/specimen/Poppins) throughout
- **Styling:** Tailwind CSS with custom palette and rounded corners
- **Icons:** [Lucide](https://lucide.dev/) SVG icons for a modern look
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for smooth, fun transitions
- **Invite Codes:** Validated before profile creation; admin bypass supported
- **Session Management:** Auth context and route guards for secure access

## 🛠️ Next Steps & Ideas
- Build out dashboard and listings feed
- Add listing creation, requests, chat, approval workflows, and ratings
- Admin dashboard for invite code management
- Replace placeholder SVGs with custom illustrations
- Polish UI and add more micro-interactions

## 🤗 Contributing
PRs and ideas welcome! Let’s make building life friendlier together.

---

Made with ❤️ by your neighbors at BuildingBuddy
- Deploy using Windsurf or Netlify.

---

**Happy Building!**
