// Función creada por Katashi Fukushima. Está a libre edición de videos para el envío del saludo

let handler = async (m, { conn, usedPrefix, command}) => {
let pp = ['https://qu.ax/tMxCp.mp4','https://qu.ax/gycRR.mp4','https://qu.ax/lthZa.mp4','https://qu.ax/fABGe.mp4']

let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '» *Etiqueta al usuario con el que quieres cenar*\nEjemplo:\n.cenar @kevin'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: pp.getRandom() }, gifPlayback: true, caption: `_*${name}*_` + ' 𝘵𝘪𝘦𝘯𝘦 𝘶𝘯𝘢 𝘤𝘦𝘯𝘢 𝘳𝘰𝘮𝘢𝘯𝘵𝘪𝘤𝘢 𝘤𝘰𝘯' + ` _*${name2}*_` + ' 🥙\n©𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭 -', contextInfo: fakeChannel }, { quoted: m })
}
handler.help = ['cenar <@user>']
handler.tags = ['fun']
handler.command = ['cenar']
export default handler



