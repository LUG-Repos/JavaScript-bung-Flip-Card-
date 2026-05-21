const express = require('express');
const passport = require('../config/passport');
const UserModel = require('../model/user');
const router = express.Router();

const requireAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};


//REGISTRIERUNG
router.post('/register', async (req, res) => {
    const {username, password, confirm_password} = req.body;
    if(!username?.trim() || !password || !confirm_password) {
        return res.status(400).json({message: 'Alle Felder müssen ausgefüllt werden.'});
    }
    if (password !== confirm_password) {
        return res.status(400).json({message: 'Passwörter stimmen nicht überein.'});
    }
    if (username.length < 3 || username.length > 20) {
        return res.status(400).json({message: 'Benutzername muss zwischen 3 und 20 Zeichen lang sein.'});
    }
    if (password.length < 6) {
        return res.status(400).json({message: 'Passwort muss mindestens 6 Zeichen lang sein.'});
    }
    if (password.length > 100) {
        return res.status(400).json({message: 'Passwort darf maximal 100 Zeichen lang sein.'});
    }
    if(!/^[a-zA-Z0-9_]+$/.test(username)) {
        return res.status(400).json({message: 'Benutzername darf nur Buchstaben, Zahlen und Unterstriche enthalten.'});
    }
    try{
        const existingUser = await UserModel.findByUsername(username);
        if (existingUser) {
            return res.status(400).json({message: 'Benutzername ist bereits vergeben.'});
        }
        const user = await UserModel.createUser(username, password);
        req.login({User_ID: user}, (err) => {
            if (err) {
                console.error('req.login Fehler:', err);
                return res.status(500).json({message: 'Fehler beim Einloggen nach Registrierung.'});
            }
            return res.json({message: 'Registrierung erfolgreich.', user: {username: username}});
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({message: 'Interner Serverfehler.'});
    }
});

//LOGIN
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(400).json({message: 'Ungültiger Benutzername oder Passwort.'});
        }
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.json({message: 'Login erfolgreich.', user: {username: user.Username}});
        });
    })(req, res, next);
});

router.get('/me', requireAuth, (req, res) => {
    res.json({user: {username: req.user.Username}});
});

module.exports = router;
