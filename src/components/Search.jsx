function Search({ search, setSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">
        Search Plants:
      </label>

      <input
        id="search"
        type="text"
        placeholder="Type a name..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
}

export default Search;