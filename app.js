const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector("#voice-select");
const playBtn = document.querySelector("#playBtn");
const synth = window.speechSynthesis;       //accessing speechSynthesis api for text to speech

let voices = [];        //array of voices

//function to load voices
function loadVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = voices.map((voice, index) => `<option value=${index}>${voice.name}</option>`);
}

loadVoices();

synth.onvoiceschanged = loadVoices;

//function for conversion
function convert() {
    const text = textInput.value;    

    const speech = new SpeechSynthesisUtterance(text);      //created speech instance
    
    const selectedVoice = voices[voiceSelect.value];        //getting selected voice

    if(selectedVoice) {
        speech.voice = selectedVoice;       //apply selected voice
    }

    return speech;
}

playBtn.addEventListener('click', () => {
    if(!textInput.value) {
        alert("Please enter text");
        return;
    } else {
        synth.speak(convert());
    }
});


/* speechSynthesis and SpeechSynthesis utterance are both the part of Web Speech API

    window.speechSynthesis-
        -> is a global object that acts as the controller for text-to-speech in the browser
        -> responsible for managing speech synthesis, controlling playback

    SpeechSynthesisUtterance-
        -> is a constructor funtion that creates a speech object (utterance) 
        -> holds the text to be spoken and other properties like voice, pitch, rate, and volume.

*/