const SortByPrice = ({ sortBy, setSortBy }) => {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="flexed">
      <h4 className="radio-label">Sort By:</h4>
      <div className="radio-wrapper" onChange={handleSortChange}>
        <input
          type="radio"
          value="h-t-l"
          name="price"
          checked={sortBy === "h-t-l"}
        />{" "}
        High-to-low
        <input
          type="radio"
          value="l-t-h"
          name="price"
          checked={sortBy === "l-t-h"}
        />{" "}
        Low-to-high
      </div>
    </div>
  );
};

export default SortByPrice;
