window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');
  let voices = [];

  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option value="" disabled selected>Select Voice</option>';
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener('click', () => {
    const textToSpeak = textArea.value;
    const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
    
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png'; // Path to the open mouth image
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png'; // Path to the smiling face image
    };

    speechSynthesis.speak(utterance);
  });
}
