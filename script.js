//Feu rouge

let red = document.getElementById("red");
let RedStyle = window.getComputedStyle(red);

//Feu vert

let green = document.getElementById("green");
let GreenStyle = window.getComputedStyle(green);

//Feu Orange

let orange = document.getElementById("orange");
let OrangeStyle = window.getComputedStyle(orange);

// Allume le feu vert au début du cycle
function turnOn() {
  green.style.opacity = "1";

  // Éteint le feu vert après 10 secondes
  setTimeout(() => {
    green.style.opacity = "0.3";
  }, 10000);
  setTimeout(() => {
    orange.style.opacity = "1";
  }, 10000);
  setTimeout(() => {
    orange.style.opacity = "0.3";
  }, 13000);
  setTimeout(() => {
    red.style.opacity = "1";
  }, 13000);
  setTimeout(() => {
    red.style.opacity = "0.3";
  }, 23000);
}

// Commencez le cycle dès le chargement de la page
turnOn();

// Répétez le cycle toutes les 28 secondes (10 secondes allumé + 18 secondes éteint)
setInterval(turnOn, 23000);

//Cette fonction permet de vérifié que si le feu est rouge alors le "walkman" ne doit pas apparaitre sinon il peut marcher

function WalkOn() {
  if (red.style.opacity === "1") {
    let walkman = document.getElementById("walkman");
    walkman.style.opacity = "0";
  } else {
    walkman.style.opacity = "1";
  }
  //Ici on utilise la methode requestAnimationFrame qui permet de surveiller les evenement 60 fois par secondes
  requestAnimationFrame(WalkOn);
}

//Ici on demande a ce que soit executer 60 fois par secondes la fonction walkman afin de toujours verifier les conditions
requestAnimationFrame(WalkOn);
