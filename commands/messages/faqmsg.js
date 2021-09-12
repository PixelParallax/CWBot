const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');

//command starts here
module.exports = {
//create slash command with basic info
	data: new SlashCommandBuilder()
		.setName('faqmsg')
		.setDescription('Sends the embed for the FAQ Channel.'),

		
			
//this is where the command is executed.
	async execute(interaction) {
        const channel = interaction.guild.channels.cache.get("833709887975587860")
        const file = new MessageAttachment('https://i.imgur.com/rd0jvb2.png');
        const faqbutton = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Website FAQ')
                .setStyle('LINK')
                .setURL('https://clanwarz.gg/faq'),

        )
        const General = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('General Questions')
        .addFields (
            { name: 'What is ClanWarz?', value: `ClanWarz was created by the gaming Company/Organization Militia Esports for competitive game play with a non-toxic environment for players to have fun!`, inline: false},
            { name: 'Is Militia a part of ClanWarz?', value: `Yes, Militia is a parent company of ClanWarz.`},
            { name: 'Can you join the Militia Esports through ClanWarz?', value: `Not directly, but if you are interested please feel free to ask staff and we can help you out with an application!`, inline: false},
            { name: 'How do you join the ClanWarz Staff position?', value: `First, there will usually be positioning openings displayed in the discord/website. Then when you want to join a part of the staff you will have to fill out an application. That application will go through our evaluating team and upper management and then they will decide if you meet the requirements.`, inline: false},
            { name: 'What time zone is this Discord server in?', value: 'EDT / New York (UTC -4)'},
            { name: 'Can a solo find a team inside ClanWarz?', value: 'We have LFG Channels where you can try to find a team, however you aren’t guaranteed to find a team.', inline: false},
            { name: 'Who is the Owner of the server?', value: 'As Clan Warz is a subsidiary company of Militia which means the owners of Militia are the owners of Clan Warz. However Clan Warz is run by a separate staff team.', inline: false},
        )
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');
        
        const Tournament = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Tournament Questions')
        .addFields (
            { name: 'How do you, take part in tournament?/scrims', value: `You can look at our upcoming tournaments on our website. You can also register there, please visit #registration in the discord for more.`, inline: false},
            { name: 'What games will be supported?', value: `There are four games that will be coming to Clan Warz: Splitgate, COD Warzone, COD Vanguard, and Rocket League.`, inline: false},
            { name: 'How many tournaments per week?', value: `For right now there is only 1 tournament per week. Once we get more settled in and comfortable we will start adding more tournaments. Possibly even 2-3 a week!`, inline: false},
            { name: 'Are the rules for the game always going to be the same?', value: `No, each game and tournament will have their own set of rules. Although ClanWarz rules will always apply for each tournament, league and also in the server.`, inline: false},
            { name: 'Will the tournaments be free or paid?', value: 'Both! There are free-entry and paid-entry tournaments. Free-entry will consist of small prizes, while the paid-entry tournaments will consist of large prize pools and top tier prizes.', inline: false},
        )
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');

        const CH = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Cheating and Hacking')
        .addFields (
            { name: 'What will happen if you cheat?', value: `If you are caught cheating in a tournament your team will be disqualified from the tournament. If cheating persists in the next tournament that player will be banned from clanwarz indefinitely.`, inline: false},
            { name: 'How do you report people who cheat?', value: `As of now please just message the appropriate staff member with evidence.`, inline: false},
        )
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');
        
        const PT = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Cheating and Hacking')
        .addFields (
            { name: 'Will we have to input personal information to join a scrim/tournament?', value: `Some personal information will have to be provided for us to be able to give you the prize in the event that you win the tourney. This personal information will never be shared with anyone.`, inline: false},
            { name: 'Is this a trusted site?', value: `Yes this is a trusted site. We do share any information you provide us, and all payments and fees are completed through 3rd party companies.`, inline: false},
        )
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png')

        const Prizes = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Prizes')
        .addFields (
            { name: 'How much is the prize pool/is top 3 get paid, top 5 etc?', value: `Some personal information will have to be provided for us to be able to give you the prize in the event that you win the tourney. This personal information will never be shared with anyone.`, inline: false},
            { name: 'How will the money be sent to the winner(s)?', value: `Money will be personally sent over by PayPal.`, inline: false},
        )
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png')

        channel.send({ files: [file] });
        channel.send({ embeds: [General, Tournament, CH, PT, Prizes], components:[faqbutton] });
    }

};
