const output = document.getElementById("output");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "hi-IN";

function startListening() {
  recognition.start();
  speak("मैं सुन रही हूँ");
}

recognition.onresult = function (event) {
  const command = event.results[0][0].transcript;
  output.innerText = "आपने कहा: " + command;
  handleCommand(command);
};

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "hi-IN";
  window.speechSynthesis.speak(speech);
}

function handleCommand(cmd) {
  cmd = cmd.toLowerCase();

  if (cmd.includes("नमस्ते")) {
    speak("नमस्ते सर, मैं जार्विस हूँ");
  } 
  else if (cmd.includes("समय")) {
    const time = new Date().toLocaleTimeString();
    speak("अभी समय है " + time);
  }
  else if (cmd.includes("तुम कौन हो")) {
    speak("मैं आपका पर्सनल ए आई असिस्टेंट हूँ");
  }
  else {
    speak("माफ़ कीजिए, मैं समझ नहीं पाई");
  }
}