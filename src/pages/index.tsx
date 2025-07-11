import React from 'react';
import { useAuth } from '../utils/auth';
import ListingList from '../components/Listing/ListingList';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  const { user } = useAuth ? useAuth() : { user: null };

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-md text-center">
        <img src="/favicon.ico" alt="BuildingBuddy logo" className="mx-auto mb-4 w-16 h-16" />
        <h1 className="text-3xl font-bold mb-2 text-blue-700">Welcome to BuildingBuddy</h1>
        <p className="mb-6 text-gray-700">The easiest way to borrow, lend, and share resources in your apartment building.<br />
        Connect with neighbors, reduce waste, and build community!</p>
        {!user ? (
          <div className="space-y-2 mb-8">
            <Link to="/signin" className="block w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Sign In</Link>
            <Link to="/signup" className="block w-full border border-blue-600 text-blue-700 py-2 rounded font-semibold hover:bg-blue-50 transition">Create Account</Link>
          </div>
        ) : null}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-blue-600">How it works:</h2>
          <ol className="text-left space-y-2 mx-auto max-w-xs">
            <li><span className="font-bold text-blue-700">1.</span> Sign up or sign in with your invite code.</li>
            <li><span className="font-bold text-blue-700">2.</span> Browse or post listings for things you have or need.</li>
            <li><span className="font-bold text-blue-700">3.</span> Request, chat, and coordinate with neighbors.</li>
            <li><span className="font-bold text-blue-700">4.</span> Build trust and community in your building!</li>
          </ol>
        </div>
        {user ? (
          <section className="mt-8">
            <h2 className="text-lg font-bold mb-2 text-blue-700">Available Listings</h2>
            <ListingList />
          </section>
        ) : null}
      </div>
    </main>
  );
};

export default Landing;
