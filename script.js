// import gsap from "gsap/gsap-core";

let prevAnswer = null;
let prevIndex = 0;

function toggleQna(id) {

    var index = parseInt(id) - 1

    var answer = document.getElementById(id).querySelector("p")
    var toggleIcon = document.getElementsByClassName("Questions")[index].querySelector("img")
    var prevToggleIcon = document.getElementsByClassName("Questions")[prevIndex].querySelector("img")
    
    if (prevAnswer != null  && prevAnswer != answer) {
        prevAnswer.style.display = "none";
        prevToggleIcon.src = "icons/add.svg"
    }

    if (answer.style.display == "flex") {
        answer.style.display = "none"
        toggleIcon.src = "icons/add.svg"
    } else {
        answer.style.display = "flex"
        toggleIcon.src = "cross.svg"
    }
    prevAnswer = answer
    prevIndex = index
}


