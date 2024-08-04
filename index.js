const slides = document.querySelectorAll(".slides article")
let slideIndex = 0;
let intervalID = null;
const intervalTime = 5000;

const initializeSlider = () =>{

    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide, intervalTime);  
    }
    else{
        console.log("no images to display")
    }

}

const showSlide = (index) =>{

    if( index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
    

}
const prevSlide = () =>{
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
}
const nextSlide = () =>{
    slideIndex++;
    showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", initializeSlider());
