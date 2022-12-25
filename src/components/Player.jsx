import { FaPause, FaPlay, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect } from "react";

function Player({
  setIsPlaying,
  isPlaying,
  setSongInfo,
  songInfo,
  audioRef,
  tracks,
  currentTrack,
  setCurrentTrack,
  setTracks,
}) {
  //handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // formate time function copied in stack over flow
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (event) => {
    audioRef.current.currentTime = event.target.value;
    //console.log(event.target.value);
    setSongInfo({ ...songInfo, currentTime: event.target.value });
  };

  const trackHandler = async (direction) => {
    let currentIndex = tracks.findIndex((item) => item.id === currentTrack.id);
    if (direction === "back") {
      if ((currentIndex - 1) % tracks.length === -1) {
        await setCurrentTrack(tracks[tracks.length - 1]);
        if (isPlaying) audioRef.current.play();
      } else {
        await setCurrentTrack(tracks[(currentIndex - 1) % tracks.length]);
        if (isPlaying) audioRef.current.play();
      }
      // console.log(tracks[currentIndex - 1]);
    } else if (direction === "front") {
      // console.log(tracks[currentIndex + 1]);
      await setCurrentTrack(tracks[(currentIndex + 1) % tracks.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  useEffect(() => {
    // if (isPlaying) {
    //   const playPromise = audioRef.current.play();

    //   if (playPromise) {
    //     playPromise.then(() => {
    //       audioRef.current.play();
    //     });
    //   }
    // }
    const newSong = tracks.map((item) => {
      if (item.id === currentTrack.id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setTracks(newSong);
  }, [currentTrack]);

  const trackAnimat = {
    transform: `translateX(${songInfo.animanationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-countrol">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentTrack.color[0]}, ${currentTrack.color[1]})`,
          }}
          className="track"
        >
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div style={trackAnimat} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-countrol">
        <FaAngleLeft
          className="skip-back"
          size={50}
          onClick={() => trackHandler("back")}
        />

        {isPlaying ? (
          <FaPause className="play" size={50} onClick={playSongHandler} />
        ) : (
          <FaPlay className="play" size={50} onClick={playSongHandler} />
        )}

        <FaAngleRight
          className="skip-forward"
          size={50}
          onClick={() => trackHandler("front")}
        />
      </div>
    </div>
  );
}

export default Player;
