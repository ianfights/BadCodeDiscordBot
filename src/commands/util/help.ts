import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with Pong!'),
	execute(interaction) {
        console.log('a')
		interaction.reply('Pong!');
	},
};