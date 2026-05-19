user_id = null;


async function startGame(mode) {
    if(mode === "human"){
        const response = await fetch("/spielraum");
        const data = await response.json();
        user_id = data.user_id;
        const new_html = data.html;
        document.body.innerHTML = new_html;
    }
    else {
        window.location.href = `./game`;
    }
}

function showScoreboard() {
    window.location.href = `./scoreboard`;
}

function nav_to_menu(){
    window.location.href = `./`;
}