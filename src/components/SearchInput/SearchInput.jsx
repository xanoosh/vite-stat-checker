import Loader from '../Loader/Loader';

export default function SearchInput({
  loading,
  placeholder = 'Search by name',
  value,
  setValue,
}) {
  return (
    <div className="search-input-container">
      <input
        className="search-input"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Loader loading={loading} />
    </div>
  );
}
