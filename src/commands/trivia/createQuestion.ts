//For now this command is only for me, but I will change it later. 
import { disbut, con, client } from '../../index';
import { MessageEmbed } from 'discord.js';
module.exports = {
    name: 'createQuestion',
    aliases: ['cq'],
    async execute(message) {
        let args = message.content.split(' ').splice(1).join(' ').toLowerCase().split(',');
        //Usage is ;cq question,ans1,ans2,ans3,ans4,correct
        if(message.author.id != '248181515387666433'){ 
            message.reply("Sorry this comand is currently only for the creator of the bot. It will eventually come to you though!");
            return;
        }

        let question = args[0].trim();
        let answers = [args[1].trim(), args[2].trim(), args[3].trim(), args[4].trim()];
        let correctAnswer = args[5].trim();

        for(let i = 0;i<=4;i++){
        con.query(`INSERT INTO trivia (question, answer, correctAnswer) VALUES ('${question}', '${answers[i]}', '${correctAnswer}')`);
        }

    },
}