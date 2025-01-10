"use client";
import { useState } from 'react';

export default function Discover() {
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedContent, setSelectedContent] = useState('All');

  // Example data for featured creators
  const featuredCreators = [
    { id: '1', name: 'Skylar Star', followers: '2,420', image: '/placeholder.jpg', verified: true },
    { id: '2', name: 'Olivia Ray', followers: '1,210', image: '/placeholder.jpg', verified: true },
    { id: '3', name: 'Angelina', followers: '198,210', image: '/placeholder.jpg', verified: true },
  ];

  // Example data for creators list
  const creators = [
    { id: '1', name: 'Jane Doe', content: 'Fitness', budget: '$30,000', description: 'Content curating app', subDescription: 'Brings all your news into one place' },
    { id: '2', name: 'Capsule', websiteUrl: 'getcapsule.com', content: 'Food', budget: '$10,000', description: 'Design software', subDescription: 'Super lightweight design app' },
    { id: '3', name: 'Command+R', websiteUrl: 'cmdr.ai', content: 'Fashion', budget: '$40,000', description: 'Data prediction', subDescription: 'AI and machine learning data' },
    { id: '4', name: 'Hourglass', websiteUrl: 'hourglass.app', content: 'Lifestyle', budget: '$22,000', description: 'Productivity app', subDescription: 'Time management and productivity' },
    { id: '5', name: 'Layers', websiteUrl: 'getlayers.io', content: 'Sports', budget: '$18,000', description: 'Web app integrations', subDescription: 'Connect web apps seamlessly' },
  ];

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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Featured Creators</h1>

          {/* Featured Creators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredCreators.map((creator, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-semibold text-gray-900">{creator.name}</h3>
                        {creator.verified && (
                          <svg className="w-4 h-4 ml-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                    </svg>
                  </button>
                </div>
                <p className="text-3xl font-bold text-gray-900">{creator.followers}</p>
                <p className="text-gray-600">combined followers</p>
              </div>
            ))}
          </div>

          {/* Creators Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Creators</h2>
            <p className="text-gray-600 mb-6">Search for creators who have joined the Ctreaming community.</p>

            {/* Search and Filters */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Search for creator</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full pl-10 pr-3 py-2 border rounded-md text-gray-900"
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                  <select 
                    className="w-full p-2 border rounded-md text-gray-900"
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                  >
                    <option>All</option>
                    <option>YouTube</option>
                    <option>Snapchat</option>
                    <option>Instagram</option>
                    <option>TikTok</option>
                    <option>X</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <select 
                    className="w-full p-2 border rounded-md text-gray-900"
                    value={selectedContent}
                    onChange={(e) => setSelectedContent(e.target.value)}
                  >
                    <option>All</option>
                    <option>Lifestyle</option>
                    <option>Fitness</option>
                    <option>Food</option>
                    <option>Fashion</option>
                    <option>Sports</option>
                    <option>Finance</option>
                    <option>Tech</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Creators Table */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="grid grid-cols-5 p-4 border-b text-sm font-medium text-gray-500">
                <div>Creator</div>
                <div>Content</div>
                <div>Min Budget</div>
                <div>About</div>
                <div></div>
              </div>
              {creators.map((creator, index) => (
                <div key={index} className="grid grid-cols-5 p-4 border-b hover:bg-gray-50">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <div className="font-medium text-gray-900">{creator.name}</div>
                      {creator.websiteUrl && (
                        <div className="text-sm text-gray-500">{creator.websiteUrl}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-900">{creator.content}</div>
                  <div className="flex items-center text-gray-900">{creator.budget}</div>
                  <div>
                    <div className="font-medium text-gray-900">{creator.description}</div>
                    <div className="text-sm text-gray-500">{creator.subDescription}</div>
                  </div>
                  <div className="flex items-center justify-end">
                    <a href={`/creator/${creator.id}`} className="p-2 text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-6 gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button 
                  key={page}
                  className={`px-3 py-1 rounded text-gray-900 ${page === 1 ? 'bg-red-600 text-white' : 'hover:bg-gray-50'}`}
                >
                  {page}
                </button>
              ))}
              <span className="text-gray-900">...</span>
              <button className="px-3 py-1 border rounded text-gray-900 hover:bg-gray-50">11</button>
              <button className="px-3 py-1 border rounded text-gray-900 hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}