"use client";

export default function Discover() {
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
      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Discover Publishers</h2>
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Search publishers..."
              className="flex-1 p-2 border rounded-md"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>
          
          <div className="flex gap-4">
            <select className="p-2 border rounded-md">
              <option>Category</option>
              <option>Gaming</option>
              <option>Entertainment</option>
              <option>Sports</option>
              <option>Music</option>
            </select>
            
            <select className="p-2 border rounded-md">
              <option>Audience Size</option>
              <option>0-10K</option>
              <option>10K-50K</option>
              <option>50K-100K</option>
              <option>100K+</option>
            </select>
            
            <select className="p-2 border rounded-md">
              <option>Region</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
              <option>Global</option>
            </select>
          </div>
        </div>

        {/* Publishers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Publisher Cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Publisher Name</h3>
                <p className="text-gray-600 text-sm mb-2">Category: Entertainment</p>
                <p className="text-gray-600 text-sm mb-2">Audience: 50K+</p>
                <p className="text-gray-600 text-sm mb-4">Region: North America</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}