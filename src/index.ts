import Discord from 'discord.js';
import * as mysql from 'mysql';

var con = mysql.createConnection({
    host: "192.168.1.159",
    user: "",
    password: "",
    database: "bot",
    multipleStatements: false
});
export {con as con}