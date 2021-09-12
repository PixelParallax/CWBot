const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const member = interaction.member
		if (interaction.commandName === 'avatar') {
			if (member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES, true)) {
				const user = interaction.options.getUser('target');
				if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
				return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
			}
			else if (member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES, false)) {
				interaction.reply('**Manage Messages Permission Required.**');
			} 
		}
	},
};

