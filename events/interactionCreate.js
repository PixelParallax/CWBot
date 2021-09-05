const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, Client } = require('discord.js');
const support = require('../commands/support');

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
	

		//---Help Menu Stuff--//
		const helpembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Help Menu')
			.setDescription('Please select what kind of help you need.')
			.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');

		const helpbuttons = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('questions')
						.setLabel('Questions?')
						.setStyle('SECONDARY')
						.setDisabled(false),
					new MessageButton()
						.setCustomId('report')
						.setLabel('Report')
						.setStyle('PRIMARY')
						.setDisabled(false),
					new MessageButton()
						.setCustomId('support')
						.setLabel('Support')
						.setStyle('SUCCESS')
						.setDisabled(false),
					new MessageButton()
						.setCustomId('complaint')
						.setLabel('Complaint')
						.setStyle('DANGER')
						.setDisabled(false),
				);






		
		//---Questions Stuff---//

		const questionsembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Questions Menu')
			.setDescription("Please visit our FAQ First by clicking the button, if your question isnt there you can click the Ask button.")
			.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');
		
		const questionsrow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('faqbutton')
					.setLabel('FAQ')
					.setStyle('SUCCESS')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('askbutton')
					.setLabel('Ask a question')
					.setStyle('PRIMARY')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('questionback')
					.setLabel('Back')
					.setStyle('DANGER')
					.setDisabled(false),
			
		);

		const faqembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('FAQ')
			.setDescription("You can visit the FAQ by going to the <#833709887975587860> channel or by visiting our website's Faq below.")
			.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');

		const faqbuttonrow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Website FAQ')
					.setStyle('LINK')
					.setURL('https://clanwarz.gg/faqs')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('faqback')
					.setLabel('Back')
					.setStyle('DANGER')
					.setDisabled(false),
				
			);




		//---Ticket Stuff---//





		//---Report Players Stuff---//

		const reportembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Report A Player')
			.setDescription('Please select a category for the report.')
			.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');
	
		const reportbuttons = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('ingame')
					.setLabel('In Game Player Report')
					.setStyle('PRIMARY')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('discordreport')
					.setLabel('Discord Member Report')
					.setStyle('SUCCESS')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('reportbackbutton')
					.setLabel('Back')
					.setStyle('DANGER')
					.setDisabled(false),
			)






		//---Request Staff Stuff---//


		const rqstaffembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Request Staff')
			.setDescription('Select which staff is required to assist you.\nPlease be mindful of the staff in this selection.')
			.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');


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

		const rqstaffbackbutton = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('rqstaffback')
					.setLabel('Back')
					.setStyle('DANGER')
					.setDisabled(false),
			)




		//---Complaint Stuff--//




		

		//---Buttons---//

		if (interaction.isButton()) {
		/////////////////////////////
			if(interaction.customId === `questionsmain`)
				interaction.update({ ephemeral: true, embeds: [questionsembed], components: [questionsrow] });
			else if(interaction.customId === `questions`)
				interaction.update({ ephemeral: true, embeds: [questionsembed], components: [questionsrow] });
			else if(interaction.customId === `questionback`)
				interaction.update({ ephemeral: true, embeds: [helpembed], components: [helpbuttons] });
			else if(interaction.customId === 'faqbutton')
				interaction.update({ ephemeral: true, embeds: [faqembed], components: [faqbuttonrow] });
			else if(interaction.customId === `faqback`)
				interaction.update({ ephemeral: true, embeds: [questionsembed], components: [questionsrow] });
		////////////////////////////
			else if(interaction.customId === `reportmain`)
				interaction.update({ ephemeral: true, embeds: [reportembed], components: [reportbuttons] });
			else if(interaction.customId === `report`)
				interaction.update({ ephemeral: true, emebds: [reportembed], components: [reportbuttons] });
			else if(interaction.customId === `reportbackbutton`)
				interaction.update({ ephemeral: true, emebds: [helpembed], components: [helpbuttons] });
		////////////////////////////
			else if(interaction.customId === `rqstaffmain`)
				interaction.update({ ephemeral: true, embeds: [rqstaffembed], components: [rqstaffrow, rqstaffbackbutton] });
			else if(interaction.customId === 'rqstaff')
				interaction.update({ ephemeral: true, embeds: [rqstaffembed], components: [rqstaffrow, rqstaffbackbutton] })
			else if(interaction.customId === `rqstaffback`)
				interaction.update({ ephemeral: true, embeds: [helpembed], components: [helpbuttons] });
		}



		//---Select Menus---//
		if (interaction.isSelectMenu()) {
			
		//---Request Staff Menu Extras---//
			const adminid = '882827685968113765'
			const modid = '833685460253278258'
			const supportid = '883111486594105344'
			let choice = interaction.values[0]
			const user = interaction.member
			const rqsupportembed = new MessageEmbed()
				.setColor('#FF0000')
				.addFields(
					{ name: 'User:', value: `${user}` },
					{ name: 'Requested Staff:', value: 'Support' },
				)
				.setTitle('User is requesting a Staff Member.')
				.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');
			const rqmodembed = new MessageEmbed()
				.setColor('#FF0000')
				.setColor('#FF0000')
				.addFields(
					{ name: 'User:', value: `${user}` },
					{ name: 'Requested Staff:', value: 'Moderator' },
				)
				.setTitle('User is requesting a Staff Member.')
				.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');
			const rqadminembed = new MessageEmbed()
				.setColor('#FF0000')
				.setColor('#FF0000')
				.addFields(
					{ name: 'User:', value: `${user}` },
					{ name: 'Requested Staff:', value: 'Administrator' },
				)
				.setTitle('User is requesting a Staff Member.')
				.setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');



		//---Menus---//
		if (choice === 'rqsupport')
			interaction.reply({allowedMentions: {roles: [supportid]}, content: `<@&${supportid}>`, embeds:[rqsupportembed]});
		else if (choice === 'rqmod')
			interaction.reply({allowedMentions: {roles: [modid]}, content: `<@&${modid}>`, embeds:[rqmodembed]});
		else if (choice === 'rqadmin')
			interaction.reply({allowedMentions: {roles: [adminid]}, content: `<@&${adminid}>`, embeds:[rqadminembed]});
				
		}
	},
};

