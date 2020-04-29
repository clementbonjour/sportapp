import React, {Component} from 'react';
import Pause from './pause.svg';
import Play from './play.svg';


function Exo(){

  const exercices = [
    {id: 1, nom: 'planche', description: 'lorem ipsum dolor sit amet'},
    {id: 1, nom: 'planche gauche', description: 'lorem ipsum dolor sit amet'},
    {id: 1, nom: 'planche droite', description: 'lorem ipsum dolor sit amet'},
    {id: 1, nom: 'crunch', description: 'lorem ipsum dolor sit amet'},
    {id: 2, nom: 'pompes prise simple', description: 'lorem ipsum dolor sit amet'},
    {id: 2, nom: 'pompes prise large', description: 'lorem ipsum dolor sit amet'},
    {id: 2, nom: 'pompes diamant', description: 'lorem ipsum dolor sit amet'},
    {id: 2, nom: 'dips', description: 'lorem ipsum dolor sit amet'},
    {id: 3, nom: 'soulevé latéral', description: 'lorem ipsum dolor sit amet'},
    {id: 3, nom: 'soulevé frontal', description: 'lorem ipsum dolor sit amet'},
    {id: 3, nom: 'soulevé arrière', description: 'lorem ipsum dolor sit amet'},
    {id: 3, nom: 'soulevé', description: 'lorem ipsum dolor sit amet'},
    {id: 4, nom: 'squat', description: 'lorem ipsum dolor sit amet'},
    {id: 4, nom: 'chaise', description: 'lorem ipsum dolor sit amet'},
    {id: 4, nom: 'squatte', description: 'lorem ipsum dolor sit amet'},
    {id: 4, nom: 'rocking chair', description: 'lorem ipsum dolor sit amet'},
  ]

if(exercices[3].id == 1){
    return (
      <div className="exos-container">
        <div className="exo-superior">
        <div className="boutonRetour">
          <p>Retour</p>
        </div>
        </div>
        <div className="exo-inferior">
            {exercices.map((exo) => (
               <div class="exo-detailTxt">
                <h3>{exo.nom}</h3>
                <p>{exo.description}</p>
              </div>
            ))}
          <div className="PlayPauseButton">
            <img src={Play}/>
          </div>
          <div className="loaderContainer">
            <div className="loaderBar"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Exo;
