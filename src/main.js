import { gsap } from "gsap";
import './style.scss';
import './collision.js';
import navigation from "./js/navigation";

const playBtn = document.querySelector('.playBtn');

const bgTl = gsap.timeline();


 
const play = () => {


  bgTl.to('.levelOne', {
    x:'-100%',
    duration:10,
    delay:1,
    ease:'linear'

  })
.to('.obstacle', {
  x:'-2000px',
  duration:4
}, 2)
  .to('.levelTwo', {
    x:'-200%',
    duration:8,
    ease:'linear'
  }, 4)
  bgTl.paused( !bgTl.paused());
playBtn.innerHTML = bgTl.paused() ? 'Start' : 'Pause'

}



playBtn.addEventListener('click', play);






navigation();