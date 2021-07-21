//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".hm10 img");
const contactemail = document.querySelector(".contactemail");
const description = document.querySelector(".info h3");
const projecthead = document.querySelector(".info h5");
const projects = document.querySelector(".projects");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 1.5 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-30deg)";
  description.style.transform = "translateZ(125px)";
  projecthead.style.transform = "translateZ(125px)";
  projects.style.transform = "translateZ(100px)";
  contactemail.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  projecthead.style.transform = "translateZ(0px)";
  projects.style.transform = "translateZ(0px)";
  contactemail.style.transform = "translateZ(0px)";
});

function goMobile(){
  location.replace('./mobileapp.html')
}

function goEmbedded(){
  location.replace('./embeddedsys.html')
}
function goVue(){
  location.replace('./vuejs.html')
}
function goVba(){
  location.replace('./gamedev.html')
}

function aboutMe(){
  location.replace('./about.html')
}

if (
  DeviceMotionEvent &&
  typeof DeviceMotionEvent.requestPermission === "function"
) {
  DeviceMotionEvent.requestPermission();
}

//Moving Animation Event
container.addEventListener("deviceorientation", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 1.5 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});