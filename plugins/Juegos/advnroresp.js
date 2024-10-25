import db from '../../lib/database.js'

let handler = m => m

handler.before = async function (m, { conn }) {
    if (m.isBaileys && m.fromMe)
        return !0
    let user = global.db.data.users[m.sender]
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.text || !/^\𝗔𝗗𝗜𝗩𝗜𝗡𝗔 𝗘𝗟 𝗡𝗨́𝗠𝗘𝗥𝗢 /i.test(m.quoted.text)) return !0
    this.advnro = this.advnro ? this.advnro : {}
    if (m.text == this.advnro[id].number) {
      m.reply(`✅ 𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗢, 𝗘𝗥𝗘𝗦 𝗨𝗡 𝗚𝗘𝗡𝗜𝗢!\n\t+${this.advnro[id].bonus} Exp`)
      user.exp += this.advnro[id].bonus * 1
      clearTimeout(this.advnro[id].time)
      delete this.advnro[id]
    } else {
      this.advnro[id].opp -= 1
      if (this.advnro[id].opp == 0) {
        m.reply(`❌ 𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗢, 𝗦𝗜𝗚𝗨𝗘 𝗣𝗔𝗥𝗧𝗜𝗖𝗜𝗣𝗔𝗡𝗗𝗢.\n\ 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔: ${this.advnro[id].number}`)
        clearTimeout(this.advnro[id].time)
        delete this.advnro[id]
    } else m.reply(`Respuesta incorrecta, quedan ${this.advnro[id].opp} oportunidades`)
    }
    return !0
}

export default handler
