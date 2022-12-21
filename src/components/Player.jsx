import { FaPlay, FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Player() {
  return (
    <div className="player">
      <div className="time-countrol">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-countrol">
        <FaAngleLeft className="skip-back" size={50} />
        <FaPlay className="paly" size={50} />
        <FaAngleRight className="skip-forward" size={50} />
      </div>
    </div>
  );
}

export default Player;
