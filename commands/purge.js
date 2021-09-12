const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('Prune up to 99 messages.')
		.addIntegerOption(option => option.setName('amount').setDescription('Number of messages to prune')),
	async execute(interaction) {
		const member = interaction.member
		if (interaction.commandName === 'purge') {
			if (member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES, true)) {
				const amount = interaction.options.getInteger('amount');
		
				if (amount <= 1 || amount > 100) {
					return interaction.reply({ content: 'You need to input a number between 1 and 99.', ephemeral: true });
				}
				await interaction.channel.bulkDelete(amount, true).catch(error => {
					console.error(error);
					interaction.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });
				});
		
				return interaction.reply({ content: `Successfully pruned \`${amount}\` messages.`, ephemeral: true });
			}
			else if (member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES, false)) {
				interaction.reply('**Manage Messages Permission Required.**');
			} 
		}
	},
};

