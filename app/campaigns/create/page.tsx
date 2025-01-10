"use client";
import { useState } from 'react';

export default function CreateCampaign() {
  const [expandedSections, setExpandedSections] = useState({
    campaign: true,
    audience: true,
    creative: true
  });
  const [productLinks, setProductLinks] = useState(['']); // Add state for product links

  // Function to toggle sections
  const toggleSection = (section: 'campaign' | 'audience' | 'creative') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Function to handle product link changes
  const handleProductLinkChange = (index: number, value: string) => {
    const newProductLinks = [...productLinks];
    newProductLinks[index] = value;
    setProductLinks(newProductLinks);
  };

  // Function to add a new product link
  const addProductLink = () => {
    setProductLinks([...productLinks, '']);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Simplified Sidebar */}
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-red-600">Ctreaming</h1>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-100 rounded">
              <a href="/dashboard" className="text-gray-900">Dashboard</a>
            </li>
            <li className="p-2 bg-gray-100 rounded">
              <a href="/campaigns" className="text-gray-900">Campaigns</a>
            </li>
            <li className="p-2 hover:bg-gray-100 rounded">
              <a href="/settings" className="text-gray-900">Settings</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Campaign name</label>
                    <input
                      type="text"
                      placeholder="Campaign Name"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2">$</span>
                      <input
                        type="text"
                        placeholder="1,000.00"
                        className="w-full p-2 pl-8 border rounded-md"
                      />
                      <span className="absolute right-3 top-2 text-gray-500">USD</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Desired launch date</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select targeted genders</option>
                      <option value="all">All</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select target age range</option>
                      <option value="13-17">13-17</option>
                      <option value="18-24">18-24</option>
                      <option value="25-34">25-34</option>
                      <option value="35-44">35-44</option>
                      <option value="45+">45+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="Please provide a desired location description (if applicable)"
                    className="w-full p-2 border rounded-md"
                  />
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product/Service</label>
                  <textarea
                    placeholder="Please describe the product or service for this campaign"
                    className="w-full p-2 border rounded-md"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md">
                        http://
                      </span>
                      <input
                        type="text"
                        placeholder="www.example.com"
                        className="flex-1 p-2 border border-l-0 rounded-r-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product links</label>
                    {productLinks.map((link, index) => (
                      <div key={index} className="flex mb-2">
                        <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md">
                          http://
                        </span>
                        <input
                          type="text"
                          value={link}
                          onChange={(e) => handleProductLinkChange(index, e.target.value)}
                          placeholder="www.example.com"
                          className="flex-1 p-2 border border-l-0 rounded-r-md"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addProductLink}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      + Add another link
                    </button>
                  </div>
                </div>

                {/* File Upload Sections */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Creative requirements</label>
                    <div className="border-2 border-dashed rounded-lg p-4 text-center">
                      <div className="mb-2">
                        <span className="text-red-500 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                      </div>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800×400px)</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Legal requirements</label>
                    <div className="border-2 border-dashed rounded-lg p-4 text-center">
                      <div className="mb-2">
                        <span className="text-red-500 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                      </div>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800×400px)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-end gap-4">
  <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50">
    Delete
  </button>
  <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50">
    Save Draft
  </button>
  <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
    Create
  </button>
</div>
        </div>
      </main>
    </div>
  );
}