function SearchInput({ handleSearch }) {
  return (
    <div className="card">
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
}

export default SearchInput;
