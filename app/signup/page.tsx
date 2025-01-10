"use client";
import { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'ADVERTISER'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h1 className="text-2xl font-bold text-center text-blue-600">Ctreaming</h1>
          <h2 className="mt-6 text-3xl font-bold text-center text-gray-900">Create your account</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-900">Email</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900">Confirm Password</label>
              <input
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900">I am a:</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.userType}
                onChange={(e) => setFormData({...formData, userType: e.target.value})}
              >
                <option value="ADVERTISER">Advertiser</option>
                <option value="CREATOR">Content Creator</option>
                <option value="CONTENT_OWNER">Content Owner</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-900">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-800">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}