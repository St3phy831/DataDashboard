import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Dropdown from "./Dropdown";
import "./InfoList.css";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const InfoList = (props) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchStories, setSearchStories] = useState(-1);
  const [letter, setLetter] = useState("a");

  const searchByName = (searchValue) => {
    setSearchName(searchValue);
    if (searchValue !== "") {
      const filteredData = props.list.filter((item) =>
        item["name"].toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(props.list);
    }
  };

  const searchByStories = (searchValue) => {
    setSearchStories(searchValue);
    if (searchValue >= 0) {
      const filteredData = props.list.filter(
        (item) => item["stories"]["available"] == searchValue
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(props.list);
    }
  };

  const filterByFirstLetter = (letter) => {
    if (letter !== "none") {
      setLetter(letter);
      setSearchName("");
      setSearchStories(-1);
    }
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/characters?limit=50&nameStartsWith=${letter}&apikey=${API_KEY}`
      );
      const json = await response.json();
      console.log(json);
      props.setList(json["data"]["results"]);
    };
    fetchCharacters().catch(console.error);
  }, [letter]);

  return (
    <div className="InfoList">
      <div className="filters">
        <Search
          searchType="text"
          placeHolder="Search by Name"
          searchItems={searchByName}
          value={searchName}
        ></Search>
        <Search
          searchType="number"
          placeHolder="Search by Stories"
          searchItems={searchByStories}
          value={searchStories}
        ></Search>
        <Dropdown filterByFirstLetter={filterByFirstLetter}></Dropdown>
      </div>
      {searchName.length > 0 || searchStories >= 0
        ? filteredResults.map((character) => (
            <div className="characterInfo">
              <div className="name">
                <Link to={"/" + character["id"]}>
                  <b>{character["name"]}</b>
                </Link>
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
        : props.list &&
          props.list.map((character) => (
            <div className="characterInfo">
              <div className="name">
                <Link to={"/" + character["id"]}>
                  <b>{character["name"]}</b>
                </Link>
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
