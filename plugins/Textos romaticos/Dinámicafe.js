let handler = async (m, { conn, usedPrefix, command}) => {
let pp = ['https://qu.ax/RspuJ.mp4','https://qu.ax/ZHnMG.mp4','https://qu.ax/ZHnMG.mp4','https://qu.ax/RspuJ.mp4']

let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '» *Etiqueta al usuario con el que quieres tomarte un cafesito*\nEjemplo:\n.tomarcafe @kevin'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: pp.getRandom() }, gifPlayback: true, caption: `_*${name}*_` + ' 𝘦𝘴𝘵𝘢 𝘵𝘰𝘮𝘢́𝘯𝘥𝘰𝘴𝘦 𝘶𝘯 𝘤𝘢𝘧𝘦 𝘤𝘰𝘯' + ` _*${name2}*_` + ' ☕\n©𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭 -', contextInfo: fakeChannel }, { quoted: m })
}
handler.help = ['tomarcafe <@user>']
handler.tags = ['fun']
handler.command = ['tomarcafe']
export default handler




