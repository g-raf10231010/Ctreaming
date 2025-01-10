"use client";

export default function Settings() {
  return (
    <div className="flex h-screen bg-gray-100 font-inter">
      {/* Left Sidebar Navigation */}
      <nav className="w-64 bg-white shadow-lg flex flex-col h-full">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-red-600">Ctreaming</h1>
        </div>
        
        {/* Main Menu Items */}
        <div className="p-4 flex-1">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <a href="/" className="block text-gray-900">Dashboard</a>
            </li>
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <a href="/campaigns" className="block text-gray-900">Campaigns</a>
            </li>
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <a href="/discover" className="block text-gray-900">Discover</a>
            </li>
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <a href="/messages" className="block text-gray-900">Messages</a>
            </li>
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <a href="/profile" className="block text-gray-900">Profile</a>
            </li>
          </ul>
        </div>

        {/* Settings at Bottom */}
        <div className="border-t p-4">
          <ul>
            <li className="p-2 bg-gray-100 rounded-md cursor-pointer">
              <a href="/settings" className="block text-gray-900">Settings</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Settings</h2>

        <div className="bg-white rounded-lg shadow-md">
          {/* Account Settings */}
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Account Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Notifications
                </label>
                <select className="w-full p-2 border rounded-md text-gray-900">
                  <option>All notifications</option>
                  <option>Important only</option>
                  <option>None</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Zone
                </label>
                <select className="w-full p-2 border rounded-md text-gray-900">
                  <option>Eastern Time (ET)</option>
                  <option>Pacific Time (PT)</option>
                  <option>Central Time (CT)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Security</h3>
            <div className="space-y-4">
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Change Password
                </button>
              </div>
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Enable Two-Factor Authentication
                </button>
              </div>
            </div>
          </div>

          {/* Billing Settings */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Billing</h3>
            <div className="space-y-4">
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Manage Payment Methods
                </button>
              </div>
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  View Billing History
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}