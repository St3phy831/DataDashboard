const Search = (props) => {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search Name"
        onChange={(inputString) => props.searchItems(inputString.target.value)}
      />
    </div>
  );
};

export default Search;
