//importing needed features.
const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

//command starts here
module.exports = {
//create slash command with basic info
	data: new SlashCommandBuilder()
		.setName('register')
		.setDescription('Register for a tournament.')
		.addStringOption(option => 
			option
			.setName('event')
			.setRequired(true)
			.setDescription('Select which tourney you want to register.')
			.addChoices([
				['Splitgate 3v3 Tourney', 'Splitgate 3v3 Tourney']
		    ])
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
            .setName('email')
            .setRequired(true)
            .setDescription("Enter your Email Address.")      
        )
        .addStringOption(option => 
            option
            .setName('payout-info')
            .setRequired(true)
            .setDescription("Enter your payout information.")      
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
        )    
        .addStringOption(option => 
            option
            .setName('notes')
            .setRequired(true)
            .setDescription("Please add any additional notes you have. If none write none.")      
        ),
		
			
//this is where the command is executed.
	async execute(interaction) {

//all of the emebds are premade responces to questions.
    const event = interaction.options.getString('event')
    const rgteamname = interaction.options.getString('team-name');
    const rgroster = interaction.options.getString('team-roster');
    const rglogolink= interaction.options.getString('logo-link');
    const rgemail = interaction.options.getString('email');
    const rgpayoutinfo = interaction.options.getString('payout-info');
    const rgtwitter = interaction.options.getString('twitter-link');
    const rginsta = interaction.options.getString('insta-link');
    const rgtwitch = interaction.options.getString('twitch-link');
    const rgnotes = interaction.options.getString('notes'); 

    module.exports = { event, rgteamname, rgroster, rglogolink, rgemail, rgpayoutinfo, rgtwitter, rginsta, rgtwitch, rgnotes };

const regrow = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setCustomId('submitreg')
        .setLabel('Submit Registration')
        .setStyle('SUCCESS')
        .setDisabled(false),
    )

 const reminder = new MessageEmbed()
    .setColor('#6200FF')
    .setTitle('If any of this info is incorrect please retype the command.')

 const registerembed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`Team Registered for ${event}.`)
        .addFields (
            { name: 'Team Name:', value: `${rgteamname}`, inline: false},
            { name: 'Team Roster:', value: `${rgroster}`, inline: false},
            { name: 'Email:', value: `${rgemail}`, inline: true},
            { name: 'Payout Info:', value: `${rgpayoutinfo}`, inline: true},
            { name: 'Logo Link:', value: `${rglogolink}`, inline: false},
        )
        .addFields (
            { name: 'Twitter:', value: `${rgtwitter}`, inline: true},
            { name: 'Instagram:', value: `${rginsta}`, inline: true},
            { name: 'Twitch:', value: `${rgtwitch}`, inline: true},
            { name: 'Additional Notes:', value: `${rgnotes}`, inline: false},
        )
        .setFooter('Clan Warz Info', 'https://i.imgur.com/AfFp7pu.png');
        

            await interaction.reply({ ephemeral: true, embeds: [registerembed, reminder], components: [regrow] });
		}
	};