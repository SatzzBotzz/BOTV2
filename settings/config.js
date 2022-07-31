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

//gw benci apikey, maka dari itu gwejh bikin ini.
global.gambar =[
"https://telegra.ph/file/74a73f50e97b2c29a1915.jpg",
"https://telegra.ph/file/a4250101c9059351b4c2a.jpg",
"https://telegra.ph/file/edcde3b17573c0b4ad8b1.jpg",
"https://telegra.ph/file/be50ada7f42556ecf9b62.jpg",
"https://telegra.ph/file/207c47dc216620473867f.jpg",
"https://telegra.ph/file/d4b79d46fde189a209e26.jpg",
"https://telegra.ph/file/33b46f8df0fe399909ec5.jpg",
"https://telegra.ph/file/74e4a4985333f2200cd13.jpg",
"https://telegra.ph/file/a3091ce936d62ea76777f.jpg",
"https://telegra.ph/file/a4d8267969c17fbda65b2.jpg",
"https://telegra.ph/file/592cdbee867e1071b3470.jpg",
"https://telegra.ph/file/52cff7d080473d41e4f31.jpg",
"https://telegra.ph/file/73030742eebd3a081beac.jpg",
"https://telegra.ph/file/adf8660e77ee40ad3afc6.jpg",
"https://telegra.ph/file/6dcf0f3aacefec6ebcf1a.jpg",
"https://telegra.ph/file/6260249b574a96b70c529.jpg",
"https://telegra.ph/file/6b1cf58706f891603d311.jpg",
"https://telegra.ph/file/e6c0aa8328cc20275fac1.jpg",
"https://telegra.ph/file/965d1d547b813b9c3caa0.jpg",
"https://telegra.ph/file/20275fad1c2550d620c42.jpg",
"https://telegra.ph/file/d4b79d46fde189a209e26.jpg",
"https://telegra.ph/file/e3b245089226158cfe311.jpg",
"https://telegra.ph/file/73fea62cd1ecfa36ef000.jpg",
"https://telegra.ph/file/86964a140cd68d898a474.jpg",
"https://telegra.ph/file/b20f6ebaffb8a5ee3ee50.jpg",
"https://telegra.ph/file/105175e45624e34c5d2b6.jpg",
"https://telegra.ph/file/56cd28524bc2cc7bb27a6.jpg",
"https://telegra.ph/file/ed674135fed56a1b88290.jpg"]

// Other
global.web = 'https://s.satganzdevs.repl.co'
global.owner = ['6281316701742']
global.premium = ["6281266891985","6281266082412"]
global.botname = 'Sad Bots'
global.ownername = '𝗦𝗮𝘁𝗴𝗮𝗻𝘇 𝗗𝗲𝘃𝘀'
global.packname = 'Sad Bot'
global.author = 'Satganz Devs'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
success: '✓ Success',
admin: 'Group Admin Special Features! o(´^｀)o',
botAdmin: 'Bots Should Be Admins First! ¯_ಠ_ಠ_/¯ ',
owner: 'Special owner bot features! (✖╭╮✖)',
group: 'Feature Used For Group Only! (º_º) ',
private: 'Features Used Only For Private Chat（Ω_Ω）! ',
bot: 'Bot Number User Special Features ( ・_・)ノ ',
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
