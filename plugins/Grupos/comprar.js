let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://qu.ax/SeOfc.jpg' 
let texto = `𝙀𝙡𝙞𝙩𝙚𝘽𝙤𝙩𝙂𝙡𝙤𝙗𝙖𝙡 -

Creado en el año 2023/07/15
𝘕𝘰𝘮𝘪𝘯𝘢𝘥𝘰 𝘤𝘰𝘮𝘰 𝘦𝘭 𝘮𝘦𝘫𝘰𝘳 𝘣𝘰𝘵 𝘥𝘦 𝘓𝘢𝘵𝘪𝘯𝘰𝘢𝘮𝘦́𝘳𝘪𝘤𝘢, 𝘫𝘶𝘯𝘵𝘰 𝘢 𝘱𝘳𝘰𝘺𝘦𝘤𝘵𝘰𝘟 . 🏆

〽️ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰𝘴 𝘢 𝘵𝘰𝘥@𝘴 𝘯𝘶𝘦𝘴𝘵𝘳𝘰𝘴 𝘯𝘶𝘦𝘷𝘰𝘴 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘲𝘶𝘦 𝘦𝘴𝘵𝘢́𝘯 𝘦𝘯 𝘣𝘶𝘴𝘤𝘢 𝘥𝘦 𝘯𝘶𝘦𝘴𝘵𝘳𝘰𝘴 𝘣𝘰𝘵𝘴 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘢𝘯 𝘥𝘪𝘴𝘧𝘳𝘶𝘵𝘢𝘳, 𝘴𝘰𝘤𝘪𝘢𝘭𝘪𝘻𝘢𝘳 𝘺 𝘤𝘰𝘯𝘵𝘳𝘪𝘣𝘶𝘪𝘳 𝘢𝘭 𝘤𝘳𝘦𝘤𝘪𝘮𝘪𝘦𝘯𝘵𝘰 𝘥𝘦 𝘦𝘴𝘵𝘦 𝘱𝘳𝘰𝘺𝘦𝘤𝘵𝘰, 𝘥𝘰́𝘯𝘥𝘦 𝘭𝘢 𝘧𝘦𝘭𝘪𝘤𝘪𝘥𝘢𝘥 𝘢𝘣𝘶𝘥𝘢. 🫶🏻

💌 𝘚𝘪́𝘨𝘶𝘦𝘯𝘰𝘴 𝘱𝘢𝘳𝘢 𝘥𝘦𝘴𝘤𝘶𝘣𝘳𝘪𝘳 𝘭𝘢𝘴 𝘶́𝘭𝘵𝘪𝘮𝘢𝘴 𝘯𝘰𝘷𝘦𝘥𝘢𝘥𝘦𝘴 𝘥𝘦 𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭 𝘺 𝘗𝘳𝘰𝘺𝘦𝘤𝘵𝘰𝘟 , 𝘦𝘹𝘱𝘭𝘰𝘳𝘦𝘮𝘰𝘴 𝘫𝘶𝘯𝘵𝘰𝘴 𝘦𝘯 𝘦𝘭 𝘮𝘶𝘯𝘥𝘰 𝘴𝘪𝘴𝘵𝘦𝘮𝘢́𝘵𝘪𝘤𝘰 𝘥𝘦 𝘭𝘰𝘴 𝘣𝘰𝘵𝘴

🔗 𝘾𝙖𝙣𝙖𝙡 :
» https://whatsapp.com/channel/0029Vatsbep84OmF6dDXpm1s
👤 𝘾𝙤𝙣𝙩𝙖́𝙘𝙩𝙖𝙢𝙚 𝙖 𝙢𝙞 𝙥𝙧𝙞𝙫𝙖𝙙𝙤:
» https://Wa.me/593993370003

 © 2023 EliteBotGlobal // ProyectoX`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.command = ['comprar'] 
handler.register = false 
export default handler
