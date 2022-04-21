import React,{useState,useEffect,useRef} from 'react'
import VideoChat from './VideoCall/VideoChat';
const Timer = () => {
     const [ minutes, setMinutes ] = useState(2);
    const [seconds, setSeconds ] =  useState(0);

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
            <center>
            <h2>Timer</h2>
        
        { minutes === 0 && seconds === 0
            ?
            <VideoChat />
            : <> <b>RemainingTime :</b> {minutes}:{seconds < 10 ? `0${seconds}`:seconds} Minutes</>
        }
        </center>
        </div>
    )
}  

export default Timer;