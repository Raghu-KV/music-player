import Player from "./components/Player";
import Song from "./components/Song";
import "./style/app.scss";
import Data from "./Data";
import { useState, useRef } from "react";
import Library from "./components/Library";
import Navbar from "./components/Navbar";

function App() {
  const audioRef = useRef(null);
  const [tracks, setTracks] = useState(Data());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animanationPercentage: 0,
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  const handleTimeChange = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animate = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animanationPercentage: animate,
    });
  };

  // const songEndHandler = async () => {
  //   let currentIndex = tracks.findIndex((item) => item.id === currentTrack.id);
  //   await setCurrentTrack(tracks[(currentIndex + 1) % tracks.length]);

  //   if (isPlaying) audioRef.current.play();
  // if (isPlaying) {
  //   const playPromise = audioRef.current.play();

  //   if (playPromise) {
  //     playPromise.then(() => {
  //       audioRef.current.play();
  //     });
  //   }
  // }
  // };

  return (
    <div className={`App ${libraryStatus && "library-active"}`}>
      <Navbar
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentTrack={currentTrack} />
      <Player
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
        setTracks={setTracks}
      />
      <Library
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setTracks={setTracks}
        libraryStatus={libraryStatus}
      />
      <audio
        src={currentTrack.audio}
        ref={audioRef}
        onTimeUpdate={handleTimeChange}
        onLoadedMetadata={handleTimeChange}
        //onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
