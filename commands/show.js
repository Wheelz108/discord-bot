module.exports = {
	name: 'show',
	description: 'Fetches info about a show',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args.length) {
			message.channel.send(`Here's what I found for \`${args}\` `);
		}
	}
};