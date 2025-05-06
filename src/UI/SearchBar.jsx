import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    setQuery(e.target.value);
    onSearch(query);
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-fuchsia-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        className="border border-fuchsia-500 bg-gray-900 p-3 pl-10 pr-4 rounded-full w-full
        focus:outline-none focus:ring-2 focus:ring-fuchsia-600 text-white placeholder-gray-400 shadow-lg"
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
