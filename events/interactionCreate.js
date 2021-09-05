const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, client } = require('discord.js');
const support = require('../commands/support');

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
	
		const helpembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Help Menu')
			.setDescription('Please select what kind of help you need.')
			.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');

		const helpbuttons = new MessageActionRow()
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

			const rqstaffrow = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('rqstaffselect')
					.setPlaceholder('Request Staff')
					.addOptions([
						{
							label: 'Support',
							description: 'Request a member of the Support Team.',
							value: 'rqsupport',
						},
						{
							label: 'Moderator',
							description: 'Request a member of the Moderation Team.',
							value: 'rqmod',
						},
						{
							label:'Administrator',
							description: 'Request a member of the Administrator Team. \nPlease only choose this option if absolultely needed.',
							value: 'rqadmin',
						}
					]),
			);

		const backbutton = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('defaultback')
					.setLabel('Back')
					.setStyle('DANGER')
					.setDisabled(false),
			)
		const faqbuttonrow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Website FAQ')
					.setStyle('LINK')
					.setURL('https://clanwarz.gg')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('back')
					.setLabel('Back')
					.setStyle('DANGER')
					.setDisabled(false),
				
			);

		const faqembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('FAQ')
			.setDescription("You can visit the FAQ by going to the <#833709887975587860> channel or by visiting our website's Faq below.")
			.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');

		const rqstaffembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Request Staff')
			.setDescription('Select which staff is required to assist you.\nPlease be mindful of the staff in this selection.')
			.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');
		

		
		if (interaction.isButton()) {
			if(interaction.customId === 'rqstaff')
				interaction.update({ ephemeral: true, embeds: [rqstaffembed], components: [rqstaffrow, backbutton] })
			else if(interaction.customId === 'faq')
				interaction.update({ ephemeral: true, embeds: [faqembed], components: [faqbuttonrow] });
			else if(interaction.customId === `back`)
				interaction.update({ ephemeral: true, embeds: [helpembed], components: [helpbuttons] });
			else if(interaction.customId === `defaultback`)
				interaction.update({ ephemeral: true, embeds: [helpembed], components: [helpbuttons] });
		}

		if (interaction.isSelectMenu()) {
			const adminid = '882827685968113765'
			const modid = '833685460253278258'
			const supportid = '883111486594105344'
			let choice = interaction.values[0]
			const user = interaction.member
			const rqsupportembed = new MessageEmbed()
				.setColor('#FF0000')
				.addFields(
					{ name: 'User:', value: `${user}` },
					{ name: 'Requested Staff', value: 'Support' },
				)
				.setTitle('User is requesting a Staff Member.')
				.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');
			const rqmodembed = new MessageEmbed()
				.setColor('#FF0000')
				.setColor('#FF0000')
				.addFields(
					{ name: 'User:', value: `${user}` },
					{ name: 'Requested Staff', value: 'Moderator' },
				)
				.setTitle('User is requesting a Staff Member.')
				.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');
			const rqadminembed = new MessageEmbed()
				.setColor('#FF0000')
				.setColor('#FF0000')
				.addFields(
					{ name: 'User:', value: `${user}` },
					{ name: 'Requested Staff', value: 'Administrator' },
				)
				.setTitle('User is requesting a Staff Member.')
				.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');


			if (choice === 'rqsupport')
				interaction.reply({allowedMentions: {roles: [supportid]}, content: `<@&${supportid}>`, embeds:[rqsupportembed]});
			else if (choice === 'rqmod')
				interaction.reply({allowedMentions: {roles: [modid]}, content: `<@&${modid}>`, embeds:[rqmodembed]});
			else if (choice === 'rqadmin')
				interaction.reply({allowedMentions: {roles: [adminid]}, content: `<@&${adminid}>`, embeds:[rqadminembed]});
				
		}
	},
};

