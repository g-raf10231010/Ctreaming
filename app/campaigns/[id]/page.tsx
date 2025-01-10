'use client';
import { useState } from 'react';

export default function CampaignDetail({ params }: { params: { id: string } }) {
  const [expandedSections, setExpandedSections] = useState({
    campaign: true,
    audience: true,
    creative: true
  });
  const [productLinks, setProductLinks] = useState(['www.product1.com', 'www.product2.com']);
  const [isEditing, setIsEditing] = useState(false);
  
  // Sample campaign data - replace with actual data fetching
  const [campaign, setCampaign] = useState({
    id: params.id,
    name: 'Marketing Campaign A',
    company: 'Tech Corp',
    budget: '30021',
    endDate: '2024-01-13',
    status: 'Active',
    audience: {
      gender: 'All',
      ageRange: '18-24',
      location: 'United States'
    },
    creative: {
      description: 'Product marketing campaign for tech services',
      website: 'www.techcorp.com',
      productLinks: ['www.product1.com', 'www.product2.com']
    },
    manager: {
      name: 'Sarah Johnson',
      email: 'sarah@example.com'
    }
  });

  const toggleSection = (section: 'campaign' | 'audience' | 'creative') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleProductLinkChange = (index: number, value: string) => {
    const newProductLinks = [...productLinks];
    newProductLinks[index] = value;
    setProductLinks(newProductLinks);
  };

  const addProductLink = () => {
    setProductLinks([...productLinks, '']);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-red-600">Ctreaming</h1>
        </div>
        {/* ...existing navigation code... */}
      </nav>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header with Back Arrow and Edit Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.location.href = '/campaigns'}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-gray-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Campaign Details</h1>
            </div>
            <div className="space-x-4">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
              {isEditing && (
                <button 
                  onClick={() => {
                    setIsEditing(false);
                    // Add save logic here
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>

          {/* Campaign Section */}
          <div className="bg-white rounded-lg p-6 mb-6">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Campaign Name
                  </label>
                  <input
                    type="text"
                    value={campaign.name}
                    onChange={(e) => setCampaign({...campaign, name: e.target.value})}
                    disabled={!isEditing}
                    className="w-full p-2 border rounded-md disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget
                  </label>
                  <input
                    type="text"
                    value={campaign.budget}
                    onChange={(e) => setCampaign({...campaign, budget: e.target.value})}
                    disabled={!isEditing}
                    className="w-full p-2 border rounded-md disabled:bg-gray-50"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Audience Section */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 
              className="text-xl font-semibold text-gray-900 mb-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('audience')}
            >
              Audience
              <button className="text-gray-400">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform ${expandedSections.audience ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </h2>

            {expandedSections.audience && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    value={campaign.audience.gender}
                    onChange={(e) => setCampaign({
                      ...campaign,
                      audience: {...campaign.audience, gender: e.target.value}
                    })}
                    disabled={!isEditing}
                    className="w-full p-2 border rounded-md disabled:bg-gray-50"
                  >
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age Range
                  </label>
                  <select
                    value={campaign.audience.ageRange}
                    onChange={(e) => setCampaign({
                      ...campaign,
                      audience: {...campaign.audience, ageRange: e.target.value}
                    })}
                    disabled={!isEditing}
                    className="w-full p-2 border rounded-md disabled:bg-gray-50"
                  >
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45+">45+</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Creative Section */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 
              className="text-xl font-semibold text-gray-900 mb-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('creative')}
            >
              Creative
              <button className="text-gray-400">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform ${expandedSections.creative ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </h2>

            {expandedSections.creative && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={campaign.creative.description}
                    onChange={(e) => setCampaign({
                      ...campaign,
                      creative: {...campaign.creative, description: e.target.value}
                    })}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full p-2 border rounded-md disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="text"
                    value={campaign.creative.website}
                    onChange={(e) => setCampaign({
                      ...campaign,
                      creative: {...campaign.creative, website: e.target.value}
                    })}
                    disabled={!isEditing}
                    className="w-full p-2 border rounded-md disabled:bg-gray-50"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-end gap-4">
            <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50">
              Delete Campaign
            </button>
            {isEditing && (
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                Save Changes
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
