"use client";
import { useState } from 'react';

export default function CampaignCreation() {
  const [formData, setFormData] = useState({
    campaignName: '',
    budget: '',
    startDate: '',
    endDate: '',
    targetGender: '',
    ageRangeMin: '',
    ageRangeMax: '',
    targetRegions: '',
    creativeRequirements: '',
    keyObjectives: '',
    brandSafetyRequirements: '',
    additionalNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here we'll add API call to save campaign later
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar Navigation (same as before) */}
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">Ctreaming</h1>
        </div>
        
        <div className="p-4">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              Dashboard
            </li>
            <li className="p-2 bg-blue-100 rounded-md cursor-pointer">
              Campaigns
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              Discover
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              Messages
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              Profile
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Create New Campaign</h2>
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
          {/* Basic Campaign Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Campaign Name
                </label>
                <input
                  type="text"
                  name="campaignName"
                  value={formData.campaignName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget
                </label>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>
          </div>

          {/* Audience Targeting */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Audience Targeting</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Gender
                </label>
                <select
                  name="targetGender"
                  value={formData.targetGender}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select Gender</option>
                  <option value="all">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age Range Min
                </label>
                <input
                  type="number"
                  name="ageRangeMin"
                  value={formData.ageRangeMin}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  min="13"
                  max="100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age Range Max
                </label>
                <input
                  type="number"
                  name="ageRangeMax"
                  value={formData.ageRangeMax}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  min="13"
                  max="100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Target Regions
              </label>
              <input
                type="text"
                name="targetRegions"
                value={formData.targetRegions}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g., North America, Europe, Asia"
              />
            </div>
          </div>

          {/* Creative Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Campaign Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Creative Requirements
              </label>
              <textarea
                name="creativeRequirements"
                value={formData.creativeRequirements}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="Describe your creative requirements..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Key Objectives
              </label>
              <textarea
                name="keyObjectives"
                value={formData.keyObjectives}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="What are the main objectives of this campaign?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand Safety Requirements
              </label>
              <textarea
                name="brandSafetyRequirements"
                value={formData.brandSafetyRequirements}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="Specify any brand safety requirements..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="Any additional information..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}