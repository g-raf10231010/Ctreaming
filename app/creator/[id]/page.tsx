"use client";
import { useState } from 'react';

export default function CreatorProfile({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    budget: '',
    campaignDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setIsModalOpen(false);
    setIsMessageModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar Navigation */}
      <nav className="w-64 bg-white shadow-lg flex flex-col h-full">
        <div className="p-4 border-b">
          <a href="/dashboard" className="text-xl font-bold text-blue-600">Ctreaming</a>
        </div>
        
        {/* Main Menu Items */}
        <div className="p-4 flex-1">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/" className="text-gray-900">Dashboard</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/campaigns" className="text-gray-900">Campaigns</a>
            </li>
            <li className="p-2 bg-blue-100 rounded-md cursor-pointer">
              <a href="/discover" className="text-gray-900">Discover</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/messages" className="text-gray-900">Messages</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/profile" className="text-gray-900">Profile</a>
            </li>
          </ul>
        </div>

        {/* Settings at Bottom */}
        <div className="border-t p-4">
          <ul>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/settings" className="text-gray-900">Settings</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header with Creator Name and Action Buttons */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">londonlaz</h1>
            <div className="space-x-4">
              <button
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                style={{ color: '#1a202c' }} // Darker text color
                onClick={() => setIsMessageModalOpen(true)}
              >
                Message
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                style={{ color: '#1a202c' }} // Darker text color
                onClick={() => setIsModalOpen(true)}
              >
                Request Campaign
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-500'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'inventory'
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-500'
                }`}
              >
                Inventory
              </button>
            </nav>
          </div>

          {activeTab === 'profile' && (
            <>
              {/* Stats Overview */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-gray-700 text-sm mb-2">Unique Audience</div>
                  <div className="text-3xl font-bold text-gray-900">90M</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-gray-700 text-sm mb-2">Available Impressions</div>
                  <div className="text-3xl font-bold text-gray-900">2.5B</div>
                </div>
              </div>

              {/* Social Media Stats */}
              <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
                <div className="grid grid-cols-4 gap-4">
                  <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    <span>287K</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>631.5K</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144A4.929 4.929 0 0 1 20.363 3.83a9.9 9.9 0 0 0 3.24-1.269 4.94 4.94 0 0 1-2.16 2.72 9.847 9.847 0 0 0 2.836-.776 10.02 10.02 0 0 1-2.453 2.54z"/>
                    </svg>
                    <span>628</span>
                  </a>
              </div>
            </div>

              {/* Platform Stats */}
              <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Overview</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-gray-700">Total Fans</div>
                    <div className="text-2xl font-bold text-gray-900">10.4M</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700">Total Eng. Impressions</div>
                    <div className="text-2xl font-bold text-gray-900">35.4B</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700">Biggest Platform</div>
                    <div className="text-2xl font-bold text-gray-900">TikTok</div>
                  </div>
                </div>
              </div>

              {/* Brand Collaborations */}
              <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Brand Collaborations</h3>
                <div className="grid grid-cols-4 gap-4">
                  {['Disney', 'Red Bull', 'The Cheesecake Factory', 'Grammy Awards'].map((brand) => (
                    <div key={brand} className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
                      <div className="text-sm text-gray-700">{brand}</div>
                      <button className="mt-2 text-sm text-blue-600">See Case Study</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* YouTube Stats */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">YouTube Stats</h3>
                  <div className="text-sm text-gray-700">
                    LAST UPDATED JAN 22, 2024 | <a href="#" className="text-blue-600">Go to Channel</a>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-gray-700">Subscribers</div>
                    <div className="text-2xl font-bold text-gray-900">287k</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700">Total Views</div>
                    <div className="text-2xl font-bold text-gray-900">186.71M</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700">Videos</div>
                    <div className="text-2xl font-bold text-gray-900">1.2k</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'inventory' && (
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Coming Soon</h3>
              <p className="text-gray-700">This section will display available inventory and pricing.</p>
            </div>
          )}
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#1a202c' }}>Request a Campaign</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Brand Name</label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Campaign Details</label>
                <textarea
                  name="campaignDetails"
                  value={formData.campaignDetails}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isMessageModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#1a202c' }}>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsMessageModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}