let handler = async (m, { conn, usedPrefix, command}) => {
let pp = ['https://qu.ax/GXNSn.mp4','https://qu.ax/afkcX.mp4','https://qu.ax/Wbqlr.mp4','https://qu.ax/Wbqlr.mp4']

let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '» *Etiqueta al usuario que le quieres dar un chocolate*\nEjemplo:\n.darchocolate @kevin'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: pp.getRandom() }, gifPlayback: true, caption: `_*${name}*_` + ' 𝘭𝘦 𝘥𝘪𝘰 𝘶𝘯 𝘤𝘩𝘰𝘤𝘰𝘭𝘢𝘵𝘦 𝘢' + ` _*${name2}*_` + ' 🍫🍩\n©𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭 -', contextInfo: fakeChannel }, { quoted: m })
}
handler.help = ['darchocolate <@user>']
handler.tags = ['fun']
handler.command = ['darchocolate']
export default handler
