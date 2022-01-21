const slides = document.querySelectorAll(".slide")
const next = document.getElementById("NEXT")
const prev = document.getElementById("PREV")
let slide = 0
next.addEventListener("click", function(){
    if (slide < 2) {
        slides[slide].style.display = "none"
        slide = slide + 1
        slides[slide].style.display = "block"
    }
    else if (slide == 2) {
        slides[slide].style.display = "none"
        slide = slide - 2
        slides[slide].style.display = "block"
    }
})
prev.addEventListener("click", function(){
    if (slide > 0) {
        slides[slide].style.display = "none"
        slide = slide - 1
        slides[slide].style.display = "block"
    }
    else if (slide == 0) {
        slides[slide].style.display = "none"
        slide = slide + 2
        slides[slide].style.display = "block"
    }
})  
