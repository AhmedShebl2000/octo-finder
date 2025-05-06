import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    setQuery(e.target.value);
    onSearch(query);
  }

  return (
    <div>
      <input
        className="border p-2 px-4 rounded-full w-full
        focus:outline-none  focus:ring focus:ring-fuchsia-600"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
