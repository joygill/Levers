import "./styles.css";
const Tone = require("tone");
const m7Audio = require("./audioFiles/m7.mp3");
const americanlifeAudio = require("./audioFiles/americanlife.mp3");

document.getElementById("app").innerHTML = `
<button>Play</button>
<h3>Playback Rate</h3>
<input id="playbackRateSlider" type="range" value="1" min="0.1" max="4" step="0.1"></input>
<h3>Grain Size </h3>
<input id="grainSizeSlider" type="range" value="3" min="0.05" max= "5" step= "0.2"> </input>
`;

const button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("click");
  const player = new Tone.GrainPlayer({
    url: m7Audio,
    loop: true,
    detune: 100,
    playbackRate: 1.2,
    grainSize: 0.25,
    overlap: 0.1
  }).toMaster();
  player.reverse = true;
  player.start();
  const playbackRateSlider = document.getElementById("playbackRateSlider");

  playbackRateSlider.addEventListener("change", function(evt) {
    console.log(playbackRateSlider.value);
    player.playbackRate = playbackRateSlider.value;
  });

  const grainSizeSlider = document.getElementById("grainSizeSlider");

  grainSizeSlider.addEventListener("change", function(evt) {
    console.log(grainSizeSlider.value);
    player.grainSize = grainSizeSlider.value;
  });
});
