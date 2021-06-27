import SortByPrice from "./SortByPrice";
import FilterBySize from "./FilterBySize";

const InputsWrapper = ({ sortBy, setSortBy, filterBy, setFilterBy }) => {
  const handleClear = () => {
    setSortBy(null);
    setFilterBy(null);
  };

  return (
    <div>
      <SortByPrice sortBy={sortBy} setSortBy={setSortBy} />
      <FilterBySize filterBy={filterBy} setFilterBy={setFilterBy} />
      <button onClick={handleClear} className="clear-btn">
        Clear
      </button>
    </div>
  );
};

export default InputsWrapper;
