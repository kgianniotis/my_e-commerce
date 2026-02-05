import "./SearchBar.css";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      className="searchBar"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
