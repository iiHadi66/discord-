const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome");

var PrEfix = "$$";
client.on('message', message => {
  if (!message.content.startsWith(PrEfix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '481830370854043668') return;
if (message.content.startsWith(PrEfix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(PrEfix + 'ls')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 'pl')) {
client.user.setActivity(argresult, {type:'PLAYING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});



client.on('message', message => {
	if (message.author.bot) return;
	if (message.author.id == 224875948372262912) {
		if (message.content === 'مسح') {
			message.channel.fetchMessages().then(messages => messages.forEach(msg => msg.delete()));
		} else if (message.content.match(/\/clear \d+/)) {
			var limit = message.content.match(/\/clear (\d+)/)[1] + 1;
			message.channel.fetchMessages({limit: limit}).then(messages => messages.forEach(msg => msg.delete()));
		}
	} else {

	}
});












client.login(process.env.BOT_TOKEN);
