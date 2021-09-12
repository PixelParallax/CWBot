const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');

//command starts here
module.exports = {
//create slash command with basic info
	data: new SlashCommandBuilder()
		.setName('registrationmsg')
		.setDescription('Sends the embed for the Registration Channel.'),

		
			
//this is where the command is executed.
	async execute(interaction) {
        const channel = interaction.guild.channels.cache.get("833775100913778709")
        const file = new MessageAttachment('https://i.imgur.com/diR9j5e.png');
        const websitebutton = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Website')
                .setStyle('LINK')
                .setURL('https://clanwarz.gg/'),
        )
        const rmsg= new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Tournament Registration')
        .addFields (
            { name: 'How to Register a Team:', value: `**Step 1:**\n Visit our website clicking the button below.\n \u200b**Step 2:**\nNavigate to the tournament you want to register for.\n \u200b**Step 3:**\nClick add to cart, then checkout.\n \u200b**Step 4:**\nEnter your team's info and click __Place Order__.`, inline: false},
            { name: 'How to verify your entry:', value: `To verify that your entry has been submitted you will see your team added into registered teams channel.\n **NOTE:** This may take some time as it is completed manually.`}
        )
        .setImage('https://clanwarz.gg/wp-content/uploads/2021/09/Video.gif')
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');

        channel.send({ files: [file] });
        channel.send({ embeds: [rmsg], components:[websitebutton] });
    }

};