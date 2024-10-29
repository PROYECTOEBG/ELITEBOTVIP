var handler = async (m, {conn, groupMetadata }) => {

conn.reply(m.chat, `${await groupMetadata.id}`, fkontak, )

}
handler.help = ['idgc']
handler.tags = ['grupo']
handler.command = /^(cekid|idgrupo|id)$/i

handler.group = true

export default handler  
