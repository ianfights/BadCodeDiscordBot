import { disbut, con } from '../../index';
import { MessageEmbed } from 'discord.js';
module.exports = {
    name: 'trivia',
    aliases: ['t'],
    async execute(message) {
        let exampleEmbed = new MessageEmbed()
            .setColor('#46bdf0')
            .setTitle('Rules')
            .setDescription("1. blah blah blah \n 2. blah blah blah \n press accept to get access to the server ")

        let btn = new disbut.MessageButton()
            .setStyle('blurple') //default: blurple
            .setLabel('Accept') //default: NO_LABEL_PROVIDED
            .setID('trivia') //note: if you use the style "url" you must provide url using .setURL('https://example.com')
            
        // .setDisabled(); //disables the button | default: false
        message.channel.send({ button: btn, embed: exampleEmbed });
    },

}