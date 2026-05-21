const connection = require('../config/db');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
const passwordSalt = process.env.PASSWORD_SALT;


const UserModel = {
    async findByUsername(username) {
        const [rows] = await connection.execute('SELECT * FROM `user` WHERE Username = ?', [username]);
        return rows[0];
    },
    async createUser(username, password) {
        const hashedPassword = await bcrypt.hash(password + passwordSalt, 10);
        const [result] = await connection.execute('INSERT INTO `user` (Username, Password) VALUES (?, ?)', [username, hashedPassword]);
        return result.insertId;
    },
    async validatePassword(username, password) {
        const user = await this.findByUsername(username);
        if (!user) {
            return false;
        }
        return await bcrypt.compare(password + passwordSalt, user.Password);
    },
    async findById(id) {
        const [rows] = await connection.execute('SELECT * FROM `user` WHERE User_ID = ?', [id]);
        return rows[0];
    }
};

module.exports = UserModel;