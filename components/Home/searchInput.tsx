import React from 'react';

function SearchInput() {
  return (
    <div className="w-full py-10 px-4 md:px-0">
      <h2 className="text-center text-2xl text-gray-600 mb-6">
        Let’s search for your next ride
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
        {/* Location Input */}
        <div className="relative w-full md:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter a location..."
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-700"
          />
        </div>

        {/* Date Picker */}
        <div className="relative w-full md:w-1/2">
          <input
            type="date"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-700"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
