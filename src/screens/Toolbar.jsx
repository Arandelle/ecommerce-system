import { useState } from "react";

const Toolbar = ({buttons, label, searchQuery, setSearchQuery}) => {

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white dark:bg-gray-800">
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 w-full sm:w-auto">
       {buttons}
      </div>

      <h2 className="text-md lg:text-lg font-bold text-gray-600 dark:text-green-500 text-center w-full sm:w-auto">
       {label}
      </h2>

      <div className="relative w-full sm:w-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="text"
          id="table-search-users"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full sm:w-80 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder={`Search for something....`}
        />
      </div>
    </div>
  );
};

export default Toolbar;