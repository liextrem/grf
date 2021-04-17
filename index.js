var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Welcome To My Server(Giveaways And Activs )",
assets : {
large_image : "ack",
large_text : "Ack" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "YouTube" , url : "https://www.youtube.com/channel/UCnR_O5Upld3ZM5F3RflLq5Q"},{label : "Server",url : "https://discord.gg/hpQdQTzHXT"}]
}
})
})
client.login({ clientId : "832924417151467521" }).catch(console.error);