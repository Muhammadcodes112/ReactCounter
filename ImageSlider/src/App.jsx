import React, { useState, useRef, useEffect } from "react";
import { RiSunLine, RiMoonClearFill } from "react-icons/ri";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(<RiSunLine size={36} />);
  const [theme, setTheme] = useState("light");
  const audioRef = useRef(null);

  function handleClick() {
    setIndex((prevIndex) => prevIndex + 1);
    if (!isMuted && audioRef.current) {
      audioRef.current.play();
    }
  }

  function handleReset() {
    const result = window.confirm('Are you sure you want to proceed?');
    if (result) {
      console.log('User clicked OK');
      setIndex(0);
    } else {
      
    }
  }

  function toggleMute() {
    setIsMuted((prevMuted) => !prevMuted);
  }

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

 

  useEffect(() => {
    document.body.className = theme;
    setCurrentIcon(
      theme === "light" ? (
        <RiSunLine size={36} />
      ) : (
        <RiMoonClearFill size={36} />
      )
    );
  }, [theme]);

  return (
    <>
      <div>
        <h2 className="text-4xl font-bold">{index}</h2>
        <audio
          ref={audioRef}
          src="./src/images/tap-notification-180637.mp3"
        ></audio>
        <div className="image-container">
          <img
            src="./src/images/3d-fluency-shutdown.png"
            alt=""
            onClick={handleClick}
            className="w-80"
          />
        </div>
        <button
          onClick={handleReset}
          className="bg-red-400 text-3xl font-bold "
        >
          Reset
        </button>

        <div className="flex justify-center items-center space-x-10 rounded-sm border border-black h-20">
          <div className={`App${theme}`} onClick={toggleTheme}>
            {currentIcon}
          </div>
          <div onClick={toggleMute}>
            {isMuted ? <FaVolumeMute size={36} /> : <FaVolumeUp size={36} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
