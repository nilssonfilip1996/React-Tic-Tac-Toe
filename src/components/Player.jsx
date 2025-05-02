import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  console.log(isEditing);

  function handleIsEditing() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {  //event is an object with information about the change.
    setPlayerName(event.target.value);
  }

  let playerNameField = <span className="player-name">{playerName}</span>;

  if(isEditing){
    playerNameField = <input type="text" required defaultValue={playerName} onChange={handleChange}></input>;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}


