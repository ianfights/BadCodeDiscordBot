import * as fs from 'fs';
import * as mysql from 'mysql';
import { Client, Collection,} from 'discord.js'
import {dbUser, dbPass, dbIp, token, dbName} from './config/config';
const client = new Client();
import config from './config/config.json';
const PREFIX = config.prefix;


const con = mysql.createConnection({
    host: dbIp,
    user: dbUser,
    password: dbPass,
    database: dbName,
    multipleStatements: false
});

export {con as con}

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


    /*
        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
        if (!command) return;
    */

    if (message.content.startsWith(PREFIX)) {

        const input = message.content.slice(PREFIX.length).split(' ');
        const commandName = input.shift();
        const commandArgs = input.join(' ');
        const splitArgs = commandArgs.split(' ');


        //member.roles.cache.has('713076591118516314');
        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;


        try {
            client.commands.get(command.name).execute(message, client, commandArgs, splitArgs);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }


    }


})
client.login(token);