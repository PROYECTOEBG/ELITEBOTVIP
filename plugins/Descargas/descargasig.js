import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
if (!args[0]) return m.reply(`⚠️ 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 𝙇𝙄𝙉𝙆 𝘿𝙀 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙊 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈.
𝙀𝙟𝙚𝙢𝙥𝙡𝙤: .ig https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`)
    
try {
let api = await fetch(`https://deliriussapi-oficial.vercel.app/download/instagram?url=${args[0]}`)
let json = await api.json()
let { data } = json
let JT = data
for (let i = 0; i < JT.length; i++) {
let HFC = JT[i];
if (HFC.type === "image") {
await conn.sendMessage(m.chat, { image: { url: HFC.url } }, { quoted: m })
} else if (HFC.type === "video") {
await conn.sendMessage(m.chat, { video: { url: HFC.url } }, { quoted: m })
}}
} catch (error) {
console.error(error)
}}

handler.command = /^(igdl|ig|instagramdl|instagram)$/i

export default handler
