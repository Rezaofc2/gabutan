let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  
  if (!text) return conn.reply(m.chat, `*『 F A I L E D 』*\n\n${usedPrefix}unseller @tag/nomor|days\n\n*Example:* ${usedPrefix}unseller 6289654360447|99`, m)
  text = no(text) + "@s.whatsapp.net"
  global.db.data.users[text].seller = false
  global.db.data.users[text].sellerTime = 0
  conn.reply(m.chat,`*Berhasil menghapus akses seller panel untuk @${text.split('@')[0]}.*`,m,{ contextInfo: { mentionedJid: [text] } })

}
handler.help = ['unseller']
handler.tags = ['owner']
handler.command = /^(unseller|delseller)$/i
handler.rowner = true
handler.fail = null
export default handler