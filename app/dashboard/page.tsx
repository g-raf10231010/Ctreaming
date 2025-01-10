import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg 
                  className="h-6 w-6 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="ml-4 text-lg font-semibold text-gray-900">Card Title 1</h3>
              </div>
              <p className="text-gray-700">Card content goes here...</p>
            </div>

            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg 
                  className="h-6 w-6 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="ml-4 text-lg font-semibold text-gray-900">Card Title 2</h3>
              </div>
              <p className="text-gray-700">Card content goes here...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
