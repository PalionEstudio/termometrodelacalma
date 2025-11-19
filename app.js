let energy = Number(localStorage.getItem("energy")) || 0;
let penalties = Number(localStorage.getItem("penalties")) || 0;
let extraMinutes = Number(localStorage.getItem("extraMinutes")) || 0;

const bar = document.getElementById("energyBar");
const zenBall = document.getElementById("zenBall");

const energyVal = document.getElementById("energyValue");
const penaltiesEl = document.getElementById("penalties");
const extraEl = document.getElementById("extraMinutes");

function updateUI() {
  // Barra
  bar.style.width = energy + "%";

  if (energy < 40) bar.style.background = "#4caf50";
  else if (energy < 80) bar.style.background = "#f1c40f";
  else bar.style.background = "#e74c3c";

  // Bola Zen
  zenBall.classList.remove("zen-happy", "zen-neutral", "zen-angry");

  if (energy < 40) zenBall.classList.add("zen-happy");
  else if (energy < 80) zenBall.classList.add("zen-neutral");
  else zenBall.classList.add("zen-angry");

  // Texto
  energyVal.textContent = energy;
  penaltiesEl.textContent = penalties;
  extraEl.textContent = extraMinutes;

  // Guardado
  localStorage.setItem("energy", energy);
  localStorage.setItem("penalties", penalties);
  localStorage.setItem("extraMinutes", extraMinutes);
}

document.getElementById("increaseBtn").addEventListener("click", () => {
  energy = Math.min(100, energy + 10);
  if (energy >= 100) {
    penalties++;
    energy = 0; // Reinicio después de explosión
  }
  updateUI();
});

// Bajada automática cada 2 segundos
setInterval(() => {
  if (energy > 0) {
    energy--;
    updateUI();
  }
}, 2000);

updateUI();
