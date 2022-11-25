import { gsap } from "gsap";
import './style.scss';
import './js/selection'
import './obstacle.js'
import './collision.js';
import navigation from "./js/navigation";

const playBtn = document.querySelector('.playBtn');

const bgTl = gsap.timeline();


 gsap.to('.game__sprite',{
   y:'10px',
   repeat:-1,
   yoyo:true
 })

const play = () => {
  playBtn.style.display = "none";
  bgTl.to('.game', {
    x:'-90%',
    duration:80,
    delay:1,
    ease:'linear',

  })

.to('.congrats',{
  opacity:1,
  duration:1,
  y:'10%',
  onComplete : () =>{
    bgTl.pause()
  }
  
}, '=-.1')
.to('.credit', {
  delay:4,
  y:'-3000px',
  duration:10
})





}




playBtn.addEventListener('click', play);







navigation();

export default bgTl


