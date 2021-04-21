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
            .addFields({ name: `${index_1.prefix}help`, value: `Shows this help screen` });
        message.channel.send(exampleEmbed);
    },
};
