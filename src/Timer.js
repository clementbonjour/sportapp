import React from "react";
import './App.css';
import logo from "./logo.svg";

function Timer() {
    return (
        <div className="all_timer">
            <div className="logo_timer">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="all_time">
                <p className="all_number">8</p>
                <p>Minutes</p>
            </div>
            <div className="choose">
                <div className="nbr">
                    <p>Nb d'exercices</p>
                    <input type='number' min="1" />
                </div>
                <div className="nbr">
                    <p>Temps par exercice</p>
                    <input type='number' min="1" />
                </div>
                <div className="nbr">
                    <p>Temps de repos</p>
                    <input type='number' min="1"/>
                </div>
                <div className="nbr">
                    <div className="nbr_serie">
                        <p>Nombre de série</p>
                        <input type='number' min="1" />
                    </div>
                    <div className="tmps_repos">
                        <p> Temps de repos</p>
                        <input type='number' min="1" />
                    </div>
                </div>
                <div className="timer_button">
                <button className="bouton_start" href="/exo">LANCER ENTRAINEMENT  ></button>
                </div>
            </div>
        </div>
    );
}

export default Timer;