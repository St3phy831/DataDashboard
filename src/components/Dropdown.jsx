const Dropdown = (props) => {
  return (
    <div>
      <b className="filterTitle">Filter by First Letter:</b>
      <select
        onChange={(letter) => {
          props.filterByFirstLetter(letter.target.value);
        }}
      >
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
        <option value="e">E</option>
        <option value="f">F</option>
        <option value="g">G</option>
        <option value="h">H</option>
        <option value="i">I</option>
        <option value="j">J</option>
        <option value="k">K</option>
        <option value="l">L</option>
        <option value="m">M</option>
        <option value="o">O</option>
        <option value="p">P</option>
        <option value="q">Q</option>
        <option value="r">R</option>
        <option value="s">S</option>
        <option value="t">T</option>
        <option value="u">U</option>
        <option value="v">V</option>
        <option value="w">W</option>
        <option value="x">X</option>
        <option value="u">Y</option>
        <option value="z">Z</option>
      </select>
    </div>
  );
};

export default Dropdown;
