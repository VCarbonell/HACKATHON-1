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

  bgTl.to('.game', {
    x:'-6%',
    duration:10,
    delay:1,
    ease:'linear',

  })
  .to('.drapeaux__container', {
    x: -window.innerWidth * 5,
    delay:0,
    duration: 10,
    ease: 'linear'
  }, '>')
  .to('.game', {
    x:'-6%',
    duration:10,
    ease:'linear',
  },'<')
  .to('.game', {
  x:'-15%',
  delay:0,
  duration:15,
  ease:'linear',
}, '<')
.to('.game', {
  x:'-35%',
  duration:15,
  ease:'linear',

}, '<')
.to('.game', {
  x:'-45%',
  duration:15,
  ease:'linear',
  


}, '<')
.to('.congrats',{
  opacity:0.5,
  onComplete : () =>{
    bgTl.kill()
  }
})





}



playBtn.addEventListener('click', play);






navigation();