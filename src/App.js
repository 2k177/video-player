import "./App.css";
import { useState } from "react";
import Video from "./Video.js";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

const videoNames = Object.keys(videos);

function App() {
  const [videoSrc, setVideoSrc] = useState("");

  function onRadioSelect(ev) {
    setVideoSrc(ev.target.value);
  }
  return (
    <div className="App">
      <h1>Video player</h1>
      <div>
        {videoNames.map((value, i) => (
          <div key={i} className="video-inputs">
            <input
              onChange={onRadioSelect}
              key={i}
              type="radio"
              name="src"
              value={value}
            />
            {value}
          </div>
        ))}
        <Video videoSrc={videos[videoSrc]} />
      </div>
    </div>
  );
}

export default App;
