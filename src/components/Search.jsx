const Search = (props) => {
  return (
    <div className="Search">
      <input
        type={props.searchType}
        placeholder={props.placeHolder}
        onChange={(inputString) => props.searchItems(inputString.target.value)}
      />
    </div>
  );
};

export default Search;
