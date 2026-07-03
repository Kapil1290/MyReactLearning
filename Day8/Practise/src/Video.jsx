import { useRef } from "react";


function Video(){

    const videoRef = useRef(null);


    function handleStart(){
        videoRef.current.play();
    }

    function handleStop(){
        videoRef.current.pause();
    }

    function handleReset(){
        videoRef.current.currentTime = 0;
    }

    function handleAhead(){
        videoRef.current.currentTime += 5;
    }

    function handleBack(){
        videoRef.current.currentTime -= 5;
    }

    return(
        <>
        <video ref={videoRef} height="400px" width="600px" src="Screen Recording 2026-03-29 162742.mp4"></video>

        <div>
            <button onClick={handleStart}  >Start</button>
            <button onClick={handleStop}  >Pause</button>
            <button onClick={handleReset} >Restart</button>
            <button onClick={handleAhead} >Forward</button>
            <button onClick={handleBack} >Backword</button>
        </div>
        </>
    )
}

export default Video;