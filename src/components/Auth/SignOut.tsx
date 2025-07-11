import React from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';

const SignOut: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/signin');
  };

  return (
    <button onClick={handleSignOut} className="bg-red-600 text-white px-4 py-2 rounded">
      Sign Out
    </button>
  );
};

export default SignOut;
