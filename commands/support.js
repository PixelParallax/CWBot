//importing needed features.
const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

//command starts here
module.exports = {
//create slash command with basic info
	data: new SlashCommandBuilder()
		.setName('support')
		.setDescription('Answers common support questions.')
		.addStringOption(option => 
			option
			.setName('question')
			.setRequired(true)
			.setDescription('Select which question you want answered.')
			.addChoices([
				['How to join a Tournament.', 'How to join a Tournament.']
		])),
		
			
//this is where the command is executed.
	async execute(interaction) {

//all of the emebds are premade responces to questions. 
			const embedhtjt = new MessageEmbed()
			.setTitle('How to join a Tournament.')
			.setColor('#FF0000')
			.setDescription('This is how you join a Tournament.')
			.setTimestamp()
			.setFooter('Clan Warz Info Bot', 'https://i.imgur.com/WPiL1Ye.png');

//This is where the bot checks what question needs to be answered then sends the correct responce.
		const string = interaction.options.getString('question');
		if(string == 'How to join a Tournament.'){
			return interaction.reply({ embeds: [embedhtjt] });
		}
	},
};