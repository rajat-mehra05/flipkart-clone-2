const FilterBySize = ({ filterBy, setFilterBy }) => {
  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };
  return (
    <>
      <div className="flexed">
        <h4 className="radio-label"> Filter By: </h4>
        <div className="radio-wrapper" onChange={handleFilterChange}>
          <input
            type="radio"
            name="size"
            value="s"
            checked={filterBy === "s"}
          />{" "}
          S
          <input
            type="radio"
            name="size"
            value="m"
            checked={filterBy === "m"}
          />{" "}
          M
          <input
            type="radio"
            name="size"
            value="l"
            checked={filterBy === "l"}
          />{" "}
          L
          <input
            type="radio"
            name="size"
            value="xl"
            checked={filterBy === "xl"}
          />{" "}
          XL
        </div>
      </div>
    </>
  );
};

export default FilterBySize;
