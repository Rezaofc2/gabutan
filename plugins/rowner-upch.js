import fs from 'fs'
import path from 'path'

let handler = async (m, { text, conn, usedPrefix, command }) => {
let namech = "Shuna Information"
let fotonya = "https://files.catbox.moe/flemrf.jpg"
let linkChannel = "120363184819569813@newsletter"
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || "";
          let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
          let name = `${global.db.data.users[m.sender].name == "" ? await conn.getName(m.sender) : global.db.data.users[m.sender].name}`

        if (!text && !m.quoted) throw `*• Example :* ${usedPrefix + command} *[caption]*`;

        let caption = text || "";
        let {
            key
        } = await conn.sendMessage(m.chat, {
            text: "Uploading..."
        }, {
            quoted: m
        });

        try {
            if (mime.includes("audio")) {
                let audioBuffer = await q.download();
                await conn.sendMessage(linkChannel, { audio: audioBuffer,
                mimetype: "audio/mp4",
                fileName: `shuna.mp3`,
                ptt: true, 
                contextInfo: {
                    forwardingScore: 1,
isForwarded: true,
                    forwardedNewsletterMessageInfo: {
newsletterJid: linkChannel,
serverMessageId: null,
newsletterName: caption == "" ? namech : caption,
},
                }},{
                    quoted: m
                });
                await conn.sendMessage(m.chat, {
                    text: `• Successfully sent audio with mimetype : *[ ${mime} ]*`,
                    edit: key
                }, {
                    quoted: m
                });
                 } else if (mime.includes("webp")) {
                 let img = await q.download?.()
                 await conn.sendMessage(linkChannel, {
sticker: img,
contextInfo: {
                        isForwarded: true,
                        externalAdReply: {
                            title: null,
                            body: namech,
                            thumbnailUrl: hwaifu.getRandom(),
                            sourceUrl: null,
                            mediaType: 1,
                            renderLargerThumbnail: false,
                        },
                    },})
                
                await conn.sendMessage(m.chat, {
                    text: `• Successfully sent sticker with mimetype : *[ ${mime} ]*`,
                    edit: key
                }, {
                    quoted: m
                });
            } else if (mime.includes("image")) {
                let imageBuffer = await q.download();
                await conn.sendMessage(linkChannel, {
                    image: imageBuffer,
caption: caption || null,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: linkChannel,
serverMessageId: null,
newsletterName: namech,
},
}
})
                await conn.sendMessage(m.chat, {
                    text: `• Successfully sent image with mimetype : *[ ${mime} ]*`,
                    edit: key
                }, {
                    quoted: m
                });
            } else if (mime.includes("video")) {
                let videoBuffer = await q.download();
               await conn.sendMessage(linkChannel, {
                    video: videoBuffer,
caption: caption || null,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: linkChannel,
serverMessageId: null,
newsletterName: namech,
},
}
})
                await conn.sendMessage(m.chat, {
                    text: `• Successfully sent video with mimetype : *[ ${mime} ]*`,
                    edit: key
                }, {
                    quoted: m
                });
            } else {
                await conn.sendMessage(linkChannel, {
                    text: caption,
                    contextInfo: {
                        isForwarded: true,
                        externalAdReply: {
                            title: null,
                            body: namech,
                            thumbnailUrl: fotonya,
                            sourceUrl: null,
                            mediaType: 1,
                            renderLargerThumbnail: false,
                        },
                    },
                });
                await conn.sendMessage(m.chat, {
                    text: `• Successfully sent text message : "${caption}"`,
                    edit: key
                }, {
                    quoted: m
                });
            }
        } catch (e) {
            throw `*[ ! ]* Failed to send media. Please try again. Error: ${e.message || e}`;
        }
        }
handler.help = ["upch"].map((a) => a + " *[Id channel]* [caption]")
handler.tags = ["owner"]
handler.command = /^(upch)$/i
handler.rowner = true
export default handler