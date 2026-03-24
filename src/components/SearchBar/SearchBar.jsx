import { FiSearch } from 'react-icons/fi'

function SearchBar({ value, onChange, placeholder }) {
    return (
        <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
                type="text"
                value={value}
                onChange={function (e) { onChange(e.target.value) }}
                placeholder={placeholder || 'Search...'}
                className="search-input"
            />
        </div>
    )
}

export default SearchBar
