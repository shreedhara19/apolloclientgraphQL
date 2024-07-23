import React from "react";
import "./Character.css";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router";

export default function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.character) {
    return <div>No character found</div>;
  }

  return (
    <div className="Character">
      <img
        src={data.character.image}
        width={750}
        height={750}
        alt={data.character.name}
      />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => (
            <div key={episode.name}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
