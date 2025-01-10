"use client";

export default function Home() {
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
            <li className="p-2 bg-blue-100 rounded-md cursor-pointer">
              <a href="/" className="text-gray-900">Dashboard</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/campaigns" className="text-gray-900">Campaigns</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
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
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome back</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 mr-2 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <p className="text-gray-600">Active Campaigns</p>
                </div>
                <h3 className="text-4xl font-bold text-gray-900">20</h3>
                <p className="text-sm mt-2">
                  <span className="text-green-500">↑ 20%</span>
                  <span className="text-gray-600 ml-1">vs last month</span>
                </p>
              </div>
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 mr-2 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                  <p className="text-gray-600">Active Ad Spend</p>
                </div>
                <h3 className="text-4xl font-bold text-gray-900">$9,210</h3>
                <p className="text-sm mt-2">
                  <span className="text-green-500">↑ 15%</span>
                  <span className="text-gray-600 ml-1">vs last month</span>
                </p>
              </div>
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 mr-2 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-4h9v2H5z"/>
                  </svg>
                  <p className="text-gray-600">All-time Ad Spend</p>
                </div>
                <h3 className="text-4xl font-bold text-gray-900">$50,000</h3>
              </div>
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/campaigns" className="block">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center">
                <div className="mr-4 text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Create Campaign</h3>
                  <p className="text-gray-600">Add yourself or import from CSV</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/discover" className="block">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center">
                <div className="mr-4 text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Discover Creators & Publishers</h3>
                  <p className="text-gray-600">Add yourself or import from CSV</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}