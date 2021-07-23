module.exports = {
	name: 'show',
	description: 'Fetches info about a show',
	execute(message, args) {
		message.channel.send(`Here's what I found for ${args}`);
		
	},
};