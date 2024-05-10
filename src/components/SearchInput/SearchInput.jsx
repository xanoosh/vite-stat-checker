export default function SearchInput({
  loading,
  handleSearch,
  placeholder = 'type name here',
}) {
  return (
    <div className="input-container">
      <input
        className="search-input"
        placeholder={placeholder}
        type="text"
        onChange={(e) => (handleSearch ? handleSearch(e.target.value) : null)}
      />
      {loading ? <p>LOADING</p> : null}
    </div>
  );
}
