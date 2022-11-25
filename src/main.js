import { gsap } from "gsap";
import './style.scss';
import './js/selection'
import './obstacle.js'
import './collision.js';
import navigation from "./js/navigation";

const accueilSound = document.querySelector('.accueilSound');
const inGameSound = document.querySelector('.inGameSound');
const buttonSound = document.querySelector('.buttonClickSound');
const playBtn = document.querySelector('.playBtn');
const youWinAudio = document.querySelector('.youWinAudio')
const youWinMusic = document.querySelector('.youWinMusic')
const homeAnimation = document.querySelector('.homeAnimation')




const bgTl = gsap.timeline();


 gsap.to('.game__sprite',{
   y:'10px',
   repeat:-1,
   yoyo:true
 })
 
 gsap.to(homeAnimation, {
   display:'none',
   delay:17,
 })

const play = () => {
  buttonSound.play();
  accueilSound.pause();
  inGameSound.play();
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
}, '=-.1')
.add(()=>{
  youWinAudio.play()
},'<')
.add(()=>{
  inGameSound.pause()
  youWinMusic.play()
},'<')
.to('.credit', {
  delay:4,
  y:'-2272px',
  duration:22,
  
})
}

playBtn.addEventListener('click', play);

navigation();

export default bgTl;


