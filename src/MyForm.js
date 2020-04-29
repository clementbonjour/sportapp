import React, {useState} from "react";
import './App.css';
import logo from "./logo.svg";
import TimerExercices from "./TimerExercices";

function MyForm() {

    const [exercices, setExercices] = useState({ nb_exos : 0, temps_exo:0, temps_repos:0, nbr_serie:0, temps_repos_2:0 })
    const [form, setForm ] = useState(true)

    function valide(e)
    {
        e.preventDefault()
        setExercices({ nb_exos : e.target.elements["nb_exo"].value, temps_exo : e.target.elements["tmps_exo"].value, temps_repos:e.target.elements["tmps_repos"].value, nbr_serie:e.target.elements["nbr_serie"].value, temps_repos_2:e.target.elements["tmps_repos2"].value })
        setForm(false)
    }



    if(form == true)

    return (
        <div className="margium">
            <form onSubmit={e=>valide(e)}><div className="all_timer">
                <div className="logo_timer">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="all_time">
                    <p className="all_number">8</p>
                    <p>Minutes</p>
                </div>
                <div className="choose">
                    <div className="nbr">
                        <p>Nb d'exercices</p>
                        <input type="number" value="2"name="nb_exo" min="1"/>
                    </div>
                    <div className="nbr">
                        <p>Temps par exercice</p>
                        <input type='number' value="5" name="tmps_exo" min="1"/>
                    </div>
                    <div className="nbr">
                        <p>Temps de repos entre chaque exercice</p>
                        <input type='number'  value="3" name="tmps_repos" min="1"/>
                    </div>
                    <div className="nbr">
                        <div className="nbr_serie">
                            <p>Nombre de série</p>
                            <input type='number' value="2" name="nbr_serie" min="1"/>
                        </div>
                        <div className="tmps_repos">
                            <p> Temps de repos entre chaque série</p>
                            <input type='number' value="10" name="tmps_repos2" min="1"/>
                        </div>
                    </div>
                    <div className="timer_button">
                        <button className="bouton_start" href="/exo">LANCER ENTRAINEMENT ></button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );

    return (
        <TimerExercices exercices={exercices}/>
    )


}

export default MyForm;