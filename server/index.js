//------------------- ZUGANGSDATEN FÜR DIE DATENBANK -------------------
const dotenv = require('./config');
const {host, user, password, database} = dotenv.db;

//----------------------------------------------------------------------

const express = require('express')
const path = require('path')
const mysql = require('mysql2/promise');
const app = express()
const port = 3022
app.use(express.static(path.join(__dirname, 'public'), {extensions: ['html']}));

spielraum = []



async function init_Opponent(){
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const image = data.results[0].picture.large;
    const name = data.results[0].name.first + " " + data.results[0].name.last;

    return {image, name};
}

app.get('/opponent', async (req, res) => {
    const opponent = await init_Opponent();
    res.json(opponent);
});

app.get('/spielraum', (req, res) => {

  // Wenn kein Spielraum gefunden wird, erstelle einen neuen
    const spielraum_id = Math.floor(Math.random() * 1000000);
    const user_id = Math.floor(Math.random() * 1000000);
    const spiel = {
        spielraum_id: spielraum_id,
        user_id: user_id
    }
    spielraum.push(spiel);
    res.json({
       user_id: user_id,
       html: `<div class='loading_game'><span>Lade Spiel...</span></div><script>setTimeout(() => {fetch('/opponent_for/${spielraum_id}')}, 2000);</script>`
    });
});

app.get('/testdb', async (req, res) => {   
    const connection = await mysql.createConnection({host, user, password, database});
    const [rows] = await connection.execute('SHOW TABLES');
    res.json(rows);
});





app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
