// Función creada por Katashi Fukushima. Está a libre edición de videos para el envío del saludo

let handler = async (m, { conn, usedPrefix, command}) => {
let pp = ['https://qu.ax/AAxzk.mp4', 'https://qu.ax/YElOm.mp4','https://qu.ax/ULbUn.mp4','https://qu.ax/NyAZv.mp4']

let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '» *Etiqueta al usuario que quieres saludar.*\nEjemplo:\n.saludar @kevin'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: pp.getRandom() }, gifPlayback: true, caption: `_*${name}*_` + ' 𝘦𝘴𝘵𝘢 𝘴𝘢𝘭𝘶𝘥𝘢𝘯𝘥𝘰 𝘢' + ` _*${name2}*_` + ' 👋🏻\n©𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭 -', contextInfo: fakeChannel }, { quoted: m })
}
handler.help = ['saludar <@user>']
handler.tags = ['fun']
handler.command = ['saludar', 'hola']
export default handler
