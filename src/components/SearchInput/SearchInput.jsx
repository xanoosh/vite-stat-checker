export default function SearchInput({ handleSearch }) {
  return (
    <input
      className="search-input"
      placeholder="type name here"
      type="text"
      onChange={(e) => (handleSearch ? handleSearch(e.target.value) : null)}
    />
  );
}
