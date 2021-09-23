"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with Pong!'),
    execute(interaction) {
        console.log('a');
        interaction.reply('Pong!');
    },
};
