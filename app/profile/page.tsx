"use client";

export default function Profile() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar Navigation */}
      <nav className="w-64 bg-white shadow-lg flex flex-col h-full">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">Ctreaming</h1>
        </div>
        
        {/* Main Menu Items */}
        <div className="p-4 flex-1">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/" className="block">Dashboard</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/campaigns" className="block">Campaigns</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/discover" className="block">Discover</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/messages" className="block">Messages</a>
            </li>
            <li className="p-2 bg-blue-100 rounded-md cursor-pointer">
              <a href="/profile" className="block">Profile</a>
            </li>
          </ul>
        </div>

        {/* Settings at Bottom */}
        <div className="border-t p-4">
          <ul>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/settings" className="block">Settings</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Profile</h2>
        
        <div className="bg-white rounded-lg shadow-md">
          {/* Profile Header */}
          <div className="p-6 border-b">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Company Name</h3>
                <p className="text-gray-600">Advertiser</p>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                <p className="text-gray-900">company@example.com</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Website</h4>
                <p className="text-gray-900">www.company.com</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Industry</h4>
                <p className="text-gray-900">Technology</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                <p className="text-gray-900">New York, USA</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-500 mb-1">About</h4>
              <p className="text-gray-900">
                Company description and additional information goes here. This can be a longer
                description about the company, its mission, and what kind of advertising campaigns
                they typically run.
              </p>
            </div>

            <div className="mt-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}