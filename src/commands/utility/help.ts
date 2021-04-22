import { con } from '../../index';
import { prefix } from '../../index';
import { MessageEmbed } from 'discord.js';
module.exports = {
    name: 'help',
    aliases: ['h'],
    execute(message) {

        const exampleEmbed = new MessageEmbed()
            .setColor('#46bdf0')
            .setTitle('Commands')
            .addFields(
                { name: `${prefix}help`, value: `Shows this help screen` },
                { name: `${prefix}kick`, value: `Kicks a user \n Usage: ${prefix + 'kick @user#0000 reason'}` },
            );

        message.channel.send(exampleEmbed);
    },
}