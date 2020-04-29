import React, {useEffect, useState} from 'react';
import Timer from 'react-compound-timer';
import logo from './logo.svg';

export default function TimerExercices(props) {
    const [nb, setNb]= useState(1)
    useEffect(() => {
        setNb(1)
    }, [props.exercices]);

    function endOfTimer() {
        setNb(nb + 1)
    }

    if (nb == props.exercices.nb_exos*2*props.exercices.nbr_serie)
        return (
            <div>
                <div className="logo_timer">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="time_margin">
                    <p className="timer_name">Fini ! <br/> Bien joué !</p>
                    <a className="bouton_start" href="/">Retour à la page d'accueil </a>
                </div>
            </div>
        )
    if (nb==props.exercices.nb_exos*2) {
        return (
            <TimerRepos2 exercices={props.exercices} endOfTimer={endOfTimer}/>
        )
    }
    if (nb % 2 == 1)
        return (
            <TimerExercice exercices={props.exercices} endOfTimer={endOfTimer}/>
        )

    return (
        <TimerRepos exercices={props.exercices} endOfTimer={endOfTimer}/>
    )

    function TimerExercice(props) {
        return (
            <div>
                <div className="logo_timer">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="time_margin">
                    <div className="all_time">
                        <p className="all_numbers">
                            <Timer
                                initialTime={props.exercices.temps_exo * 1016}
                                direction="backward"
                                timeToUpdate={20}
                                checkpoints={[
                                    {
                                        time: 0,
                                        callback: () => endOfTimer(),
                                    }
                                ]}
                            >
                                {({ start, pause, timerState }) => (
                                    <React.Fragment>
                                        <Timer.Seconds/> <br/>secondes
                                        <div>
                                            <button onClick={start}>Start</button>
                                            <button onClick={pause}>Pause</button>
                                        </div>
                                    </React.Fragment>
                                )}
                            </Timer>
                        </p>
                    </div>
                    <p className="timer_name">Exercice</p>
                </div>
                <div className="timer_button">
                    <a className="bouton_start" href="/">Arrêter l'entrainement </a>
                </div>
            </div>
        )
    }

    function TimerRepos2(props) {
        return (
            <div>
                <div className="logo_timer">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="time_margin">
                    <div className="all_time">
                        <p className="all_numbers">
                            <Timer
                                initialTime={props.exercices.temps_repos_2 * 1016}
                                direction="backward"
                                timeToUpdate={20}
                                checkpoints={[
                                    {
                                        time: 0,
                                        callback: () => endOfTimer(),
                                    }
                                ]}
                            >
                                {({ start, pause, timerState }) => (
                                    <React.Fragment>
                                        <Timer.Seconds/> <br/>secondes
                                        <div>
                                            <button onClick={start}>Start</button>
                                            <button onClick={pause}>Pause</button>
                                        </div>
                                    </React.Fragment>
                                )}
                            </Timer>
                        </p>
                    </div>
                    <p className="timer_name">Repos</p>
                </div>
                <div className="timer_button">
                    <a className="bouton_start" href="/">Arrêter l'entrainement </a>
                </div>
            </div>
        )
    }

    function TimerRepos(props) {
        return(
        <div>
            <div className="logo_timer">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="time_margin">
                <div className="all_time">
                    <p className="all_numbers">
                        <Timer
                            initialTime={props.exercices.temps_repos * 1016}
                            direction="backward"
                            timeToUpdate={20}
                            checkpoints={[
                                {
                                    time: 0,
                                    callback: () => endOfTimer(),
                                }
                            ]}
                        >
                            {({ start, pause, timerState }) => (
                                <React.Fragment>
                                    <Timer.Seconds/> <br/>secondes
                                    <div>
                                        <button onClick={start}>Start</button>
                                        <button onClick={pause}>Pause</button>
                                    </div>
                                </React.Fragment>
                            )}
                        </Timer>
                    </p>
                </div>
                <p className="timer_name">Repos</p>
            </div>
            <div className="timer_button">
                <a className="bouton_start" href="/">Arrêter l'entrainement</a>
            </div>
        </div>
        )}
}



