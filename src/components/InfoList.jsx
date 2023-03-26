import { useEffect, useState } from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import "./InfoList.css";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const InfoList = () => {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [letter, setLetter] = useState("a");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = list.filter((item) =>
        item["name"].toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(list);
    }
  };

  const filterByFirstLetter = (letter) => {
    if (letter !== "none") {
      setLetter(letter);
    }
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/characters?limit=50&nameStartsWith=${letter}&apikey=${API_KEY}`
      );
      const json = await response.json();
      console.log(json);
      setList(json["data"]["results"]);
    };
    fetchCharacters().catch(console.error);
  }, [letter]);

  return (
    <div className="InfoList">
      <div className="filters">
        <Search searchItems={searchItems}></Search>
        <Dropdown filterByFirstLetter={filterByFirstLetter}></Dropdown>
      </div>
      {searchInput.length > 0
        ? filteredResults.map((character) => (
            <div className="characterInfo">
              <div className="name">
                <b>{character["name"]}</b>
              </div>
              <div className="stories">
                <p>Number of Stories: {character["stories"]["available"]}</p>
              </div>
              <img
                src={
                  character["thumbnail"]["path"] +
                  "." +
                  character["thumbnail"]["extension"]
                }
              ></img>
            </div>
          ))
        : list &&
          list.map((character) => (
            <div className="characterInfo">
              <div className="name">
                <b>{character["name"]}</b>
              </div>
              <div className="stories">
                <p>Number of Stories: {character["stories"]["available"]}</p>
              </div>
              <img
                src={
                  character["thumbnail"]["path"] +
                  "." +
                  character["thumbnail"]["extension"]
                }
              ></img>
            </div>
          ))}
    </div>
  );
};

export default InfoList;
