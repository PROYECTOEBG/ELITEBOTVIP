const handler = async (m, {conn, isAdmin}) => {
  const chats = Object.entries(global.db.data.chats).filter((chat) => chat[1].ismuto);
  const users = Object.entries(global.db.data.users).filter((user) => user[1].muto);
  const caption = `
┌ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗠𝗨𝗧𝗘𝗔𝗗𝗢𝗦 🔇
├ 𝗧𝗢𝗧𝗔𝗟 : ${users.length} ${users ? '\n' + users.map(([jid], i) => `
├ ${isAdmin ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '├'}
└────
`.trim();
  m.reply(caption, null, {mentions: conn.parseMention(caption)});
};
handler.command = /^mutelist(ned)?|mute(ed)?list|listmute?$/i;
handler.admin = true;
export default handler;
