export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar Navigation */}
      <nav className="w-64 bg-white shadow-lg flex flex-col h-full">
      <div className="p-4 flex-1">
  <ul className="space-y-2">
    <li className="p-2 bg-blue-100 rounded-md cursor-pointer">
      <a href="/">Dashboard</a>
    </li>
    <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
      <a href="/campaigns">Campaigns</a>
    </li>
    <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
      <a href="/discover">Discover</a>
    </li>
    <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
      <a href="/messages">Messages</a>
    </li>
    <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
      <a href="/profile">Profile</a>
    </li>
  </ul>
</div>

{/* Settings at Bottom */}
<div className="border-t p-4">
  <ul>
    <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
      <a href="/settings">Settings</a>
    </li>
  </ul>
</div>
</nav>
      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Welcome Back</h2>
        
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Active Campaigns</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Active Ad Spend</h3>
            <p className="text-3xl font-bold text-green-600">24</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">All-time Ad Spend</h3>
            <p className="text-3xl font-bold text-orange-600">5</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
  <a href="/campaigns" className="block">
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer text-center">
      <h3 className="text-xl font-semibold text-blue-600">Create a Campaign</h3>
      <p className="text-gray-600 mt-2">Launch your advertising campaign</p>
    </div>
  </a>

  <a href="/discover" className="block">
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer text-center">
      <h3 className="text-xl font-semibold text-blue-600">Discover Publishers</h3>
      <p className="text-gray-600 mt-2">Find streaming content partners</p>
    </div>
  </a>
</div>
      </main>
    </div>
  );
}