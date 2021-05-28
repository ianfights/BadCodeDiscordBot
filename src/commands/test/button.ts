import { disbut } from '../../index';
import { MessageEmbed } from 'discord.js';
module.exports = {
    name: 'button',
    aliases: ['b'],
    async execute(message) {
        let exampleEmbed = new MessageEmbed()
            .setColor('#46bdf0')
            .setTitle('Rules')
            .setDescription("1. blah blah blah \n 2. blah blah blah \n press accept to get access to the server ")

        let btn = new disbut.MessageButton()
            .setStyle('blurple') //default: blurple
            .setLabel('Accept') //default: NO_LABEL_PROVIDED
            .setURL("https://google.com")
            .setID('click_to_function') //note: if you use the style "url" you must provide url using .setURL('https://example.com')
            //a
        // .setDisabled(); //disables the button | default: false

        message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', { button: btn, embed: exampleEmbed });
    },

}