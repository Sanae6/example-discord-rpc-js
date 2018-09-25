var rpc = require("discord-rpc");
var bot = new rpc.Client({transport:"ipc"});
var config = {
	clientId:"your client id here",
	clientSecret:"client secret too"
}
bot.on("ready",function(){
	bot.setActivity({
		details: "Editing yesterday's presentation \"footage\"",
		state: "Design Studies 10",
		largeImageKey: 'komachi',
		largeImageText: 'I wasted time on this',
		startTimestamp: new Date()
	}).catch((reason)=>console.error(reason));
})

bot.login().catch((reason)=>console.error(reason))