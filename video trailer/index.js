const btnEl=document.querySelector(".btn")
const closeIconEl =document.querySelector(".close-icon")
const trailerEL = document.querySelector(".trailer-container")
const videoEl = document.querySelector("video")

btnEl.addEventListener("click",()=>{
    trailerEL.classList.remove("active");

})
closeIconEl.addEventListener("click",()=>{
    trailerEL.classList.add("active")
    videoEl.pause()
    videoEl.currentTime=0;
})