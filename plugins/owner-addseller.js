let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  hl[0] = text.split(' ')[0]
  hl[0] = no(hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split(' ')[1]
  
  if (!text) return conn.reply(m.chat, `*『 F A I L E D 』*\n\n• ${usedPrefix}addseller @tag/nomor|days\n*Example:* ${usedPrefix}addseler 6281283516246 60`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna Belum Masuk DataBase'
  var jumlahHari = 86400000 * hl[1]
  // var jumlahHari = 1000 * text
  var now = new Date() * 1
  db.data.users[hl[0]].seller = true
  if (now < db.data.users[hl[0]].sellerTime) db.data.users[hl[0]].sellerTime += jumlahHari
  else db.data.users[hl[0]].sellerTime = now + jumlahHari
  conn.reply(m.chat,`*『 S U K S E S 』*\n\nBerhasil menambahkan akses seller panel kepada *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.`,m,{ contextInfo: { mentionedJid: [hl[0]] } })
  conn.reply(hl[0],`*『 I N F O  S E L E R 』*\n\nKamu berhasil menambahkan akses seller panel selama *${hl[1]} hari*.`,m,{ contextInfo: { mentionedJid: [hl[0]] } }) 

}
handler.help = ['addseller *@tag|days*']
handler.tags = ['owner']
handler.command = /^(addseller|seller)$/i
handler.rowner = true
handler.fail = null
export default handler
