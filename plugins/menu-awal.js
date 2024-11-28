
let handler = async (m, { conn, usedPrefix, __dirname, args, command, text}) => {
let reza = `hay ${m.name} 👋

simple aja 😂

.setppbot 
*(untuk merubah pp anda menjadi panjang, jadi bot dulu sebelum setpp)*

.setppgc 
*(sama seperti setppbot tapi ini set pp gc bukan pp bot)*

.jadibot 
*(untuk jadibot)*

.stopjadibot 
*(untuk berhenti jadibot)*

.listjadibot 
*(untuk melihat list jadibot)*

.tourl 
*(untuk menggubah image menjadi link)*

.s 
*(untuk membuat sticker)*

.upch
*(meng upload media ke channel whatsapp)*`
await conn.sendMessage(m.chat, {
    text: style(reza),
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: hwaifu.getRandom(),
                        sourceUrl: yt,
            mediaType: 1,
            renderLargerThumbnail: true
        },
    forwardedNewsletterMessageInfo: {
        newsletterJid: info.channel,
        serverMessageId: 103,
        newsletterName: wm,
    }
}
}, { quoted: frez});
}
handler.command = /^(menu|help)$/i
export default handler
