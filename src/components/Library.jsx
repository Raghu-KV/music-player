import LibrarySong from "./LibrarySong";

function Library({
  tracks,
  setCurrentTrack,
  audioRef,
  isPlaying,
  setTracks,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus && "active-library"}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {tracks.map((singleTrack) => (
          <LibrarySong
            singleTrack={singleTrack}
            key={singleTrack.id}
            setCurrentTrack={setCurrentTrack}
            audioRef={audioRef}
            isPlaying={isPlaying}
            tracks={tracks}
            setTracks={setTracks}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
