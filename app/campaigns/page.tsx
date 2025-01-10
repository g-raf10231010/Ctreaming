"use client";
import { useState } from 'react';

export default function CampaignsList() {
  const [activeTab, setActiveTab] = useState('Active');
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    campaign: true,
    audience: true,
    creative: true
  });
  const [dateRange, setDateRange] = useState('Jan 6, 2024 - Jan 13, 2024');
  const [isEditing, setIsEditing] = useState(false);

  const campaigns = [
    {
      id: 1,
      name: 'Marketing Campaign A',
      company: 'Tech Corp',
      budget: '$30,021',
      endDate: 'Jan 13, 2024',
      status: 'Draft',
      manager: {
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        avatar: '/placeholder.jpg'
      }
    },
    {
      id: 2,
      name: 'Brand Awareness',
      company: 'Innovation Ltd',
      budget: '$25,045',
      endDate: 'Jan 13, 2024',
      status: 'Active',
      manager: {
        name: 'Mike Smith',
        email: 'mike@example.com',
        avatar: '/placeholder.jpg'
      }
    }
  ];

  const tabs = [
    { id: 'active', label: 'Active' },
    { id: 'drafts', label: 'Drafts' },
    { id: 'completed', label: 'Completed' }
  ];

  const toggleSection = (section: 'campaign' | 'audience' | 'creative') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCampaignClick = (campaign: any) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

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
            <li className="p-2 bg-blue-100 rounded-md cursor-pointer">
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

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
              <p className="text-gray-600">View your team's campaigns.</p>
            </div>
            <button 
              onClick={() => window.location.href = '/campaigns/create'} 
              className="bg-[#e01616] text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              + Create New
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.label)}
                className={`px-4 py-2 rounded-md ${
                  activeTab === tab.label 
                    ? 'bg-gray-200 text-gray-900' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="flex justify-between mb-6">
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Search for campaigns"
                className="w-full pl-10 pr-4 py-2 border rounded-md"
              />
              <svg 
                className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 border rounded-md flex items-center text-gray-900">
                <span className="mr-2">{dateRange}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="px-4 py-2 border rounded-md flex items-center text-gray-900">
                Filters
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Campaigns Table */}
          <div className="bg-white rounded-lg shadow">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 p-4 border-b text-sm font-medium text-gray-500">
              <div className="col-span-2">Campaign</div>
              <div>Budget</div>
              <div>End date</div>
              <div>Status</div>
              <div>Managed by</div>
            </div>

            {/* Table Body */}
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                onClick={() => handleCampaignClick(campaign)}
                className="grid grid-cols-6 gap-4 p-4 border-b hover:bg-gray-50 cursor-pointer transition-colors duration-150"
              >
                <div className="col-span-2">
                  <div className="font-medium text-gray-900">{campaign.name}</div>
                  <div className="text-sm text-gray-500">{campaign.company}</div>
                </div>
                <div className="text-gray-900">{campaign.budget}</div>
                <div className="text-gray-900">{campaign.endDate}</div>
                <div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{campaign.manager.name}</div>
                      <div className="text-sm text-gray-500">{campaign.manager.email}</div>
                    </div>
                  </div>
                  <button className="text-[#e01616] hover:text-red-700">
                    
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-6 gap-2">
            {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded text-gray-900 ${page === 1 ? 'bg-red-600 text-white' : 'hover:bg-gray-50'}`}
              >
                {page}
              </button>
            ))}
            <span className="text-gray-900">...</span>
            <button className="px-3 py-1 border rounded text-gray-900 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </main>

      {/* Campaign Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
            {/* Modal Header */}
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Campaign Details</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Campaign Section */}
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 
                  className="text-xl font-semibold text-gray-900 mb-6 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection('campaign')}
                >
                  Campaign
                  <button className="text-gray-400">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transform transition-transform ${expandedSections.campaign ? 'rotate-180' : ''}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </h2>

                {expandedSections.campaign && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Campaign name</label>
                        <input
                          type="text"
                          value={selectedCampaign?.name}
                          className="w-full p-2 border rounded-md"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                        <div className="relative">
                          <span className="absolute left-3 top-2">$</span>
                          <input
                            type="text"
                            value={selectedCampaign?.budget}
                            className="w-full p-2 pl-8 border rounded-md"
                            disabled={!isEditing}
                          />
                          <span className="absolute right-3 top-2 text-gray-500">USD</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Desired launch date</label>
                      <input
                        type="date"
                        value={selectedCampaign?.endDate}
                        className="w-full p-2 border rounded-md"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Audience Section */}
              <div className="bg-white rounded-lg border p-6 mb-6">
                {/* Copy the audience section from create/page.tsx but add disabled={!isEditing} */}
              </div>

              {/* Creative Section */}
              <div className="bg-white rounded-lg border p-6 mb-6">
                {/* Copy the creative section from create/page.tsx but add disabled={!isEditing} */}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t flex justify-end space-x-4">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                {isEditing ? 'Save Changes' : 'Edit Campaign'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}