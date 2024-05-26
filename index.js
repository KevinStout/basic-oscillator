const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const oscillator = audioContext.createOscillator();
oscillator.type = "sine";
oscillator.frequency.value = 440;

const oscillator2 = audioContext.createOscillator();
oscillator2.type = "sine";
oscillator2.frequency.value = 660;

const gainNode = audioContext.createGain();
gainNode.gain.value = 0;

oscillator.connect(gainNode);
oscillator2.connect(gainNode);
gainNode.connect(audioContext.destination);

oscillator.start();
oscillator2.start();

document.addEventListener("click", () => audioContext.resume(), { once: true });

document.querySelector("#oscillator-type").addEventListener("change", (event) => {
  oscillator.type = event.target.value;
});
document.querySelector("#oscillator2-type").addEventListener("change", (event) => {
  oscillator2.type = event.target.value;
});

document.querySelector("#oscillator").addEventListener("input", (event) => {
  oscillator.frequency.value = event.target.value;
});

document.querySelector("#oscillator2").addEventListener("input", (event) => {
  oscillator2.frequency.value = event.target.value;
});

document.querySelector("#volume").addEventListener("input", (event) => {
  gainNode.gain.value = event.target.value * 0.01;
});
