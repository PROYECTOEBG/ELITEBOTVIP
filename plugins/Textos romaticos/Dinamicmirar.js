let handler = async (m, { conn, usedPrefix, command}) => {
let pp = ['https://qu.ax/FloMP.mp4','https://qu.ax/nSRym.mp4','https://qu.ax/uHLKG.mp4','https://qu.ax/OhYHs.mp4']

let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '» *Etiqueta al usuario con el que quieres mirar las estrellas.*\nEjemplo:\n.mirar @kevin'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: pp.getRandom() }, gifPlayback: true, caption: `_*${name}*_` + ' 𝘦𝘴𝘵𝘢 𝘮𝘪𝘳𝘢𝘯𝘥𝘰 𝘭𝘢𝘴 𝘦𝘴𝘵𝘳𝘦𝘭𝘭𝘢𝘴 𝘤𝘰𝘯' + ` _*${name2}*_` + ' 🌃🌙\n©𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭 -', contextInfo: fakeChannel }, { quoted: m })
}
handler.help = ['mirar <@user>']
handler.tags = ['fun']
handler.command = ['mirar']
export default handler






