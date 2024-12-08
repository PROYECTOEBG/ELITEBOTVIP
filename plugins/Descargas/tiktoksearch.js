import axios from 'axios'
const {proto, generateWAMessageFromContent, prepareWAMessageMedia, generateWAMessageContent, getDevice} = (await import("@whiskeysockets/baileys")).default

let handler = async (message, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(message.chat, '⭐ 𝘐𝘯𝘨𝘳𝘦𝘴𝘢 𝘦𝘭 𝘵𝘪́𝘵𝘶𝘭𝘰 𝘥𝘦𝘭 𝘷𝘪𝘥𝘦𝘰 𝘥𝘦 𝘵𝘪𝘬𝘵𝘰𝘬.\n\n» 𝘌𝘫𝘦𝘮𝘱𝘭𝘰:\n.buscartiktok Musicas sad', message)
async function createVideoMessage(url) {
const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: conn.waUploadToServer })
return videoMessage
}
async function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]]
}
}
try {
  
await message.react('🕓')
conn.reply(message.chat, '⚡ Enviando resultados...', message)
           
/*contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})*/
let results = []
let { data: response } = await axios.get('https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=' + text)
let searchResults = response.data
shuffleArray(searchResults)
let selectedResults = searchResults.splice(0, 7)
for (let result of selectedResults) {
results.push({
body: proto.Message.InteractiveMessage.Body.fromObject({ text: null }),
footer: proto.Message.InteractiveMessage.Footer.fromObject({text:dev}),
header: proto.Message.InteractiveMessage.Header.fromObject({
title: '' + result.title,
hasMediaAttachment: true,
videoMessage: await createVideoMessage(result.nowm)
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })})}
const responseMessage = generateWAMessageFromContent(message.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.create({ text: '✅ Resultado de:\n' + text }),
footer: proto.Message.InteractiveMessage.Footer.create({ text: '' }),
header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...results] })})}}
}, { quoted: message })
await message.react('✅')
await conn.relayMessage(message.chat, responseMessage.message, { messageId: responseMessage.key.id })
} catch (error) {
await conn.reply(message.chat, error.toString(), message)
}}

handler.help = ['tiktoksearch <txt>']

handler.tags = ['buscador']
handler.command = ['tiktoksearch', 'buscartiktok','Videostitok','tiktokbuscar']
export default handler
