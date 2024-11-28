import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*============ NOMOR =========*/
global.info = {
	nomorbot: '6289606790112',
	nomorown: '6289606790112',
	namebot: 'ShunaBot',
	nameown: 'RezaOfc',
	channel: '120363184819569813@newsletter',
	namechannel: 'Shuna | Whatsapp Bots'
}

/*============ OWNER ============*/
global.owner = [
['6289606790112', 'RezaOfc', 'true']
]
global.mods = ['6289606790112'] 
global.nameown = 'RezaOfc'
global.nomerown = ['6289606790112']
global.waown = 'wa.me/6289606790112'
global.mail = 'email@rezaoffc.xyz'
global.ig = 'https://www.instagram.com/mrreza18_'
global.fb = 'https://www.facebook.com/mhmmd.aidil.509?mibextid=ZbWKwL'
global.gcbot = 'https://chat.whatsapp.com/ClwtlXgvxi29HeHuXgOmiG'
global.yt = 'https://www.youtube.com/@MrReza18'
global.saweria = 'https://saweria.co/rezaoffc'
global.pulsa = '6281515696780'
global.dana = '6289606790112'
global.gopay = '6289518919704'
global.qris = 'https://telegra.ph/file/03e704dafcabcd9b6da7e.jpg'

/*============= WAJIB DI ISI =============*/
global.btc = '671f8ec74e83251243fb' //Daftar terlebih dahulu https://api.botcahx.live
global.lolkey = "60a53a43943e651149bd6711" //Daftar terlebih dahulu https://api.lolhuman.xyz
global.botwa = 'f73NMaAM3bYn' //Daftar terlebih dahulu https://api.botwa.space

/*============= APIKEY =============*/
global.domain = "https://wanten.panellynn.my.id";
global.apikey = "ptla_dyhsH65TuIdY5MKNuRo4HmWH23Ywwl8yLhlcCYfVSOr";
global.maupedia = {
  key: "7PscybL2mbMnOwQWLBFGvn2Aw6ZInNbh6wCHGLiCtelKZrfxGdCO5cQVcTSMOH9F",
  signature: "fd14f983d18a180e1bfe28bac14753b25c51af56",
  secret: "Rezaoffc",
};
global.APIs = {   
  btc: 'https://api.botcahx.eu.org',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': '671f8ec74e83251243fb',
  'https://api.lolhuman.xyz': "60a53a43943e651149bd6711",
}

/*=========== WATERMARK ===========*/
global.stickpack = `    ┏──────────────────
    ┃ ɴᴀᴍᴇ ʙᴏᴛ: ꜱʜᴜɴᴀʙᴏᴛ
    ┃ ɴᴏᴍᴇʀ ʙᴏᴛ: 6281515696780
    ┃ yᴏᴜᴛᴜʙᴇ: @MrReza18
    ┗────────────────┈┈`
global.stickauth = '┓\n┃\n┃\n┃\n┛'

/*=========== TEXT & IMAGE ===========*/
global.wait = `⏱️ _*Tunggu Sebentar . . .*_
> _${info.namebot} Sedang menjalankan perintah dari *Kamu*!_`
global.eror = `🤖 _*Terjadi kesalahan . . .*_
> _Mohon maaf atas ketidaknyamanan dalam menggunakan *${info.namebot}* . Sepertinya Ada kesalahan dalam sistem saat menjalankan perintah hubungi owner secepatnya._`
global.maxwarn = '2'
global.logo = [ 
  'https://files.catbox.moe/t4fs6w.jpg',
  'https://files.catbox.moe/uxj027.jpg',
  'https://files.catbox.moe/flemrf.jpg',
  'https://files.catbox.moe/mnc6mk.jpg',
  'https://files.catbox.moe/nrvdd4.jpg',
  'https://files.catbox.moe/6mz3nh.jpg', 
  "https://files.catbox.moe/3m5npc.jpg",
  "https://files.catbox.moe/y7hmsg.jpg",
  "https://files.catbox.moe/n6hbdb.jpg",
  "https://files.catbox.moe/3mw2xe.jpg",
  "https://files.catbox.moe/fsahhb.jpg",
  "https://files.catbox.moe/6mz3nh.jpg",
  "https://files.catbox.moe/nrvdd4.jpg",
  "https://files.catbox.moe/mnc6mk.jpg",
  "https://files.catbox.moe/flemrf.jpg",
  "https://files.catbox.moe/uxj027.jpg",
  "https://i.pinimg.com/originals/15/23/7f/15237fea45cf09777ecfcf894978a213.jpg",
  "https://f.uguu.se/zFCGBHFx.jpg",
  "https://i.pinimg.com/originals/00/81/e6/0081e6ba98898e9647a9c895a9fa13cd.jpg",
]

global.welcome = 'https://telegra.ph/file/450dca7f01c3f72f390b4.jpg'
global.leave = 'https://telegra.ph/file/2273bde983cec316dc406.jpg'

/*============= INI HIASAN YA =============*/

global.wm = 'Shuna | Whatsapp Bots'
global.ah = 'Selamat Datang di Shuna Bot Whatsapp'
global.oh = '© ShunaBot - 2024 | YT: @MrReza18'

global.packname = `    ┏──────────────────
    ┃ ɴᴀᴍᴇ ʙᴏᴛ: ꜱʜᴜɴᴀʙᴏᴛ
    ┃ ɴᴏᴍᴇʀ ʙᴏᴛ: 6281515696780
    ┃ yᴏᴜᴛᴜʙᴇ: @MrReza18
    ┗────────────────┈┈`
global.author = '┓\n┃\n┃\n┃\n┛'

//HIASAN MENU//
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.hsquere = "⛶", "❏", "⫹⫺"
global.flaaa = [
    //'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
    //'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
    //'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]

global.hwaifu = [
  'https://files.catbox.moe/t4fs6w.jpg',
  'https://files.catbox.moe/uxj027.jpg',
  'https://files.catbox.moe/flemrf.jpg',
  'https://files.catbox.moe/mnc6mk.jpg',
  'https://files.catbox.moe/nrvdd4.jpg',
  'https://files.catbox.moe/6mz3nh.jpg', 
  "https://files.catbox.moe/3m5npc.jpg",
  "https://files.catbox.moe/y7hmsg.jpg",
  "https://files.catbox.moe/n6hbdb.jpg",
  "https://files.catbox.moe/3mw2xe.jpg",
  "https://files.catbox.moe/fsahhb.jpg",
  "https://files.catbox.moe/6mz3nh.jpg",
  "https://files.catbox.moe/nrvdd4.jpg",
  "https://files.catbox.moe/mnc6mk.jpg",
  "https://files.catbox.moe/flemrf.jpg",
  "https://files.catbox.moe/uxj027.jpg",
  "https://i.pinimg.com/originals/15/23/7f/15237fea45cf09777ecfcf894978a213.jpg",
  "https://f.uguu.se/zFCGBHFx.jpg",
]

/*============== EMOJI ==============*/
global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            uang: '💰',
            tiketcoin: '🎟️',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

/*========== TYPE DOCUMENT ==========*/
global.doc = {
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    pdf: 'application/pdf',
    rtf: 'text/rtf'
}

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'config.js'"))
    import(`${file}?update=${Date.now()}`)
})

global.multiplier = 38
global.frez = {
      "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false,
        "id": ""
      },
      "message": {
        "conversation": `_${info.namebot} Terverifikasi Whatsapp_`
      }
    }
global.style = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};