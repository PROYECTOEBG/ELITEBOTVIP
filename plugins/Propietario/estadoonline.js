/*const handler = async (m, {conn}) => {
  try {
    const pp = imagen7;
    const img = await(await fetch('https://whatsapp.com/channel/0029Vatsbep84OmF6dDXpm1s')).buffer();
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `╭━━━━━━━━━━━━━━✠
┃  *» Buen día mi creador*
┃    *${taguser}*
┃
┃ 〽️ Estoy activo desde: ${uptime}
┃  
╰━ 𝗘𝗹𝗶𝘁𝗲𝗕𝗼𝘁𝗚𝗹𝗼𝗯𝗮𝗹`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://www.atom.bio/theshadowbrokers-team`, "sourceUrl": `https://whatsapp.com/channel/0029Vatsbep84OmF6dDXpm1s`}}}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://www.atom.bio/theshadowbrokers-team`, "sourceUrl": `https://whatsapp.com/channel/0029Vatsbep84OmF6dDXpm1s`}}}, {quoted: fkontak2});
    }
  } catch {
  }
};
handler.customPrefix = /estado|estatus/i 
handler.command = new RegExp
handler.exp = 0
handler.owner = true

export default handler;
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n┃ ❖ ` + d, ' Día(s) ', `\n┃ ❖ ` + h, ' Hora(s) ', `\n┃ ❖ ` + m, ' Minuto(s) ', `\n┃ ❖ ` + s, ' Segundo(s) '].map((v) => v.toString().padStart(2, 0)).join('');
}
*/