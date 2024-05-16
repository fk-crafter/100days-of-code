import { useState } from 'react';
import imgPoke from "./assets/poke.jpg";
import imgRe4 from "./assets/re4.jpg";
import imgUncharted from "./assets/uncharted.jpg";


import './index.css'

function App() {

  return (
    <div id="cards">
    <div class="card" data-color="blue">
      <img class="card-front-image card-image" src={imgPoke} />
      <div class="card-faders">
        <img class="card-fader card-image" src={imgPoke} />
        <img class="card-fader card-image" src={imgPoke} />
        <img class="card-fader card-image" src={imgPoke} />
        <img class="card-fader card-image" src={imgPoke} />
        <img class="card-fader card-image" src={imgPoke} />
        <img class="card-fader card-image" src={imgPoke} />
        <img class="card-fader card-image" src={imgPoke} />
        <img class="card-fader card-image" src={imgPoke} />
      </div>
    </div>

    <div class="card" data-color="green">
      <img class="card-front-image card-image" src={imgRe4} />
      <div class="card-faders">
        <img class="card-fader card-image" src={imgRe4} />
        <img class="card-fader card-image" src={imgRe4} />
        <img class="card-fader card-image" src={imgRe4} />
        <img class="card-fader card-image" src={imgRe4} />
        <img class="card-fader card-image" src={imgRe4} />
        <img class="card-fader card-image" src={imgRe4} />
        <img class="card-fader card-image" src={imgRe4} />
        <img class="card-fader card-image" src={imgRe4} />
      </div>
    </div>

    <div class="card" data-color="brown">
      <img class="card-front-image card-image" src={imgUncharted} />
      <div class="card-faders">
        <img class="card-fader card-image" src={imgUncharted} />
        <img class="card-fader card-image" src={imgUncharted} />
        <img class="card-fader card-image" src={imgUncharted} />
        <img class="card-fader card-image" src={imgUncharted} />
        <img class="card-fader card-image" src={imgUncharted} />
        <img class="card-fader card-image" src={imgUncharted} />
        <img class="card-fader card-image" src={imgUncharted} />
        <img class="card-fader card-image" src={imgUncharted} />
      </div>
    </div>
  </div>
  )
}

export default App
