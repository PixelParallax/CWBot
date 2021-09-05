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
					.setCustomId('faq')
					.setLabel('FAQ')
					.setStyle('SECONDARY')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('ticket')
					.setLabel('Create Ticket')
					.setStyle('SUCCESS')
					.setDisabled(true),
				new MessageButton()
					.setCustomId('report')
					.setLabel('Report Person')
					.setStyle('PRIMARY')
					.setDisabled(true),
				new MessageButton()
					.setCustomId('rqstaff')
					.setLabel('Request Staff')
					.setStyle('DANGER')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('complaint')
					.setLabel('Complaint')
					.setStyle('DANGER')
					.setDisabled(true),
			);


		const menuembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Help Menu')
			.setDescription('Please select what kind of help you need.')
			.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');
				
			await interaction.reply({ ephemeral: true, embeds: [menuembed], components: [row] });
		}
	};