import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailView.css";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const DetailView = () => {
  const params = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/characters/${params.id}?apikey=${API_KEY}`
      );
      const json = await response.json();
      console.log(params.id);
      console.log(json["data"]["results"][0]);
      setCharacter(json["data"]["results"][0]);
    };
    fetchCharacter().catch(console.error);
  }, []);

  return (
    <div className="DetailView">
      {character && (
        <div className="Character">
          <div className="info">
            <img
              src={
                character["thumbnail"]["path"] +
                "." +
                character["thumbnail"]["extension"]
              }
            ></img>
            <div>
              <div>
                <b>Name: </b> {character["name"]}
              </div>
              <div>
                <b>ID: </b>
                {character["id"]}
              </div>
              <b>Description: </b>
              {character["description"]}
            </div>
          </div>
          <br></br>
          <div className="otherInfo">
            <div>
              <b>Last Modified: </b> {character["modified"]}
            </div>
            <div>
              <b>Comics: </b> {character["comics"]["available"]}
            </div>
            <div>
              <b>Series: </b> {character["series"]["available"]}
            </div>
            <div>
              <b>Stories: </b> {character["stories"]["available"]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
