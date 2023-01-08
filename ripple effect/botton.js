const btnEl = document.querySelector(".btn");
btnEl.addEventListener("mouseover",(event)=>{
    const x =(event.pagex - btnEl.offsetLeft);
    const y =(event.pagery - btnEl.offsetTop);
    btnEl.style.setproperty("--xpos",x + "px")
    btnEl.style.setproperty("--ypos",y + "px");
});