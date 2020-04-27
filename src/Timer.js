import React from "react";
import './App.css';

function Timer() {
    return (
        <div className="all_timer">

            <div className="all_time">
                <p className="all_number">8</p>
                <p>Minutes</p>
            </div>
            <div className="choose">
                <p>Nb d'exercices</p>
                <p>Temps par exercice</p>
                <p>Temps de repos</p>
                <div>
                    <p>Nombre de série</p>
                    <p> Temps de repos</p>
                </div>
            </div>
        </div>
    );
}

export default Timer;