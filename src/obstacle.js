const levels = ["level1", "level2", "level3", "level4", "level5", "level6"];
const obstacles = ["obstacle1", "obstacle2", "obstacle3"];

const allObstacle = document.querySelector('.allObstacle');

levels.map(level => {
  const obstacleContainer = document.createElement("div");
  obstacleContainer.classList.add(`${level}`);
  obstacleContainer.classList.add("level");
  obstacles.map(obstacle => {
    const newObstacle = document.createElement("div");
    newObstacle.classList.add(`${level}_obstacle`);
    newObstacle.classList.add("obstacle");
    newObstacle.classList.add(`${obstacle}`);
    newObstacle.style.backgroundImage = `url("/src/assets/Obstacles/${level}_${obstacle}.png")`;
    const topPosition = Math.floor(Math.random() * 400) + 50;
    const lefPosition = Math.floor(Math.random() * 2100) + 1400;
    newObstacle.style.top = `${topPosition}px`;
    newObstacle.style.left = `${lefPosition}px`;
    obstacleContainer.appendChild(newObstacle);
  })
  allObstacle.appendChild(obstacleContainer);
});