"use strict";
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!')
        .addStringOption(option => option.setName('input')
        .setDescription('The input to echo back')
        .setRequired(true)),
    execute(interaction) {
        console.log('a');
        interaction.reply('Pong!');
    },
};
