//importing needed features.
const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed, Permissions, MessageActionRow, MessageButton } = require('discord.js');

//command starts here
module.exports = {
//create slash command with basic info
	data: new SlashCommandBuilder()
		.setName('tourney')
		.setDescription('STAFF ONLY: Tool to create Tourney Posts.')
		.addStringOption(option => 
			option
			.setName('event-name')
			.setRequired(true)
			.setDescription('Enter the name of the event.')
        )
        .addStringOption(option => 
            option
            .setName('description')
            .setRequired(true)
            .setDescription("Enter your teams name for the event.")      
        )
        .addStringOption(option => 
            option
            .setName('game')
            .setRequired(true)
            .setDescription("Enter which game the tourney is for")  
        )
        .addStringOption(option => 
            option
            .setName('type')
            .setRequired(true)
            .setDescription("Enter the type of event.")      
        )
        .addStringOption(option => 
            option
            .setName('host')
            .setRequired(true)
            .setDescription("Enter the @ of whos running the event.")      
        )
        .addStringOption(option => 
            option
            .setName('banner-link')
            .setRequired(true)
            .setDescription("Enter a link to the banner of the event.")      
        )
        .addStringOption(option => 
            option
            .setName('registration-link')
            .setRequired(true)
            .setDescription("Enter a valid link to the registration page for the tourney.")      
        )
        .addStringOption(option => 
            option
            .setName('prize')
            .setRequired(true)
            .setDescription("Enter what the prize will be.")      
        )
        .addStringOption(option => 
            option
            .setName('date')
            .setRequired(true)
            .setDescription("Enter the date of the event.")      
        )

        .addStringOption(option => 
            option
            .setName('time')
            .setRequired(true)
            .setDescription("Enter the time of the event.")      
        ),
        

		
			
//this is where the command is executed.
	async execute(interaction) {

//all of the emebds are premade responces to questions.
    const event = interaction.options.getString('event-name')
    const date = interaction.options.getString('date');
    const time = interaction.options.getString('time');
    const banner = interaction.options.getString('banner-link');
    const host = interaction.options.getString('host');
    const type = interaction.options.getString('type');
    const game = interaction.options.getString('game');
    const desc = interaction.options.getString('description');
    const link = interaction.options.getString('registration-link')
    const prize = interaction.options.getString('prize')

    const regchannel = interaction.channel
    const member = interaction.member
    const registerbutton = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setLabel('Register Here')
            .setStyle('LINK')
            .setURL(`${link}`),
    )
 const eventembed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`${event}`)
        .setDescription(`${desc}`)
        .addFields (
            { name: 'Date:', value: `${date}`, inline: true},
            { name: 'Time:', value: `${time}`, inline: true},
            { name: 'Prize:', value: `${prize}`, inline: true},
        )
        .addFields (
            { name: 'Game:', value: `${game}`, inline: true},
            { name: 'Type:', value: `${type}`, inline: true},
            { name: 'Host:', value: `${host}`, inline: false},
        )
        .setImage(`${banner}`)
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');
    const successmsg = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`Success!`)
        .setDescription(`Post has been made!`)
        .setFooter('Clan Warz Info', 'https://i.imgur.com/WPiL1Ye.png');
       
        if (interaction.commandName === 'tourney') {
            if (member.permissions.has(Permissions.FLAGS.MANAGE_ROLES, true)) {
                regchannel.send({ embeds: [eventembed], components: [registerbutton] })
                interaction.reply({ ephemeral: true, embeds: [successmsg] })
            }
            else if (member.permissions.has(Permissions.FLAGS.MANAGE_ROLES, false)) {
                interaction.reply('**Manage Roles Permission Required.**');
            } 
        }
	},
};