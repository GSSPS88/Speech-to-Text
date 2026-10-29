const SpeechRecognize = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognize = new SpeechRecognize();
const btn = document.querySelector('.control');

function recordVoice() {
    const isRecord = btn.classList.contains('record');

    if(isRecord) {
        recognize.start();
        btn.classList.remove('record');
        btn.classList.add('pause');
        btn.innerHTML = `<i class="bi bi-mic-mute-fill">`;
    } else {
        recognize.stop()
        btn.classList.remove('pause');
        btn.classList.add('record');
        btn.innerHTML = `<i class="bi bi-mic-fill">`;
    }
}

function setVoiceToText(e) {
    let message = document.querySelector('.message');
    message.innerHTML += e.results[0][0].transcript;
}

function continueRecord() {
    const isPause = btn.classList.contains('pause');

    if(isPause) {
        recognize.start()
    }
}

function setUpVoice() {
    console.log(recognize);
    recognize.lang = "th-TH"
    btn.addEventListener('click', recordVoice)

    recognize.addEventListener('result', setVoiceToText);
    recognize.addEventListener('end', continueRecord)
}

setUpVoice();