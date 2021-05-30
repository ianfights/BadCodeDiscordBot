import { prefix } from '../../index';
import { MessageEmbed } from 'discord.js';
module.exports = {
    name: 'help',
    aliases: ['h'],
    execute(message) {

        const helpScreen = new MessageEmbed()
            .setColor('#46bdf0')
            .setTitle('Commands')
            .addFields(
                { name: `${prefix}help`, value: `Shows this help screen` },
                { name: `${prefix}kick`, value: `Kicks a user \n Usage: ${prefix + 'kick @user#0000 reason'}` },
                {name: `${prefix}ban`, value: `Bans a user for a specified amount of time \n Usage: ${prefix} ban @user#000 time [h = hours, d = days, m = months], [reason]`},
                {name: `${prefix}mute`, value: `Mutes a user for a specified amount of time \n Usage: ${prefix} mute @user#000 time [h = hours, d = days, m = months], [reason]`}
            );

        message.channel.send(helpScreen);
    },
}