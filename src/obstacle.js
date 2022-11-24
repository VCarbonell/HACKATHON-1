const levels = [
  {
    class: "level1",
    minLeft: 100,
    maxLeft: 4000,
  },
  {
    class: "level2",
    minLeft: 4200,
    maxLeft: 11850,
  },
  {
    class: "level3",
    minLeft: 12050,
    maxLeft: 20400,
  },
  {
    class: "level4",
    minLeft: 20700,
    maxLeft: 28900,
  },
  {
    class: "level5",
    minLeft: 30000,
    maxLeft: 38900,
  },
  {
    class: "level1",
    minLeft: 40000,
    maxLeft: 49900,
  },
];
const obstacles = ["obstacle1", "obstacle2", "obstacle3"];
let minLeft = 0;

const allObstacle = document.querySelector('.allObstacle');

levels.map(level => {
  const obstacleContainer = document.createElement("div");
  obstacleContainer.classList.add(`${level.class}`);
  obstacleContainer.classList.add("level");
  obstacles.map(obstacle => {
    const newObstacle = document.createElement("div");
    newObstacle.classList.add(`${level.class}_obstacle`);
    newObstacle.classList.add("obstacle");
    newObstacle.classList.add(`${obstacle}`);
    newObstacle.style.backgroundImage = `url("/src/assets/Obstacles/${level.class}_${obstacle}.png")`;
    const topPosition = Math.floor(Math.random() * 400) + 50;
    const lefPosition = Math.floor(Math.random() * level.maxLeft) + level.minLeft;
    newObstacle.style.top = `${topPosition}px`;
    // newObstacle.style.left = `${lefPosition}px`;
    obstacleContainer.appendChild(newObstacle);
  })
  allObstacle.appendChild(obstacleContainer);
});