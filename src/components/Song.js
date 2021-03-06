import React from "react";

const Song = ({ currentSong }) => {
  /* Getting currentSong as props from App.js */
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="Album Cover"></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
