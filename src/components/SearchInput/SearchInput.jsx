export default function SearchInput({
  handleSearch,
  placeholder = 'type name here',
}) {
  return (
    <input
      className="search-input"
      placeholder={placeholder}
      type="text"
      onChange={(e) => (handleSearch ? handleSearch(e.target.value) : null)}
    />
  );
}
