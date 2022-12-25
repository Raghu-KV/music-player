function Song({ currentTrack }) {
  return (
    <div className="song-container">
      <img src={currentTrack.cover} alt=" Song Cover " />
      <h2> {currentTrack.name} </h2>
      <h3>{currentTrack.artist}</h3>
    </div>
  );
}

export default Song;
