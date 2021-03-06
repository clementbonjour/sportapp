import React, {useEffect, useState} from 'react';
import Pause from './pause.svg';
import Play from './play.svg';
import Validate from './validate.svg';

const exercices = [
    {id: 3, no: 1, nom: 'planche', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet', img: './pushup.svg'},
    {id: 3, no: 2, nom: 'planche gauche', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet '},
    {id: 3, no: 3, nom: 'planche droite', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'},
    {id: 3, no: 4, nom: 'crunch', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet'},
    {id: 2, no: 1, nom: 'pompes prise simple', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet '},
    {id: 2, no: 2, nom: 'pompes prise large', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'},
    {id: 2, no: 3, nom: 'pompes diamant', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet'},
    {id: 2, no: 4, nom: 'dips', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'},
    {id: 1, no: 1, nom: 'soulevé latéral', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'},
    {id: 1, no: 2, nom: 'soulevé frontal', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'},
    {id: 1, no: 3, nom: 'soulevé arrière', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'},
    {id: 1, no: 4, nom: 'soulevé', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet '},
    {id: 4, no: 1, nom: 'squat', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'},
    {id: 4, no: 2, nom: 'chaise', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'},
    {id: 4, no: 3, nom: 'squatte', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'},
    {id: 4, no: 4, nom: 'rocking chair', description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'},
]

export default function Exo(props) {

console.log(props.rot.id)

    function Card(props) {
        const isDisplay = {
            display: "flex",
        }
        const notDisplay = {
            display: "none",
        }

        /*function endOFTimer(e) {
          e.preventDefault()
          setNb(nb + 1)
          console.log(nb)
        }*/
        if(props.no == nb)
            return (
                <div id="isDisplay" style={isDisplay}>
                  <h1>{props.nom}</h1>
                  <p>{props.description}</p>
                </div>
            )
        else
            return (
                <div style={notDisplay}></div>
            )
    }
    const [personnes, setPersonnes] = useState(exercices)
    const [nb, setNb]= useState(1)
    if (nb<=4)
    return (
        <div class="containerexo">
            {personnes.filter(personnes => personnes.id == props.rot.id).map(p => <Card id={p.id} no={p.no} nom={p.nom} description={p.description} />)}
            <button class="buttonexo" name="wesh" onClick={() => setNb(nb + 1)}>Exercice suivant ⟶</button>
        </div>
    )
    return (
        <div class="containerexo-paccueil">
            <img src={Validate}/>
            <h1>Félicitation !Vous avez terminé votre entrainement !</h1>
            <a href="/">retour à l'accueil ⟶</a>
        </div>
    )

    /*
    import React, {Component} from 'react';
import Pause from './pause.svg';
import Play from './play.svg';


function Exo(){

	let seriemuscle = 1;
  let etape = 2;


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

if(exercices[etape].id == seriemuscle){
    return (
      <div className="exos-container"> <div className="exo-superior">
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
     */

}
