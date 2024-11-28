import fetch from 'node-fetch';
import { Sticker } from 'wa-sticker-formatter';
import moment from 'moment-timezone';
import { addExif } from '../lib/sticker.js';

let handler = async (m, { conn, args, usedPrefix, command }) => {
	let stiker = false
	try {
		let [packname, ...author] = args.join` `.split`|`
		author = (author || []).join`|`
		let q = m.quoted ? m.quoted : m
		let mime = (q.msg || q).mimetype || q.mediaType || ''
		if (/webp/g.test(mime)) {
			let img = await q.download?.()
			stiker = await addExif(img, packname || global.packname, author || global.author)
		} else if (/image/g.test(mime)) {
			let img = await q.download?.()
			stiker = await createSticker(img, false, global.packname, global.author)
		} else if (/video/g.test(mime)) {
	if ((q.msg || q).seconds > 10) return  await conn.reply(m.chat, 'maksimal 10 detik!', m, { contextInfo: { externalAdReply: {title: wm, body: ezatime, sourceUrl: yt, thumbnailUrl: gambar }}})
			let img = await q.download?.()
			stiker = await mp4ToWebp(img, { pack: packname, author: author })
		} else if (args[0] && isUrl(args[0])) {
			stiker = await createSticker(false, args[0], '', author, 20)
		} else {
 let reza = `Kirim Gambar/Video Dengan Caption ${usedPrefix + command}\nDurasi Video 1-9 Detik`
  m.reply(reza)
}
	 		} catch (e) {
		console.log(e)
		stiker = e
	} finally {
		if (stiker) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
    await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
            conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, {
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true,
      mediaUrl: yt,
      mediaType: 1,
      description: '',
      title: wm,
      body: null,
      thumbnailUrl: pickRandom(hwaifu),
      sourceUrl: null,
    }
  }
})
        }
        else {

            throw 0
        }
    }
}
handler.help = ['stiker','s']
handler.tags = ['sticker']
handler.alias = ['stiker', 'sticker', 'sgif', 'stikergif', 'stickergif']
handler.command = /^s(tic?ker)?(gif)?$/i

export default handler

const isUrl = (text) => text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))

async function createSticker(img, url, packName, authorName, quality) {
	let stickerMetadata = {
		type: 'full',
		pack: packName,
		author: authorName,
		quality
	}
	return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}

async function mp4ToWebp(file, stickerMetadata) {
	if (stickerMetadata) {
		if (!stickerMetadata.pack) stickerMetadata.pack = '‎'
		if (!stickerMetadata.author) stickerMetadata.author = '‎'
		if (!stickerMetadata.crop) stickerMetadata.crop = false
	} else if (!stickerMetadata) {
		stickerMetadata = { pack: '‎', author: '‎', crop: false }
	}
	let getBase64 = file.toString('base64')
	const Format = {
		file: `data:video/mp4;base64,${getBase64}`,
		processOptions: {
			crop: stickerMetadata?.crop,
			startTime: '00:00:00.0',
			endTime: '00:00:7.0',
			loop: 0
		},
		stickerMetadata: {
			...stickerMetadata
		},
		sessionInfo: {
			WA_VERSION: '2.2106.5',
			PAGE_UA: 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
			WA_AUTOMATE_VERSION: '3.6.10 UPDATE AVAILABLE: 3.6.11',
			BROWSER_VERSION: 'HeadlessChrome/88.0.4324.190',
			OS: 'Windows Server 2016',
			START_TS: 1614310326309,
			NUM: '6247',
			LAUNCH_TIME_MS: 7934,
			PHONE_VERSION: '2.20.205.16'
		},
		config: {
			sessionId: 'session',
			headless: true,
			qrTimeout: 20,
			authTimeout: 0,
			cacheEnabled: false,
			useChrome: true,
			killProcessOnBrowserClose: true,
			throwErrorOnTosBlock: false,
			chromiumArgs: [
				'--no-sandbox',
				'--disable-setuid-sandbox',
				'--aggressive-cache-discard',
				'--disable-cache',
				'--disable-application-cache',
				'--disable-offline-load-stale-cache',
				'--disk-cache-size=0'
			],
			executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
			skipBrokenMethodsCheck: true,
			stickerServerEndpoint: true
		 }
	}
	let res = await fetch('https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl', {
		method: 'post',
		headers: {
			Accept: 'application/json, text/plain, /',
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(Format)
	})
	return Buffer.from((await res.text()).split(';base64,')[1], 'base64')
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}