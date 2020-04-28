import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Timer from 'react-compound-timer'

const a = false

function TimerExercice(props) {
    return (
        <div>
            <Timer
                initialTime={props.exercices.temps_exo * 1016}
                direction="backward"
                timeToUpdate={20}
            >
                {() => (
                    <React.Fragment>
                        <Timer.Seconds/> secondes
                    </React.Fragment>
                )}
            </Timer>
        </div>
    )
}


function TimerRepos(props) {
    return (
        <div>
            <Timer
                initialTime={props.exercices.temps_repos * 1016}
                direction="backward"
                checkpoints={[
                    {
                        time: 0,
                        callback: () => endOfTimer(),
                    }
                ]}
                timeToUpdate={20}>{() => (
                    <React.Fragment>
                        <Timer.Seconds/> secondes
                    </React.Fragment>
            )}
            </Timer>
        </div>
    )
}



export default function TimerExercices(props) {
       const [nb, setNb]= useState(1)


    useEffect(() => {
        setNb(1)
    }, [props.exercices]);

     function endOfTimer() {
         setNb(nb + 1 )
     }

    if(nb %2 == 1)
        return (
            <TimerExercice exercices={props.exercices} endOfTimer={endOfTimer}/>
        )

    return (
        <TimerRepos exercices={props.exercices}/>
    )
    }