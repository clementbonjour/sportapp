import React from 'react';
import Pause from './pause.svg';
import Play from './play.svg';

function Exo() {
  return (
    <div className="exos-container">
      <div className="exo-superior">
      <div className="boutonRetour">
        <p>Retour</p>
      </div>
      </div>
      <div className="exo-inferior">
        <div class="exo-detailTxt">
          <h3>Wesh</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, neque ac ultricies blandit, lacus ligula mattis purus, et ultricies est erat sit amet tortor. Vestibulum vel feugiat justo.</p>
        </div>
        <div className="PlayPauseButton">
          <img src={Play}/>
        </div>
        <div className="loaderContainer">
          <div className="loaderBar"></div>
        </div>
      </div>
    </div>
  )
  /*render() {
    const tab = ['one','two','three'];
  }*/
}

export default Exo;
