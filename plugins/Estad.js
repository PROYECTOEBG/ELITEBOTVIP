let handler = async (m, { conn, isRowner}) => {
let _muptime
let totalreg = Object.keys(global.db.data.users).length
let totalchats = Object.keys(global.db.data.chats).length
let pp = imagen6
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
const used = process.memoryUsage()
 const img = await(await fetch('https://chat.whatsapp.com/GzqYw7fK9CADEWEtfL6804')).buffer();
const _uptime = process.uptime() * 1000;
const uptime = clockString(_uptime);
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
let yaemori = `╭━━━━━━━━━━━━━━✠
┃  *» Hola, buen dia*
┃    ${taguser}
┃
┃ 〽️ Estoy activo desde: ${uptime}
┃  
╰━ 𝗘𝗹𝗶𝘁𝗲𝗕𝗼𝘁𝗚𝗹𝗼𝗯𝗮𝗹`
await conn.sendFile(m.chat, pp, 'yaemori.jpg', yaemori, fkontak, null)
}
handler.help = ['status']
handler.tags = ['info']
handler.command = ['std']
handler.register = false
export default handler;
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n┃ ❖ ` + d, ' Día(s) ', `\n┃ ❖ ` + h, ' Hora(s) ', `\n┃ ❖ ` + m, ' Minuto(s) ', `\n┃ ❖ ` + s, ' Segundo(s) '].map((v) => v.toString().padStart(2, 0)).join('');
}
