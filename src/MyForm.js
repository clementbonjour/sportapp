import React, {useState, useRef} from "react";
import './App.css';
import logo from "./logo.svg";
import TimerExercices from "./TimerExercices";




function MyForm() {
    const [exercices, setExercices] = useState({ nb_exos : 0, temps_exo:0, temps_repos:0, nbr_serie:0, temps_repos_2:0 })
    const [form, setForm ] = useState(true)
    const ref_nb_exos = useRef(null);
    const ref_temps_exo = useRef(null);
    const ref_temps_repos = useRef(null);
    const ref_nbr_serie = useRef(null);
    const ref_temps_repos_2 = useRef(null);

    function valide(e)
    {
        e.preventDefault()
        setExercices({ nb_exos : e.target.elements["nb_exo"].value, temps_exo : e.target.elements["tmps_exo"].value, temps_repos:e.target.elements["tmps_repos"].value, nbr_serie:e.target.elements["nbr_serie"].value, temps_repos_2:e.target.elements["tmps_repos2"].value })
        setForm(false)
    }


    function ModifTime(e) {
        e.preventDefault()
        setExercices({ nb_exos : ref_nb_exos.current.value, temps_exo : ref_temps_exo.current.value, temps_repos: ref_temps_repos.current.value, nbr_serie: ref_nbr_serie.current.value, temps_repos_2: ref_temps_repos_2.current.value })
    }

let seconde = (exercices.nb_exos*exercices.temps_exo+exercices.temps_repos_2*(exercices.nbr_serie-1)+exercices.temps_repos*(exercices.nb_exos-1))
    if(form == true)

    return (
        <div className="margium">
            <form onSubmit={e=>valide(e)}><div className="all_timer">
                <div className="logo_timer">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="all_time">
                    <p className="all_number">{Math.floor(seconde/60)}:{seconde%60}</p>
                    <p>Minutes</p>
                </div>
                <div className="choose">
                    <div className="nbr">
                        <p>Nb d'exercices</p>
                        <input type="number" ref={ref_nb_exos} onChange={e=>ModifTime(e)} name="nb_exo" min="1"/>
                    </div>
                    <div className="nbr">
                        <p>Temps par exercice</p>
                        <input type='number'  ref={ref_temps_exo} onChange={e=>ModifTime(e)} name="tmps_exo" min="1"/>
                    </div>
                    <div className="nbr">
                        <p>Temps de repos entre chaque exercice</p>
                        <input type='number' ref={ref_temps_repos} onChange={e=>ModifTime(e)} name="tmps_repos" min="1"/>
                    </div>
                    <div className="nbr">
                        <div className="nbr_serie">
                            <p>Nombre de série</p>
                            <input type='number' ref={ref_nbr_serie} onChange={e=>ModifTime(e)} name="nbr_serie" min="1"/>
                        </div>
                        <div className="tmps_repos">
                            <p> Temps de repos entre chaque série</p>
                            <input type='number' ref={ref_temps_repos_2}  onChange={e=>ModifTime(e)} name="tmps_repos2" min="1"/>-
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