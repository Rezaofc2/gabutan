let handler  = async (m, { conn, text, usedPrefix }) => {
  function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d+" Hari "+h+" Jam "+ m + " Menit"].map(v => v.toString().padStart(2, 0)).join('')
}
let pp = await conn
    .profilePictureUrl(m.sender, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
	let users = global.db.data.users
	let { registered, name } = global.db.data.users[m.sender]

  var text = "•  SELLER PANEL";
  var i = 1
  for (let jid in users){
    if (users[jid].seller){
      text += `\n\n${i}. ${conn.getName(jid)}\n▢ *TAG :* @${jid.replace(/@.+/, '')}\n▢ *EXP :* ${clockString (global.db.data.users[jid].sellerTime - new Date() * 1)}`
      i += 1
    }
  }
  text += `\n\n◦   Total Seller : *${i-1}*\n`;
	text += `Mau beli? Silahkan hubungi: *@${nomerown}* :)`;

  return conn.reply(m.chat, text, m, { contextInfo: { mentionedJid: conn.parseMention(text),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}
handler.help = ["listseller"]
handler.command = ['listseller']
handler.tags = ['owner']
handler.rowner = true
export default handler