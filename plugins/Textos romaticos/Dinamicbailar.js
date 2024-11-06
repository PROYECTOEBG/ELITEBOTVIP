// Función creada por Katashi Fukushima. Está a libre edición de videos para el envío del saludo

let handler = async (m, { conn, usedPrefix, command}) => {
let pp = ['https://qu.ax/KPhoW.mp4','https://qu.ax/defbW.mp4','https://qu.ax/BaLJo.mp4','https://qu.ax/BXYqQ.mp4']

let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '» *Etiqueta al usuario con el que quieres bailar.*\nEjemplo:\n.bailar @kevin'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: pp.getRandom() }, gifPlayback: true, caption: `_*${name}*_` + ' 𝘌𝘴𝘵𝘢 𝘣𝘢𝘪𝘭𝘢𝘯𝘥𝘰 𝘤𝘰𝘯' + ` _*${name2}*_` + ' 💃🏻🕺🏻\n©𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭 -', contextInfo: fakeChannel }, { quoted: m })
}
handler.help = ['bailar <@user>']
handler.tags = ['fun']
handler.command = ['bailar']
export default handler
