import { con } from '../../index';
import { prefix } from '../../index';
import {MessageEmbed} from 'discord.js';
module.exports = {
    name: 'help',
    aliases: ['h'],
    execute(message) {

        const exampleEmbed = new MessageEmbed()
            .setColor('#46bdf0')
            .setTitle('Commands')
            .addFields(
                {name:`${prefix}help`,value:`Shows this help screen`}
                );

        message.channel.send(exampleEmbed);
    },
}