import * as fs from 'fs';
import * as mysql from 'mysql';
import { Client, Collection, } from 'discord.js'
import { date } from 'date-and-time'
import { dbUser, dbPass, dbIp, token, dbName } from './config/config';
import config from './config/config.json';

const client = new Client();
const prefix = config.prefix;

/*
Database schema

CREATE TABLE `moderation` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `userId` varchar(100) NOT NULL,
    `type` varchar(50) NOT NULL,
    `endDate` varchar(500) NOT NULL,
    `reason` varchar(500) NOT NULL,
    PRIMARY KEY (`id`)
);

*/


const con = mysql.createConnection({
    host: dbIp,
    user: dbUser,
    password: dbPass,
    database: dbName,
    multipleStatements: false
});


client.commands = new Collection();
loadCommands(client.commands, `${__dirname}/commands`);

function loadCommands(collection, folder) {
    const commandFiles = fs.readdirSync(folder);

    for (const file of commandFiles) {
        const path = `${folder}/${file}`;
        if (file.endsWith('.js')) {
            const command = require(path);
            //console.log(command)
            collection.set(command.name, command);
        }
        else if (fs.lstatSync(path).isDirectory()) {
            loadCommands(collection, path);
        }
    }
};



client.once('ready', () => {
    console.log("Bot is ready");
});


client.on('message', async message => {
    // Loop for updating the leaderboard

    if (message.content.startsWith(prefix)) {

        const input = message.content.slice(prefix.length).split(' ');
        const commandName = input.shift();
        const commandArgs = input.join(' ');

        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;


        try {
            client.commands.get(command.name).execute(message);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }


    }


})
client.login(token);
export {
    prefix as prefix,
    con as con,
}