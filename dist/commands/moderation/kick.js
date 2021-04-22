"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
module.exports = {
    name: 'kick',
    aliases: ['k'],
    execute(message) {
        let member = message.mentions.members.first();
        const args = message.content.slice(index_1.prefix.length).trim().toLowerCase().split(/ +/g);
        console.log(args);
        if (!member) {
            message.reply('You need to mention a member for this command to work \n Usage: ``' + index_1.prefix + 'kick @user#0000 reason``');
        }
        member.kick(args[2]).then(() => {
            message.reply(`Sucessfully kicked <@${member.id}> with a reason of ${args[2]}`);
        });
    },
};
