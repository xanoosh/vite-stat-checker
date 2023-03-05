function SearchInput({ handleSearch }) {
  return (
    <input
      className="search-input"
      placeholder="type name here"
      type="text"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}

export default SearchInput;
