const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');

//command starts here
module.exports = {
//create slash command with basic info
	data: new SlashCommandBuilder()
		.setName('aboutmsg')
		.setDescription('Sends the embed for the About Channel.'),

		
			
//this is where the command is executed.
	async execute(interaction) {
        const channel = interaction.guild.channels.cache.get("833709928316928111")
        const file = new MessageAttachment('https://i.imgur.com/GIP9MWs.png');
        const socialrow = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Website')
                .setStyle('LINK')
                .setURL('https://clanwarz.gg/'),
            new MessageButton()
                .setLabel('Twitter')
                .setStyle('LINK')
                .setURL('https://twitter.com/clanwarzgg'),
                new MessageButton()
                .setLabel('Instagram')
                .setStyle('LINK')
                .setURL('https://instagram.com/clanwarzgg'),
                new MessageButton()
                .setLabel('Twitch')
                .setStyle('LINK')
                .setURL('https://twitch.tv/clanwarzgg'),
                new MessageButton()
                .setLabel('Facebook')
                .setStyle('LINK')
                .setURL('https://facebook.com/clanwarzgg'),
        )
        const rmsg= new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('About Clan Warz')
        .addFields (
            { name: 'What is ClanWarz?', value: `ClanWarz was created by the gaming Company/Organization Militia Esports for competitive game play with a non-toxic environment for players to have fun!`, inline: false},
            { name: 'Our Website', value: `Our Website is the hub for our tournaments and leagues. This is where you can register, view stats and brackets, and more.`},
            { name: 'Tournaments', value: `Free entry tournaments usually consist of small prizes; while paid entry tournaments are for the more top tier prizes!`},
            { name: 'Leagues (Coming Soon)', value: `Leagues will consist of three different ranks/levels of gameplay. Red being top tier, Black being second, and Academic being third. Teams will have rosters consisting of similar player ranks so the game play is fair.`},
            
        )
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');

        channel.send({ files: [file] });
        channel.send({ embeds: [rmsg], components:[socialrow] });
    }

};