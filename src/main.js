import { gsap } from "gsap";
import './style.scss';
import './js/navigation.js';
import navigation from "./js/navigation";
import './collision.js';

const playBtn = document.querySelector('.playBtn');

const bgTl = gsap.timeline();


 gsap.to('.game__sprite',{
   y:'10px',
   repeat:-1,
   yoyo:true
 })
const play = () => {
  bgTl.paused( !bgTl.paused());
playBtn.innerHTML = bgTl.paused() ? 'Start' : 'Pause'

  bgTl.to('.levelOne', {
    x:'-20%',
    duration:20,
    delay:1,
    ease:'linear',

  })
  .to('.levelOne', {
    x:'-40%',
    duration:10,
    ease:'linear',

  })
.to('.obstacle, .obstacle2', {
  x:'-2000px',
  duration:4
}, 3)
.to('.levelOne', {
  x:'-60%',
  duration:8,
  ease:'linear',

})
.to('.levelOne', {
  x:'-80%',
  duration:8,
  ease:'linear',

})
.to('.levelOne', {
  x:'-95%',
  duration:8,
  ease:'linear',
  


})
.to('.congrats',{
  opacity:0.5,
  onComplete : () =>{
    bgTl.kill()
  }
})





}



playBtn.addEventListener('click', play);






navigation();