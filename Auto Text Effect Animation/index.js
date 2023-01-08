const containerEl = document.querySelector(".container");

const careers = ["YouTuber","Web Developer","Freelancer","Instructor"]

let careersIndex = 0;

let charecterIndex =0;

updateText()

function updateText(){
    careersIndex++
    containerEl.innerHTML= '<h1>Iam ${careers[careerIndex].slice(0,1)==="I" ? "an" : "a"} ${careers[careerIndex].slice(0,charecterIndex)}</h1>';
    charecterIndex++
    if(charecterIndex === careers[careersIndex].length){
      
        charecterIndex = 0
    }
    if(careersIndex===careers.length){
        careersIndex = 0;
    }

    setTimeout(updateText,400);
}

