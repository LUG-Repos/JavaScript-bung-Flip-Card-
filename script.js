let mouseX = 0;
let mouseY = 0;

const imgs = ["knight.png", "hero.png","goblins.png"];
const titles = ["Gefallener Ritter", "Unerschrockener Held", "Goblin Armee"];
const texts = [
    "Ein gefallener Ritter aus den Schattenkriegen des Hochmittelalters, dessen Seele durch endlose Schlachten verhärtet wurde und dessen Klinge unzählige Feinde niedergestreckt hat.",
    "Ein unerschrockener Held, der sich den Mächten der Dunkelheit entgegenstellt und das Schicksal der Welt in seinen Händen hält.",
    "Eine Goblin Armee, die aus den Tiefen der Wälder aufsteigt, um Chaos und Zerstörung zu verbreiten."
];

const karte = document.getElementById("karte001")
const titel = karte.getElementsByTagName("div")[0].getElementsByTagName("span")[0];
const bild = karte.getElementsByTagName("div")[0].getElementsByTagName("img")[0];
const text = karte.getElementsByTagName("div")[0].getElementsByTagName("p")[0];


document.getElementById("karte001").classList.add("flipFrontStep2");
function flip(card){
    if (card.classList.contains("flipFrontStep2")) {
        card.classList.remove("flipFrontStep2");
        card.classList.add("flipBackStep1");
    }
    else if (card.classList.contains("flipBackStep2")) {
        card.classList.remove("flipBackStep2");
        card.classList.add("flipFrontStep1");
    }

    setTimeout(function() {
        if (card.classList.contains("flipFrontStep1")) {
            card.getElementsByClassName("front")[0].style.display = "flex";
            card.classList.remove("flipFrontStep1");
            card.classList.add("flipFrontStep2");
        }
        else if (card.classList.contains("flipBackStep1")) {
            card.getElementsByClassName("front")[0].style.display = "none";
            card.classList.remove("flipBackStep1");
            card.classList.add("flipBackStep2");
            
        }
    }, 200);
}

let counter = 0;
let maxCounter = titles.length;
function nextCard(){
    counter = counter + 1
    if(counter >= maxCounter){
        counter = 0;
    }

    titel.textContent = titles[counter];
    bild.src = "./imgs/" + imgs[counter];
    text.textContent = texts[counter];
}

document.addEventListener("click", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    karte.style.left = (mouseX-(karte.offsetWidth)/2)+"px";
    karte.style.top = (mouseY-(karte.offsetHeight)/2)+"px";

} );
