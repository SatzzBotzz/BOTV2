const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': 'satganzdevs',
}

// Other
global.web = 'https://s.satganzdevs.repl.co'
global.thumb = { url : "https://zenzapis.xyz/randomimage/kucing?apikey=satganzdevs" }
global.owner = ['6281316701742']
global.premium = ["6281266891985","6281266082412","6282182518286","6282232780320","6281369266141"]
global.botname = 'Sad Bots'
global.ownername = 'ð¦ð®ðð´ð®ð»ð ðð²ðð'
global.packname = 'Sad Bot'
global.author = 'Satganz Devs'
global.sessionName = 'session'
global.prefa = ['','!','.','ð¦','ð¤','ð¿']
global.sp = 'â­'
global.ucapan = {
pagi: 'Good Morning',
siang: 'Good Afternoon',
sore: 'Good Evening',
malam: 'Good Night',
tmalam: 'Good Midnight'
}
global.mess = {
success: 'â Success',
admin: 'Group Admin Special Features! o(Â´^ï½)o',
botAdmin: 'Bots Should Be Admins First! Â¯_à² _à² _/Â¯ ',
owner: 'Special owner bot features! (ââ­â®â)',
group: 'Feature Used For Group Only! (Âº_Âº) ',
premium: 'Special Premium Users Features',
private: 'Features Used Only For Private Chatï¼Î©_Î©ï¼! ',
bot: 'Bot Number User Special Features ( ã»_ã»)ã ',
wait: 'Loading...',
endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours ',
}
global.limitawal = {
premium: "Infinity",
free: 10
}
global.visoka = 'https://a.uguu.se/QorFgDAm.mp4'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
