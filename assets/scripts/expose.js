// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Elements to grab to change Image, tweak icon, and sound
  const selectedOption = document.getElementById("horn-select");
  const volumeControls= document.querySelector("#volume");
  const image = document.querySelector('img[alt= "No image selected"]');
  const sound = document.querySelector("button");
  const audio = document.querySelector("audio");
  const jSConfetti = new JSConfetti();

  // Event listener where the user selection type of horn and displays the image
  selectedOption.addEventListener("change", function() {
    const selectedValue = this.value;
    if(selectedValue === "air-horn") {
      image.src = "assets/images/air-horn.svg";
      image.alt = "air-horn";
    }
    else if(selectedValue == "car-horn") {
      image.src = "assets/images/car-horn.svg";
      image.alt = "car-horn";
    }
    else if(selectedValue == 'party-horn') {
      image.src = "assets/images/party-horn.svg";
      image.alt = "party-horn";
    }
  })

  // Event listener for when the user changes the volume adjust icon 
  volumeControls.addEventListener("input", function(){
    const volumeLevel = parseInt(this.value,10);
    const imageOfControls = document.querySelector("#volume-controls img");
    if(volumeLevel === 0) {
      imageOfControls.src = "assets/icons/volume-level-0.svg";
      imageOfControls.alt = "level-0";
    }
    if(volumeLevel >= 1 && volumeLevel < 33 ) {
      imageOfControls.src = "assets/icons/volume-level-1.svg";
      imageOfControls.alt = "level-1";
    }
    if(volumeLevel >= 33 && volumeLevel < 67) {
      imageOfControls.src = "assets/icons/volume-level-2.svg";
      imageOfControls.alt = "level-2";
    }
    if(volumeLevel > 67) {
      imageOfControls.src = "assets/icons/volume-level-3.svg";
      imageOfControls.alt = "level-3";
    }
  })

  // Event Listener to play the correct sound when user clicks "play sound"
  sound.addEventListener("click", function(){
    const audioLevel = parseInt(volumeControls.value,10)/100;
    audio.volume = audioLevel;
    if(selectedOption.value === "air-horn") {
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if(selectedOption.value === "car-horn") {
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if(selectedOption.value === "party-horn") {
      audio.src = "assets/audio/party-horn.mp3";
      jSConfetti.addConfetti();
    }
    audio.play();
  })
}
