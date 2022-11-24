const levels = [
  {
    class: "level1",
    obstacle : [
      {     
        minLeft: 500,
        maxLeft: 1200,
      },
      {
        minLeft: 1500,
        maxLeft: 2500,
      },
      {
        minLeft: 2800,
        maxLeft: 3800,
      },
    ]
  },
  {
    class: "level2",
    obstacle : [
      {    
        minLeft: 4300,
        maxLeft: 6300,
      },
      {
        minLeft: 6800,
        maxLeft: 8800,
      },
      {
        minLeft: 9100,
        maxLeft: 11700,
      },
    ]
  },
  {
    class: "level3",
    obstacle : [
      {    
        minLeft: 12300,
        maxLeft: 14600,
      },
      { 
        minLeft: 15100,
        maxLeft: 17400,
      },
      {
        minLeft: 17900,
        maxLeft: 20300,
      },
    ]
  },
  {
    class: "level4",
    obstacle : [
      { 
        minLeft: 20800,
        maxLeft: 23100,
      },
      { 
        minLeft: 23600,
        maxLeft: 25900,
      },
      { 
        minLeft: 26400,
        maxLeft: 28700,
      },
    ]
  },
  {
    class: "level5",
    obstacle : [
      { 
        minLeft: 29600,
        maxLeft: 32400,
      },
      { 
        minLeft: 32900,
        maxLeft: 35700,
      },
      { 
        minLeft: 36200,
        maxLeft: 38800,
      },
    ]
  },
  {
    class: "level6",
    obstacle : [
      { 
        minLeft: 39700,
        maxLeft: 42800,
      },
      { 
        minLeft: 43300,
        maxLeft: 46400,
      },
      { 
        minLeft: 46900,
        maxLeft: 49700,
      },
    ]
  },
];
const obstacles = ["obstacle1", "obstacle2", "obstacle3"];

const allObstacle = document.querySelector('.allObstacle');

levels.map(level => {
  let lastPosition = 0;
  const obstacleContainer = document.createElement("div");
  obstacleContainer.classList.add(`${level.class}`);
  obstacleContainer.classList.add("level");
  obstacles.map((obstacle, index) => {
    const maxLeft = level.obstacle[index].maxLeft;
    const minLeft = level.obstacle[index].minLeft;
    const newObstacle = document.createElement("div");
    newObstacle.classList.add(`${level.class}_obstacle`);
    newObstacle.classList.add("obstacle");
    newObstacle.classList.add(`${obstacle}`);
    newObstacle.style.backgroundImage = `url("/src/assets/Obstacles/${level.class}_${obstacle}.png")`;
    const topPosition = Math.floor(Math.random() * 350) + 50;
    let leftPosition = Math.floor(Math.random() * (maxLeft - minLeft)) + minLeft;
    while ((leftPosition > lastPosition && leftPosition - lastPosition < 800) || 
    (lastPosition > leftPosition && lastPosition - leftPosition < 800)) {
      leftPosition = Math.floor(Math.random() * (maxLeft - minLeft)) + minLeft;
    }
    lastPosition = leftPosition;
    newObstacle.style.top = `${topPosition}px`;
    newObstacle.style.left = `${leftPosition}px`;
    obstacleContainer.appendChild(newObstacle);
  })
  allObstacle.appendChild(obstacleContainer);
});