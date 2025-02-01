import React from 'react';
import { ChevronRight, Users } from 'lucide-react';
import  ImageUrl  from './image.png';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-gray-800">Cancer Analytics Dashboard</h1>
        </div>
        <select className="border rounded px-3 py-1">
          <option>All</option>
        </select>
      </header>

      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-gray-600 font-medium">TOTAL CANCER INCIDENCES & MORTALITIES</h2>
          <p className="text-sm text-gray-500">* Per 100,000 age adjusted to the US Standard Population</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2 bg-white rounded-lg border p-4">
            <img 
              src={ImageUrl}
              alt="USA Cancer Statistics Map"
              className="w-full h-[400px] object-contain rounded bg-white"
            />
            
            {/* Legend */}
            <div className="mt-6 border rounded-lg p-4">
              <p className="text-center text-gray-700 font-medium mb-4">CANCER EVENTS INDEX - 2017</p>
              <div className="flex justify-between items-center space-x-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs mt-1">Below 5K</span>
                  <div className="w-16 h-4 bg-gray-300"></div>
                  
                </div>
                <div className="flex flex-col items-center">
                   <span className="text-xs mt-1">5K - 10K</span>
                  <div className="w-16 h-4 bg-pink-300"></div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs mt-1">11K - 20K</span>
                  <div className="w-16 h-4 bg-pink-400"></div>
                  
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs mt-1">21K - 30K</span>
                  <div className="w-16 h-4 bg-pink-500"></div>
                  
                </div>
                <div className="flex flex-col items-center">
                   <span className="text-xs mt-1">31K - 45K</span>
                  <div className="w-16 h-4 bg-pink-600"></div>
                 
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs mt-1">46K - 60K</span>
                  <div className="w-16 h-4 bg-pink-800"></div>
                  
                </div>
                <div className="flex flex-col items-center">
                   <span className="text-xs mt-1">Above 60K</span>
                  <div className="w-16 h-4 bg-black"></div>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-lg border p-4">
            <div className="mb-3">
              <h3 className="text-gray-400 text-sm">AT A GLANCE...</h3>
              <h2 className="font-bold text-xl text-gray-800">USA CANCER STATISTICS</h2>
            </div>

            <div className="space-y-3">
              {/* Total Population */}
              <div className="border-b pb-3">
                <p className="text-gray-500 mb-1">TOTAL POPULATION AFFECTED</p>
                <div className="flex items-center gap-2">
                  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/users.svg" alt="Users" className="w-6 h-6 text-gray-400" />
                  <span className="text-3xl font-bold text-gray-800">743M</span>
                </div>
              </div>

              {/* Gender Stats */}
              <div className="grid grid-cols-2 gap-4 border-b pb-3">
                <div>
                  <p className="text-gray-500 text-sm">MALE</p>
                  <div className="flex items-center gap-2">
                    <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/user.svg" alt="Male" className="w-5 h-5 text-gray-400" />
                    <span className="text-xl font-bold text-gray-800">191M</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">FEMALE</p>
                  <div className="flex items-center gap-2">
                    <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/user.svg" alt="Female" className="w-5 h-5 text-gray-400" />
                    <span className="text-xl font-bold text-gray-800">181M</span>
                  </div>
                </div>
              </div>

              {/* Demographics Tabs */}
              <div className="flex border rounded-md overflow-hidden mb-2">
                <button className="flex-1 py-1.5 px-4 bg-indigo-900 text-white text-sm">DEMOGRAPHY</button>
                <button className="flex-1 py-1.5 px-4 bg-white text-gray-600 text-sm">AREA</button>
              </div>

              {/* Major Age Group */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">MAJOR AGE GROUP</p>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-2xl font-bold text-gray-800 mb-2">70-74 Years</p>

                {/* Progress Bars */}
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">INCIDENTS</p>
                    <div className="h-4 flex rounded overflow-hidden">
                      <div className="bg-indigo-900 w-[50.91%] text-[10px] text-white text-right pr-1 leading-4">49.90%</div>
                      <div className="bg-orange-400 w-[49.09%] text-[10px] text-white pl-1 leading-4">50.91%</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">MORTALITY</p>
                    <div className="h-4 flex rounded overflow-hidden">
                      <div className="bg-indigo-900 w-[52.13%] text-[10px] text-white text-right pr-1 leading-4">47.87%</div>
                      <div className="bg-orange-400 w-[47.87%] text-[10px] text-white pl-1 leading-4">52.13%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infants Section */}
              <div className="space-y-2 pt-2">
                <p className="text-gray-500">INFANTS IMPACTED</p>
                <p className="text-2xl font-bold text-gray-800 mb-2">&lt;1 Year</p>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">INCIDENTS</p>
                    <div className="h-4 flex rounded overflow-hidden">
                      <div className="bg-indigo-900 w-[50.91%] text-[10px] text-white text-right pr-1 leading-4">49.09%</div>
                      <div className="bg-orange-400 w-[49.09%] text-[10px] text-white pl-1 leading-4">50.91%</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">MORTALITY</p>
                    <div className="h-4 flex rounded overflow-hidden">
                      <div className="bg-indigo-900 w-[52.13%] text-[10px] text-white text-right pr-1 leading-4">47.87%</div>
                      <div className="bg-orange-400 w-[47.87%] text-[10px] text-white pl-1 leading-4">52.13%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-900"></div>
                  <span className="text-sm text-gray-600">Male</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400"></div>
                  <span className="text-sm text-gray-600">Female</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
