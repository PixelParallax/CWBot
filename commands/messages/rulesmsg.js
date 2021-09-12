const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');

//command starts here
module.exports = {
//create slash command with basic info
	data: new SlashCommandBuilder()
		.setName('rulesmsg')
		.setDescription('Sends the embed for the Rules Channel.'),

		
			
//this is where the command is executed.
	async execute(interaction) {
        const channel = interaction.guild.channels.cache.get("833485280035602443")
        const file = new MessageAttachment('https://i.imgur.com/53sfCGX.png');
        const rulebutton = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Tournament Rules')
                .setStyle('LINK')
                .setURL('https://clanwarz.gg/rules'),
        )
        const rmsg= new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Discord Rules')
        .setDescription(`Clan Warz's primary goal and vision is to encompass every aspect of gaming for its members. We want a toxicity free, mature and fun way of gaming together without worrying about the bad stuff. We need to make rules, as it is the only way of keeping gamers safe and surround sound (get it?). We have zero-tolerance for all the rules stipulated below.`)
        .addFields (
            { name: 'Rule 1:', value: `Be cool, kind, and civil. Treat all members with respect.`, inline: false},
            { name: 'Rule 2:', value: `Use English only. Communicate in English, but be considerate of all languages.`},
            { name: 'Rule 3:', value: `Use an appropriate name and avatar. Avoid special characters, emoji, obscenities, and impersonation.`},
            { name: 'Rule 4:', value: `Do not spam. Avoid excessive messages, images, formatting, emoji, commands, and @mentions.`},
            { name: 'Rule 5:', value: `No racist, sexist, anti-LGBTQ+, or otherwise offensive content.`},
            { name: 'Rule 6:', value: `No self-promotion or advertisements (Except for official Militia's content creators). This includes unsolicited references and links to other social media, servers, communities, and services in chat or direct messages.`},
            { name: 'Rule 7:', value: `No personal information. Protect your privacy and the privacy of others.`},
            { name: 'Rule 8:', value: `No harassment, abuse, or bullying.`},
            { name: 'Rule 9:', value: `No catfishing! No fraudulent claims about ones identity.`},
            { name: 'Rule 10:', value: `No piracy, sexual, NSFW, or otherwise suspicious content. We do not condone illegal or suspicious discussions and activity.`},
            { name: 'Rule 11:', value: `No self-promotion or advertisements (Except for official Militia's content creators). This includes unsolicited references and links to other social media, servers, communities, and services in chat or direct messages.`},
            { name: 'Rule 12:', value: `Rules are subject to common sense. There are no loopholes, thus we may still take action if something you do is not explicitly in the rules, or if it's in a gray area.`},
            { name: 'Rule 13:', value: `Discord Terms of Service and Community Guidelines apply. You must be at least 13 years old to use Discord, and abide by all other terms and guidelines.`},
        )
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');

        channel.send({ files: [file] });
        channel.send({ embeds: [rmsg], components:[rulebutton] });
    }

};