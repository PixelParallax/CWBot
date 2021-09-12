//importing needed features.
const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');

//command starts here
module.exports = {
//create slash command with basic info
	data: new SlashCommandBuilder()
		.setName('register')
		.setDescription('STAFF ONLY: Tool to create Team Embeds.')
		.addStringOption(option => 
			option
			.setName('event')
			.setRequired(true)
			.setDescription('Enter which tourney you want to register.')
        )
        .addStringOption(option => 
            option
            .setName('team-name')
            .setRequired(true)
            .setDescription("Enter your teams name for the event.")      
        )
        .addStringOption(option => 
            option
            .setName('logo-link')
            .setRequired(true)
            .setDescription("Enter a link to your team's logo. MUST BE A VALID LINK TO IMAGE.")  
        )
        .addStringOption(option => 
            option
            .setName('team-roster')
            .setRequired(true)
            .setDescription("@ your teams roster for the event.")      
        )
        .addStringOption(option => 
            option
            .setName('twitter-link')
            .setRequired(true)
            .setDescription("Enter you or your teams twitter link.")      
        )
        .addStringOption(option => 
            option
            .setName('insta-link')
            .setRequired(true)
            .setDescription("Enter you or your teams instagram link.")      
        )
        .addStringOption(option => 
            option
            .setName('twitch-link')
            .setRequired(true)
            .setDescription("Enter you or your teams twitch link.")      
        ),
        

		
			
//this is where the command is executed.
	async execute(interaction) {

//all of the emebds are premade responces to questions.
    const event = interaction.options.getString('event')
    const rgteamname = interaction.options.getString('team-name');
    const rgroster = interaction.options.getString('team-roster');
    const rglogolink= interaction.options.getString('logo-link');
    const rgtwitter = interaction.options.getString('twitter-link');
    const rginsta = interaction.options.getString('insta-link');
    const rgtwitch = interaction.options.getString('twitch-link');

    const regchannel = interaction.guild.channels.cache.get("833708080520626226")
    const member = interaction.member

 const registerembed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`Team Registered for ${event}.`)
        .addFields (
            { name: 'Team Name:', value: `${rgteamname}`, inline: false},
            { name: 'Team Roster:', value: `${rgroster}`, inline: false},
        )
        .addFields (
            { name: 'Twitter:', value: `${rgtwitter}`, inline: true},
            { name: 'Instagram:', value: `${rginsta}`, inline: true},
            { name: 'Twitch:', value: `${rgtwitch}`, inline: true},
        )
        .setThumbnail(`${rglogolink}`)
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');
       
        if (interaction.commandName === 'register') {
            if (member.permissions.has(Permissions.FLAGS.MANAGE_ROLES, true)) {
                regchannel.send({ embeds: [registerembed] })
                interaction.reply('**Success!**')
            }
            else if (member.permissions.has(Permissions.FLAGS.MANAGE_ROLES, false)) {
                interaction.reply('**Manage Roles Permission Required.**');
            } 
        }
	},
};