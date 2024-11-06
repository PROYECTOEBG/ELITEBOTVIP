let WAMessageStubType = (await import(global.baileys)).default
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
import './_content.js'

let handler = m => m
handler.before = async function (m, { conn, participants, groupMetadata}) {

if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let chat = global.db.data.chats[m.chat]
let users = participants.map(u => conn.decodeJid(u.id))
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
/*if (chat.detect && m.messageStubType == 2) {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './GataBotSession/';
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
console.log(`⚠️ Eliminacion session (PreKey) que provocan el undefined el chat`)}}}*/
if (chat.detect && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: lenguajeGB['smsAvisoAG']() + mid.smsAutodetec1(usuario, m), mentions: [m.sender], mentions: [...groupAdmins.map(v => v.id)] }, { quoted: fkontak })   
} else if (chat.detect && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec2(usuario, groupMetadata), mentions: [m.sender] }, { quoted: fkontak })  
} else if (chat.detect && m.messageStubType == 23) {
await this.sendMessage(m.chat, { text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec5(groupMetadata, usuario), mentions: [m.sender] }, { quoted: fkontak }) 
} else if (chat.detect && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec3(usuario, m), mentions: [m.sender] }, { quoted: fkontak }) 
} else if (chat.detect && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec4(usuario, m, groupMetadata), mentions: [m.sender] }, { quoted: fkontak })

//------------------
} else if (chat.detect && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text:`${m.messageStubParameters[0] == 'on' ? '❱❱ 𝙂𝙍𝙐𝙋𝙊 𝘾𝙀𝙍𝙍𝘼𝘿𝙊 ❰❰' : '❱❱ 𝙂𝙍𝙐𝙋𝙊 𝘼𝘽𝙄𝙀𝙍𝙏𝙊 ❰❰'}\n\n ${m.messageStubParameters[0] == 'on' ? '» 𝙄𝙉𝙃𝘼𝘽𝙄𝙇𝙄𝙏𝘼𝘿𝙊 𝙋𝙊𝙍:'  : '» 𝙃𝘼𝘽𝙄𝙇𝙄𝙏𝘼𝘿𝙊 𝙋𝙊𝙍:'} *${m.messageStubParameters[0] == 'on' ? 'ㅤ' : 'ㅤ' }*\n 👤 *${usuario}*\n\n ${m.messageStubParameters[0] == 'on' ?'» 𝙉𝘼𝘿𝙄𝙀 𝙋𝙐𝙀𝘿𝙀 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊.' :'» 𝙏𝙊𝘿𝙊𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊.'}`, mentions: [m.sender] }, { quoted: fkontak })
//------------------

//------------------
} else if (chat.detect && m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `❱❱ 𝙁𝙀𝙇𝙄𝘾𝙄𝘿𝘼𝘿𝙀𝙎 ❰❰

👤 *@${m.messageStubParameters[0].split`@`[0]}* 
» 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉.\n\n» 𝘼𝘾𝘾𝙄𝙊́𝙉 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍: 
👤 *${usuario}*`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak }) 
//------------------
} else if (chat.detect && m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `❱❱ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 ❰❰

👤 *@${m.messageStubParameters[0].split`@`[0]}* 
» 𝙔𝘼 𝙉𝙊 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉.\n\n» 𝘼𝘾𝘾𝙄𝙊́𝙉 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍:
👤 *${usuario}*`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak }) 
//—-----------------



} else if (chat.detect && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec9(usuario, m), mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType === 172 && m.messageStubParameters.length > 0) {
const rawUser = m.messageStubParameters[0];
const users = rawUser.split('@')[0]; 
const prefijosProhibidos = ['91', '92', '222', '93', '265', '61', '62', '966', '229', '40', '49', '20', '963', '967', '234', '210', '212'];
const usersConPrefijo = users.startsWith('+') ? users : `+${users}`;

if (chat.antifake) {
if (prefijosProhibidos.some(prefijo => usersConPrefijo.startsWith(prefijo))) {
try {
await conn.groupRequestParticipantsUpdate(m.chat, [rawUser], 'reject');
console.log(`Solicitud de ingreso de ${usersConPrefijo} rechazada automáticamente por tener un prefijo prohibido.`);
} catch (error) {
console.error(`Error al rechazar la solicitud de ${usersConPrefijo}:`, error);
}} else {
try {
await conn.groupRequestParticipantsUpdate(m.chat, [rawUser], 'approve');
console.log(`Solicitud de ingreso de ${usersConPrefijo} aprobada automáticamente.`);
} catch (error) {
console.error(`Error al aprobar la solicitud de ${usersConPrefijo}:`, error);
}}} else {
try {
await conn.groupRequestParticipantsUpdate(m.chat, [rawUser], 'approve');
console.log(`Solicitud de ingreso de ${usersConPrefijo} aprobada automáticamente ya que #antifake está desactivado.`);
} catch (error) {
console.error(`Error al aprobar la solicitud de ${usersConPrefijo}:`, error);
}}
return;
} if (chat.detect && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec10(usuario, m), mentions: [m.sender] }, { quoted: fkontak })
} else {
//console.log({messageStubType: m.messageStubType,
//messageStubParameters: m.messageStubParameters,
//type: WAMessageStubType[m.messageStubType], 
//})
}}
export default handler
