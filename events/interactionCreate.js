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
			.addFields (
				{ name: 'Ticket Modules Disabled', value: 'Any feature that creates a ticket have been temporarily disabled.', inline: true},
			)
			.setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');

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
			.setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');
		
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
					.setDisabled(true),
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
			.setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');

		const faqbuttonrow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Website FAQ')
					.setStyle('LINK')
					.setURL('https://clanwarz.gg/faq')
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
			.setTitle('Report Menu')
			.setDescription('Please choose a category for the report.')
			.setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');
		
		const reportrow = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('playerreport')
				.setLabel('In Game Player Report')
				.setStyle('PRIMARY')
				.setDisabled(true),
			new MessageButton()
				.setCustomId('discordreport')
				.setLabel('Discord Member Report')
				.setStyle('SUCCESS')
				.setDisabled(true),
			new MessageButton()
				.setCustomId('reportback')
				.setLabel('Back')
				.setStyle('DANGER')
				.setDisabled(false),
		)
		//--- Support Stuff---//

		const supportembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Support Menu')
			.setDescription("If you need a staff's assistance please click request staff, otherwise you can create a ticket for your issue.")
			.setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');
		
		const supportrow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('createticket')
					.setLabel('Create Ticket')
					.setStyle('SUCCESS')
					.setDisabled(true),
				new MessageButton()
					.setCustomId('rqstaffbutton')
					.setLabel('Request Staff')
					.setStyle('PRIMARY')
					.setDisabled(false),
				new MessageButton()
					.setCustomId('supportback')
					.setLabel('Back')
					.setStyle('DANGER')
					.setDisabled(false),
			)

		const rqstaffembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Request Staff')
			.setDescription('Select which staff is required to assist you.\nPlease be mindful of the staff in this selection.')
			.setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');


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

		const complaintembed = new MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Complaint Menu')
			.setDescription('Please choose which category your complaint falls into.')
			.setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');
				
		const complaintrow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('servercomplaint')
					.setLabel('Server Complaint')
					.setStyle('SECONDARY')
					.setDisabled(true),
				new MessageButton()
					.setCustomId('websitecomplaint')
					.setLabel('Website Complaint')
					.setStyle('PRIMARY')
					.setDisabled(true),
				new MessageButton()
					.setCustomId('othercomplaint')
					.setLabel('Other Complaint')
					.setStyle('SUCCESS')
					.setDisabled(true),
				new MessageButton()
					.setCustomId('complaintback')
					.setLabel('Back')
					.setStyle('DANGER')
					.setDisabled(false),
		)
		
		//---Register Stuff---//


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
				interaction.update({ ephemeral: true, embeds: [reportembed], components: [reportrow] });
			else if(interaction.customId === `report`)
				interaction.update({ ephemeral: true, embeds: [reportembed], components: [reportrow] });
			else if(interaction.customId === `reportback`)
				interaction.update({ ephemeral: true, embeds: [helpembed], components: [helpbuttons] });
		////////////////////////////
			else if(interaction.customId === `supportmain`)
				interaction.update({ ephemeral: true, embeds: [supportembed], components: [supportrow] });
			else if(interaction.customId === `support`)
				interaction.update({ ephemeral: true, embeds: [supportembed], components: [supportrow] });
			else if(interaction.customId === `supportback`)
				interaction.update({ ephemeral: true, embeds: [helpembed], components: [helpbuttons] });
			else if(interaction.customId === `rqstaffbutton`)
				interaction.update({ ephemeral: true, embeds: [rqstaffembed], components: [rqstaffrow, rqstaffbackbutton] });
			else if(interaction.customId === `rqstaffback`)
				interaction.update({ ephemeral: true, embeds: [supportembed], components: [supportrow] });
		////////////////////////////
			else if(interaction.customId === `complaintmain`)
				interaction.update({ ephemeral: true, embeds: [complaintembed], components: [complaintrow] });
			else if(interaction.customId === `complaint`)
				interaction.update({ ephemeral: true, embeds: [complaintembed], components: [complaintrow] });
			else if(interaction.customId === `complaintback`)
				interaction.update({ ephemeral: true, embeds: [helpembed], components: [helpbuttons] });
		////////////////////////////
			else if(interaction.customId === `createticket`) {
				let username = interaction.user.username
				let channelname = `ticket-${username}`
				const createdChannel = interaction.guild.channels.create(`${channelname}`, {
					type: 'GUILD_TEXT',
				  })
				  async function declaredAsAsync() {
					await createdChannel.send({content: 'Whatever'})
				}
				
				interaction.update({ ephemeral: true, embeds: [helpembed], components: [helpbuttons] });
			}
		////////////////////////////




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
	}
	},
};
