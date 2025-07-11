import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSignIn} className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input mb-2 w-full border p-2 rounded" required disabled={loading} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input mb-4 w-full border p-2 rounded" required disabled={loading} />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        <div className="mt-2 text-sm text-center">
          Don't have an account? <a href="/signup" className="text-blue-600">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
