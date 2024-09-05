import React,{useState,useEffect,useRef} from 'react';

function Stopwatch(){

    const[isRunning, setisRunning] = useState(false);
    const[elapsedTime, setElapsedTime] = useState(0);
    const IntervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
     
    useEffect(() => {

        if (isRunning){
            intervalIdRef.current = setInterval(()=> {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return ()=> {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start(){

        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);

    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);


    }

    function formatTime(){

        return `00:00:00`;

    }

    return(
        <div className = "stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className='start-button'>Start</button>
                <button onClick={stop} className='stop-button'>Stop</button>
                <button onClick={reset} className='rest-button'>Reset</button>
            </div>
        </div>

    );


}

export default Stopwatch