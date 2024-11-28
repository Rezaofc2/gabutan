
import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} menu`;

  if (command === 'sfp') {
    if (!m.quoted.text) throw `balas pesan nya!`;
    let path = `plugins/${text}.js`;
    await fs.writeFileSync(path, m.quoted.text);
    m.reply(`tersimpan di ${path}`);
  } else if (command === 'df') {
    let path = `${text}`;
    if (!fs.existsSync(path)) throw `file ${text} tidak ditemukan`;
    fs.unlinkSync(path);
    m.reply(`file ${text} berhasil dihapus`);
  } else if (command === 'dfp') {
  let path = `plugins/${text}.js`;
    if (!fs.existsSync(path)) throw `file plugins/${text}.js tidak ditemukan`;
    fs.unlinkSync(path);
    m.reply(`file plugins/${text}.js berhasil dihapus`);
  }
};


handler.command = handler.help = ['sfp','df','dfp'];
handler.tags = ['owner'];
handler.rowner = true;
export default handler;