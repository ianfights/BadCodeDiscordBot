"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const discord_js_1 = require("discord.js");
module.exports = {
    name: 'help',
    aliases: ['h'],
    execute(message) {
        const exampleEmbed = new discord_js_1.MessageEmbed()
            .setColor('#46bdf0')
            .setTitle('Commands')
            .addFields({ name: `${index_1.prefix}help`, value: `Shows this help screen` }, { name: `${index_1.prefix}kick`, value: `Kicks a user \n Usage: ${index_1.prefix + 'kick @user#0000 reason'}` });
        message.channel.send(exampleEmbed);
    },
};
