import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import RequireAuth from './components/Auth/RequireAuth';
import ListingList from './components/Listing/ListingList';
import ListingForm from './components/Listing/ListingForm';
import ChatList from './components/Chat/ChatList';
import ChatWindow from './components/Chat/ChatWindow';
import Dashboard from './pages/index';
import CreateListing from './pages/create-listing';
import MyRequests from './pages/my-requests';
import SignOut from './components/Auth/SignOut';
import { useAuth } from './utils/auth';
import Landing from './pages/Landing';

function App() {
  const { user } = useAuth();
  return (
    <Router>
      <AppRoutes user={user} />
    </Router>
  );
}

function AppRoutes({ user }: { user: any }) {
  const location = useLocation();
  const isLanding = location.pathname === "/";
  return (
    <>
      {/* Only show the main header/nav if not on landing page */}
      {!isLanding && (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <span className="font-bold text-lg">BuildingBuddy</span>
          <nav>
            {user ? (
              <SignOut />
            ) : (
              <>
                <Link to="/signin" className="mr-4 underline">Sign In</Link>
                <Link to="/signup" className="underline">Sign Up</Link>
              </>
            )}
          </nav>
        </header>
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/my-requests" element={<MyRequests />} />
          <Route path="/chat/:requestId" element={<ChatWindow />} />
        </Route>
      </Routes>
      {/* Floating action button (only show when authenticated and not on landing) */}
      {/* You may want to conditionally render this based on route/user in the future */}
      <a href="/create-listing" className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-3xl">+</a>
    </>
  );
}

export default App;
