import * as fs from 'fs';
const { Client, Collection, Intents } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let commands = [];

client.commands = new Collection();
loadCommands(client.commands, __dirname+`/commands`);

function loadCommands(collection, folder) {
    const commandFiles = fs.readdirSync(folder);

    for (const file of commandFiles) {
        const path = folder+`/`+file;
        if (file.endsWith('.js')) {
            const command = require(path);
            //@ts-ignore
            commands.push(command.data.toJSON());
           // console.log(commands)
            //console.log(command)
            collection.set(command.data.name, command);
        }
        else if (fs.lstatSync(path).isDirectory()) {
            loadCommands(collection, path);
        }
    }
};



client.once('ready', () => {
    console.log('Ready!');
   // console.log(client.commands.toJSON())
});



client.on('messageCreate', async message => {

    
    if (message.content.toLowerCase() === '!deploy' && message.author.id === '248181515387666433') {

        const command = await client.guilds.cache.get('724996664389271633')?.commands.set(commands);
        console.log(command);
    }

    if (message.content.toLowerCase() === '!deployproduction' && message.author.id === '248181515387666433') {

        const command = await client.application?.commands.set(commands);
        console.log(command);
    }
});



client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});


client.login(token);

