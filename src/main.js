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
  bgTl.to('.game', {
    x:'-90%',
    duration:80,
    delay:1,
    ease:'linear',

  })
  .to('.drapeaux__container', {
    x: -window.innerWidth * 5,
    delay:0,
    duration: 10,
    ease: 'linear'
  }, '>')
  

// .to('.congrats',{
//   opacity:0.5,
//   onComplete : () =>{
//     bgTl.kill()
//   }
// })





}



playBtn.addEventListener('click', play);






navigation();