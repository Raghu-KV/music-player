function LibrarySong({
  singleTrack,
  setCurrentTrack,
  audioRef,
  isPlaying,
  tracks,
  setTracks,
}) {
  const handleSongChange = async () => {
    await setCurrentTrack(singleTrack);
    // if (isPlaying) {
    //   const playPromise = audioRef.current.play();

    //   if (playPromise) {
    //     playPromise.then(() => {
    //       audioRef.current.play();
    //     });
    //   }
    // }
    if (isPlaying) audioRef.current.play();
    const newSong = tracks.map((item) => {
      if (item.id === singleTrack.id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setTracks(newSong);
  };

  return (
    <div
      className={`library-song ${singleTrack.active && "selected"}`}
      onClick={handleSongChange}
    >
      <img src={singleTrack.cover} alt=" Song Cover " />
      <div className="song-des">
        <h3> {singleTrack.name} </h3>
        <h4>{singleTrack.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
