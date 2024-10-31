import yts from 'yt-search';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, '_Ingresa el nombre de lo que quieres buscar_', m);

await m.react('🕓');
let res = await yts(text);
let play = res.videos[0];

if (!play) return conn.reply(m.chat, `No se encontraron resultados`, m)

let { title, thumbnail, ago, timestamp, views, videoId, url } = play;

let txt = `01:27 ━━━━━⬤──── ${timestamp
*⇄ㅤ   ◁   ㅤ  ❚❚ㅤ     ▷ㅤ   ↻*
𝙀𝙡𝙞𝙩𝙚 𝘽𝙤𝙩 𝙂𝙡𝙤𝙗𝙖𝙡`;

await conn.sendButton(m.chat, txt, author, thumbnail, [
['Audio', `${usedPrefix}ytmp3 ${url}`],
['Video', `${usedPrefix}ytmp4 ${url}`]
], null, [['Hosting', md]], m);
await m.react('✅')
}

handler.help = ['playy', 'play2']
handler.tags = ['dl'];
handler.command = ['play', 'play2']

export default handler;
