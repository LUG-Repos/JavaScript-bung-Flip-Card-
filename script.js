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