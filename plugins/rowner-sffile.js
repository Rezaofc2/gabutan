import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} menu`;
    const q = m.quoted ? m.quoted : m;
    const videoData = await q.download();
    let path = `${text}`
    await fs.writeFileSync(path, videoData)
    m.reply(`tersimpan di ${path}`)
}
handler.help = ['sffile'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^sffile$/i

handler.rowner = true
export default handler