import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (db.data.chats[m.chat].stickers) {
 
let nombre = 'EliteBotGlobal'
let nombre2 = ''
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(3 * 3000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: gt, body: `乂 𝙰𝚍𝚒𝚘́𝚜 𝙱𝚊𝚜𝚞𝚛𝚊 乂`, mediaType: 2, sourceUrl: accountsgb, thumbnail: gataImg }}}, { quoted: m })
}}
handler.customPrefix = /𝑬𝑺𝑪𝑼𝑷𝑨𝑵𝑳𝑬|yorar|llorando|llorando|llorare|llorará|lloremos|llorastes|lloraste/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const s = [
'https://media1.giphy.com/media/3fmRTfVIKMRiM/giphy.gif?cid=ecf05e47pyhfy4u8g5l7ij4rw7g0t3p46n7316kciee0ozt7&rid=giphy.gif&ct=g',
'https://media1.giphy.com/media/3fmRTfVIKMRiM/giphy.gif?cid=ecf05e47pyhfy4u8g5l7ij4rw7g0t3p46n7316kciee0ozt7&rid=giphy.gif&ct=g',
'https://media1.giphy.com/media/3fmRTfVIKMRiM/giphy.gif?cid=ecf05e47pyhfy4u8g5l7ij4rw7g0t3p46n7316kciee0ozt7&rid=giphy.gif&ct=g',
'https://media1.giphy.com/media/3fmRTfVIKMRiM/giphy.gif?cid=ecf05e47pyhfy4u8g5l7ij4rw7g0t3p46n7316kciee0ozt7&rid=giphy.gif&ct=g',
'https://media1.giphy.com/media/3fmRTfVIKMRiM/giphy.gif?cid=ecf05e47pyhfy4u8g5l7ij4rw7g0t3p46n7316kciee0ozt7&rid=giphy.gif&ct=g',
'https://media1.giphy.com/media/3fmRTfVIKMRiM/giphy.gif?cid=ecf05e47pyhfy4u8g5l7ij4rw7g0t3p46n7316kciee0ozt7&rid=giphy.gif&ct=g',
'https://media1.giphy.com/media/3fmRTfVIKMRiM/giphy.gif?cid=ecf05e47pyhfy4u8g5l7ij4rw7g0t3p46n7316kciee0ozt7&rid=giphy.gif&ct=g'
];  
