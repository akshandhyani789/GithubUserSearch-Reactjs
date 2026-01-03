import React from 'react'

function SearchBar({query, setQuery}) {
  return (
    <div className="flex justify-center">
  <div className="search-bar bg-white p-4 rounded-lg shadow-md flex items-center gap-4 ">
    <i className="fa-solid fa-magnifying-glass text-xl text-gray-500 leading-none"></i>

    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search GitHub username.."
      className="focus:outline-none sm:w-150"
    />
  </div>
</div>

  )
}

export default SearchBar
