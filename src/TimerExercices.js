import React, {useState} from 'react';
import logo from './logo.svg';
import Timer from 'react-compound-timer'

const a = true

export default function TimerExercices(props) {

    for ( let i=1; i<= props.exercices.nb_exos*2;i++) {
        if (a == true) {
            return (
                <div>
                    <br/>
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
                    {props.exercices.nb_exos}<br/>
                    {props.exercices.temps_exo}<br/>
                    {props.exercices.temps_repos}<br/>
                    {props.exercices.nbr_serie}<br/>
                    {props.exercices.temps_repos_2}<br/>


                </div>
            )
            a = false
        } else {
            return (
                <div>
                    <br/>
                    <Timer
                        initialTime={props.exercices.temps_repos * 1016}
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
            a = true
        }
    }
}