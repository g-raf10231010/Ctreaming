"use client";
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll add the backend integration later
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h1 className="text-2xl font-bold text-center text-blue-600">Ctreaming</h1>
          <h2 className="mt-6 text-3xl font-bold text-center text-gray-900">Reset your password</h2>
          <p className="mt-2 text-center text-gray-600">
            {!submitted 
              ? "Enter your email address and we'll send you a link to reset your password."
              : "If an account exists for this email, you will receive password reset instructions."}
          </p>
        </div>

        {!submitted ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-gray-900">Email address</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Send reset link
              </button>
            </div>

            <div className="text-center">
              <a href="/login" className="text-sm text-blue-600 hover:text-blue-800">
                Back to login
              </a>
            </div>
          </form>
        ) : (
          <div className="mt-8">
            <div className="text-center">
              <a href="/login" className="text-sm text-blue-600 hover:text-blue-800">
                Return to login
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}