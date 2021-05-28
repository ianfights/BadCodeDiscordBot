import { prefix, con } from '../../index';
import date from 'date-and-time';

module.exports = {
    name: 'mute',
    aliases: ['m'],
    execute(message) {
        const timeNow = new Date();

        let member = message.mentions.members.first();

        let args = message.content.split(' ').splice(2).join(' ').trim().toLowerCase().split(',');
        let muteTime = args[0]
        let muteReason = args[1]
        console.log(`Time: ${muteTime} \n Reason: ${muteReason}`)

        if (!message.member.hasPermission("268435456")) {
            message.reply('You need to have the "Manage Roles" permission to use this command');
            return;
        }

        if (!member) {
            message.reply('You need to mention a member in this server for this command to work \n Usage: ``' + prefix + 'ban @user#0000 time [h = hours, d = days, m = months], reason``');
            return;
        }

        if (!muteReason || !muteTime) {
            message.reply('Invalid command usage! \n Usage: ``' + prefix + 'mute @user#0000 time [h = hours, d = days, m = months], reason``');
            return;
        }
        muteTime = muteTime.trim();
        muteReason = muteReason.trim();
        // Check to see if the "Muted" role exists. If not create it
        if (!message.guild.roles.cache.find(r => r.name === "Muted")) {
            // Muted role doesn't exist so have the server owner create one
            message.reply("The Muted role doesn't exist. \n Please create a role with the name of Muted and all permissions except speak, and drag the role above your member role.");
            return;
        }

        // Role exists so continue with muting

        // This switch statement also works as an argument check because of the default case!
        switch (muteTime.slice(1)) {
            case 'h':
                var endTime = date.format(date.addHours(timeNow, parseInt(muteTime)), 'YYYY/MM/DD HH:mm:ss');
                con.query(`INSERT INTO moderation (userId, type, endDate, reason) VALUES ('${member.id}', 'mute' ,'${endTime}', '${muteReason}')`);
                member.roles.add(message.guild.roles.cache.find(r => r.name === "Muted"));
                message.reply(`Sucessfully muted <@${member.id}>!`)
                break;
            case 'd':
                var endTime = date.format(date.addDays(timeNow, parseInt(muteTime)), 'YYYY/MM/DD HH:mm:ss');
                con.query(`INSERT INTO moderation (userId, type, endDate, reason) VALUES ('${member.id}', 'mute' ,'${endTime}', '${muteReason}')`);
                member.roles.add(message.guild.roles.cache.find(r => r.name === "Muted"));
                message.reply(`Sucessfully muted <@${member.id}>!`)
                break;
            case 'm':
                var endTime = date.format(date.addMonths(timeNow, parseInt(muteTime)), 'YYYY/MM/DD HH:mm:ss');
                con.query(`INSERT INTO moderation (userId, type, endDate, reason) VALUES ('${member.id}', 'mute' ,'${endTime}', '${muteReason}')`);
                member.roles.add(message.guild.roles.cache.find(r => r.name === "Muted"));
                message.reply(`Sucessfully muted <@${member.id}>!`)
                break;
            default:
                message.reply('Invalid command usage! \n Usage: ``' + prefix + 'mute @user#0000 time [h = hours, d = days, m = months], reason``');
                return;
        }

    },

}