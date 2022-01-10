//EVENTOS

function showConsole1(){
    console.log("clickTag1 OK");
}

function showConsole2(){
    console.log("clickTag2 OK");
}

function showConsole3(){
    console.log("clickTag3 OK");
}

function showConsole(){
    console.log("PDF file");
}



/* SLIDE */

const slider = document.querySelector(".slider");
const sliderIndividual = document.querySelectorAll(".container");
const contador = 2;
const width = sliderIndividual[0].clientWidth;
const intervalo = 1000;

 function autoPlay(){
    slider.style.transform = "translate("+(-width*contador)+ "px)";
    slider.style.transition = "transform 8s";
   }
   
   var timer = setInterval(autoPlay,8000); 