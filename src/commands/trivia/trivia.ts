import { disbut, con, client } from '../../index';
import { MessageEmbed } from 'discord.js';
module.exports = {
    name: 'trivia',
    aliases: ['t'],
    async execute(message) {
        //Select all unique questions
        con.query(`SELECT DISTINCT question FROM trivia`, (err, initalQuestion) => {
            if (err) throw err;
            const questionId = Math.floor(Math.random() * (initalQuestion.length - 1));
            const question = initalQuestion[questionId].question;

            con.query(`SELECT * FROM trivia WHERE question = '${question}' LIMIT 4;`, (err, answer) => {
                if (err) throw err;
                let correctAnswer = answer[0].correctAnswer;
                //  console.log(answer);

                let embedQuestion = new MessageEmbed()
                    .setColor('#46bdf0')
                    .setTitle('Trivia')
                    .addFields(
                        { name: 'Question', value: `${question}` },
                    );

                let aButton = new disbut.MessageButton()
                    .setStyle('blurple')
                    .setLabel(answer[0].answer)
                    .setID(answer[0].answer);

                let bButton = new disbut.MessageButton()
                    .setStyle('blurple')
                    .setLabel(answer[1].answer)
                    .setID(answer[1].answer);

                let cButton = new disbut.MessageButton()
                    .setStyle('blurple')
                    .setLabel(answer[2].answer)
                    .setID(answer[2].answer);

                let dButton = new disbut.MessageButton()
                    .setStyle('blurple')
                    .setLabel(answer[3].answer)
                    .setID(answer[3].answer);


                message.channel.send({ buttons: [aButton, bButton, cButton, dButton], embed: embedQuestion }).then(d => {
                    setTimeout(() => {
                        d.delete();
                    }, 5000)
                });




                let started = false;
                let correctPeople: string[] = [];
                client.on('clickButton', async (button) => {


                    console.log(correctPeople.length);
                    if (button.id == correctAnswer && !correctPeople.includes(button.clicker.user.id)) {
                        correctPeople.push(button.clicker.user.id);
                    }

                    if (started == false) {
                        setTimeout(() => {
                            let people = '';

                            if (correctPeople.length == 0) {
                                button.message.channel.send(`Nobody got the answer correct :( \nThe correct answer was ${correctAnswer}`);
                                return;
                            }

                            for (let i in correctPeople) {
                                if (err) throw err
                                people += '<@' + correctPeople[i] + '>\n';

                            }
                            button.message.channel.send(`The correct answer was ${correctAnswer}!.\nThe following people got it correct ${people}`);


                        }, 5000);
                    }


                    started = true;
                    button.defer();
                });
            });

        });
    },

}