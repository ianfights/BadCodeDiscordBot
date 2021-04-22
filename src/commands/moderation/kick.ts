import { con } from '../../index';
import { prefix } from '../../index';
module.exports = {
    name: 'kick',
    aliases: ['k'],
    execute(message) {
        let member = message.mentions.members.first();
        const args = message.content.slice(prefix.length).trim().toLowerCase().split(/ +/g);
        if (!message.member.hasPermission("2")) {
            message.reply('You need to have the "Kick Members" permission to use this command');
            return;
        }

        if (!member) {
            message.reply('You need to mention a member in this server for this command to work \n Usage: ``' + prefix + 'kick @user#0000 reason``');
            return;
        }

        member.kick(args[2]).then(() => {
            message.reply(`Sucessfully kicked <@${member.id}> with a reason of ${args[2]}`);
        }).catch(err => {
            message.channel.send(`I was unable to kick that user`);
            console.error(err);
        })
    },
}