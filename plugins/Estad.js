const handler = async (m, {conn}) => {
  try {
    const pp = imagen6;
    
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
