import Loader from '../Loader/Loader';

export default function SearchInput({
  loading,
  handleSearch,
  placeholder = 'type name here',
}) {
  return (
    <div className="search-input-container">
      <input
        className="search-input"
        placeholder={placeholder}
        type="text"
        onChange={(e) => (handleSearch ? handleSearch(e.target.value) : null)}
      />
      <Loader loading={loading} />
    </div>
  );
}
