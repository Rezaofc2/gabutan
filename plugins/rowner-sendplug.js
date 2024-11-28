import fs from 'fs';

let handler = async (m, {
    conn,
    args,
    text,
    usedPrefix,
    command
}) => {
    
let input = `• *Example :* ${usedPrefix + command} main-menu.js`
	if (!text) return m.reply(input)
	let who;
				try {
				if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender } catch (err) {
				if (m.isGroup) who = args[0] +  "@s.whatsapp.net"
				}
				if (!who) return m.reply(`contoh .sendplug @tag menu.js`)
				if (!args[1]) return m.reply(`contoh .sendplug @tag menu.js`)

                const isValid = await conn.onWhatsApp(text + "@s.whatsapp.net");
             	if (isValid.length == 0) {
	        	return m.reply("Number not in whatsapp!");
              	}
				var user_bot = await fs.readFileSync(`./plugins/${args[1]}.js`)
				conn.sendMessage(who, {
					document: user_bot,
					caption: '```Kiriman Plugins:```' + ' `'+args[1]+'`',
					mimetype: 'document/application',
					fileName: `${args[1]}.js`
				})
conn.reply(m.chat, `Success sending file to : @${who.split`@`[0]}`, m, { contextInfo: { mentionedJid: [who] } })
}
handler.help = ['sendplug']
handler.tags = ['owner']
handler.command = /^(sendplug)$/i
handler.rowner = true

export default handler