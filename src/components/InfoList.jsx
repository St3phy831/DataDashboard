import { useEffect, useState } from "react";
import "./InfoList.css";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const InfoList = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/characters?limit=50&apikey=${API_KEY}`
      );
      const json = await response.json();
      console.log(json);
      setList(json["data"]["results"]);
    };
    fetchCharacters().catch(console.error);
  }, []);

  return (
    <div className="InfoList">
      {list &&
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
