const Search = (props) => {
  return (
    <div className="Search">
      <input
        type={props.searchType}
        placeholder={props.placeHolder}
        onChange={(inputString) => props.searchItems(inputString.target.value)}
        value={props.value === -1 ? "" : props.value}
      />
    </div>
  );
};

export default Search;
