let level = 0;
let decreasing = false;

const levelDiv = document.getElementById("level");
const slime = document.getElementById("slime");

function updateVisual() {
  levelDiv.style.height = level + "%";
  slime.style.setProperty("--level-height", level + "%");
  slime.style.transform = `translateX(-50%) scale(${1 + level/200})`; 
}

document.getElementById("increase").addEventListener("click", () => {
  level = Math.min(100, level + 10);
  updateVisual();
});

document.getElementById("startDecrease").addEventListener("click", () => {
  if (decreasing) return;
  decreasing = true;

  const interval = setInterval(() => {
    if (level <= 0) {
      decreasing = false;
      clearInterval(interval);
      return;
    }
    level -= 2;
    updateVisual();
  }, 300);
});

updateVisual();
