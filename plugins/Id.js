var handler = async (m, {conn, groupMetadata }) => {

conn.reply(m.chat, `𝗘𝗹𝗶𝘁𝗲𝗕𝗼𝘁𝗚𝗹𝗼𝗯𝗮𝗹 \n\n𝗘𝗹 𝗜𝗗 𝗱𝗲 𝗲𝘀𝘁𝗲 𝗴𝗿𝘂𝗽𝗼 𝗲𝘀 :\n${await groupMetadata.id}`, fkontak, )

}
handler.help = ['idgc']
handler.tags = ['grupo']
handler.command = /^(cekid|idgrupo|id)$/i

handler.group = true

export default handler  
