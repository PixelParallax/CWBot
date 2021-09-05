//importing needed features.
const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

//command starts here
module.exports = {
//create slash command with basic info
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Opens a help menu.'),

		
			
//this is where the command is executed.
	async execute(interaction) {

		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('questionsmain')
					.setLabel('Questions?')
					.setStyle('SECONDARY')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('reportmain')
					.setLabel('Report')
					.setStyle('PRIMARY')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('supportmain')
					.setLabel('Support')
					.setStyle('SUCCESS')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('complaintmain')
					.setLabel('Complaint')
					.setStyle('DANGER')
					.setDisabled(false),
			);


		const menuembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Help Menu')
			.setDescription('Please select what kind of help you need.')
			.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');
				
			await interaction.reply({ ephemeral: true, embeds: [menuembed], components: [row] });
		}
	};