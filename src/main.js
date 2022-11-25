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
  .to('.drapeaux__container', {
    x: -window.innerWidth * 6,
    delay:5,
    duration: 13,
    ease: 'linear'
  },'<')
  .to('.drapeaux__container2', {
    x: -window.innerWidth * 6,
    delay:10,
    duration: 13,
    ease: 'linear'
  },'<')
  
//   .to('.game', {
//     x:'-6%',
//     duration:10,
//     ease:'linear',
//   },'<')
//   .to('.game', {
//   x:'-15%',
//   delay:0,
//   duration:15,
//   ease:'linear',
// }, '<')
// .to('.game', {
//   x:'-35%',
//   duration:15,
//   ease:'linear',

// }, '<')
// .to('.game', {
//   x:'-45%',
//   duration:15,
//   ease:'linear',
  


// }, '<')
.to('.congrats',{
  opacity:0.5,
  onComplete : () =>{
    bgTl.kill()
  }
})





}



playBtn.addEventListener('click', play);






navigation();