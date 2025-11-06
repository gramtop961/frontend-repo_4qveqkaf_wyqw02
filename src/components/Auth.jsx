import React, { useState } from 'react';
import { Mail, Lock, LogIn, UserPlus, ShieldCheck } from 'lucide-react';

export default function Auth({ onAuth }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    // Mock auth for UI purposes
    if (email && password) onAuth({ email });
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold text-gray-900">{mode === 'login' ? 'Login' : 'Create account'}</h3>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div className="relative">
            <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
            {mode==='login' ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />} {mode==='login' ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="mt-3 text-center">
          <button onClick={()=>setMode(mode==='login'? 'register':'login')} className="text-sm text-emerald-700 hover:underline">
            {mode==='login' ? "Don't have an account? Register" : 'Already have an account? Login'}
          </button>
        </div>
        <div className="mt-4">
          <button className="w-full px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 font-semibold">Continue with Google</button>
        </div>
      </div>
    </section>
  );
}
