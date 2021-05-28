import { prefix, con } from '../../index';
import date from 'date-and-time';

module.exports = {
    name: 'ban',
    aliases: ['b'],
    execute(message) {
        const timeNow = new Date();
        let member = message.mentions.members.first();
        // Time before changing into a standard var to not have to deal with array indexes

        let args = message.content.split(' ').splice(2).join(' ').trim().toLowerCase().split(',');
        let banTime = args[0]
        let banReason = args[1]
        console.log(`${parseInt(banTime)} \n${banReason}`)
        console.log(args);

        // Argument and permission checking to avoid user error causing bot to go down

        if (!message.member.hasPermission("4")) {
            message.reply('You need to have the "Ban Members" permission to use this command');
            return;
        }

        if (!member) {
            message.reply('You need to mention a member in this server for this command to work \n Usage: ``' + prefix + 'ban @user#0000 time [h = hours, d = days, m = months], reason``');
            return;
        }

        if (!banTime || !banReason) {
            message.reply('Invalid command usage! \n Usage: ``' + prefix + 'ban @user#0000 time [h = hours, d = days, m = months], reason``');
            return;
        }
        
        

        // Finally to actually banning the user! 
// a
//asdf 
        // This switch statement also works as an argument check because of the default case!
        switch(banTime.slice(1)){
            case 'h':
                var endTime = date.format(date.addHours(timeNow, parseInt(banTime)), 'YYYY/MM/DD HH:mm:ss');
                con.query(`INSERT INTO moderation (userId, type, endDate, reason) VALUES ('${member.id}', 'ban' ,'${endTime}', '${banReason}')`);
                member.ban({ reason: banReason}).then(() => {
                    message.reply(`Sucessfully banned <@${member.id}> !`);
                }).catch(err => {
                    message.channel.send(`I was unable to ban that user`);
                    console.error(err);
                });
                break;
            case 'd':
                var endTime = date.format(date.addDays(timeNow, parseInt(banTime)), 'YYYY/MM/DD HH:mm:ss');
                con.query(`INSERT INTO moderation (userId, type, endDate, reason) VALUES ('${member.id}', 'ban' ,'${endTime}', '${banReason}')`);
                member.ban({ reason: banReason}).then(() => {
                    message.reply(`Sucessfully banned <@${member.id}> !`);
                }).catch(err => {
                    message.channel.send(`I was unable to ban that user`);
                    console.error(err);
                });
                break;
            case 'm':
                var endTime = date.format(date.addMonths(timeNow, parseInt(banTime)), 'YYYY/MM/DD HH:mm:ss');
                con.query(`INSERT INTO moderation (userId, type, endDate, reason) VALUES ('${member.id}', 'ban' ,'${endTime}', '${banReason}')`);
                member.ban({ reason: banReason}).then(() => {
                    message.reply(`Sucessfully banned <@${member.id}> !`);
                }).catch(err => {
                    message.channel.send(`I was unable to ban that user`);
                    console.error(err);
                });
                break;
            default: 
                message.reply('Invalid command usage! \n Usage: ``' + prefix + 'ban @user#0000 time [h = hours, d = days, m = months], reson``');
                return;
        }

    },
}

//Use AddHours Method
//https://www.npmjs.com/package/date-and-time