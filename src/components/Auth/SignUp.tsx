import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { checkInviteCode } from '../../utils/auth';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    // Create user first
    const { data, error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }
    // Check invite code
    const userId = data.user?.id;
    const valid = await checkInviteCode(inviteCode, userId);
    if (!valid) {
      setError('Invalid or inactive invite code.');
      setLoading(false);
      // Optionally delete user if invite code is invalid
      return;
    }
    setSuccess('Check your email to confirm your account!');
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {success && <div className="text-green-600 mb-2">{success}</div>}
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input mb-2 w-full border p-2 rounded" required disabled={loading} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input mb-2 w-full border p-2 rounded" required disabled={loading} />
        <input type="text" placeholder="Invite Code" value={inviteCode} onChange={e => setInviteCode(e.target.value)} className="input mb-4 w-full border p-2 rounded" required disabled={loading} />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        <div className="mt-2 text-sm text-center">
          Already have an account? <a href="/signin" className="text-blue-600">Sign In</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
