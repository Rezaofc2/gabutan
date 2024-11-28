import moment from 'moment-timezone'
import fs from 'fs';
import fetch from 'node-fetch';
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default
let handler = async (
  m,
  { conn, text, args, command, usedPrefix, isOwner, isGroup },
) => {
  const tanggal = async (numer) => {
  const myMonths = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

  const tgl = new Date(numer);
  const day = tgl.getDate();
  const bulan = tgl.getMonth();
  const thisDay = tgl.getDay();
  const thisDayName = myDays[thisDay];
  const yy = tgl.getYear();
  const year = yy < 1000 ? yy + 1900 : yy;

  const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
  const d = new Date();
  const locale = "id";
  const gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
  const weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor((d * 1 + gmt) / 84600000) % 5];

  return `${thisDayName}, ${day} - ${myMonths[bulan]} - ${year}`;
    };
  const eggid = 15;
  const krizz = 5
  const location = 26;
  const prefix = usedPrefix;
  const akiraa = conn;
  const pler = JSON.parse(fs.readFileSync("./idgrup.json").toString());
  const jangan = m.isGroup ? pler.includes(m.chat) : false;
  
  const pp = await conn
    .profilePictureUrl(m.sender, "image")
    .catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
  switch (command) {
    case "pannel":
      {
        m.reply(`*± L I S T - P A N N E L*

* 1GB Disk / 30 Cpu = Rp: 1.000
* 2GB Disk / 60 Cpu = Rp: 2.000
* 3GB Disk / 90 Cpu = Rp: 3.000
* 4GB Disk / 120 Cpu = Rp: 4.000
* 5GB Disk / 150 Cpu = Rp: 5.000
* 6GB Disk / 180 Cpu = Rp: 6.000
* 7GB Disk / 210 Cpu = Rp: 7.000
* 8GB Disk / 240 Cpu = Rp: 8.000
* 9GB Disk / 270 Cpu = Rp: 9.000
* 10GB Disk / 300 Cpu = Rp: 10.000
* ∞ Disk / ∞ Cpu = Rp: 15.000

*Benefits Buying ✍️ :*
- Server Fresh anti lemot ✓
- Server Uptime 24 jam ✓
- Garansi 15D ✓
- Script  terjaga ✓
- No Boros Kouta/Storage ✓
- Simple ✓`);
      }
      break;
    case "addgc":
      if (!isOwner) return m.reply(`Khusus Owner`);
      pler.push(m.chat);
      fs.writeFileSync("./idgrup.json", JSON.stringify(pler));
      m.reply(`*[ System notice ]* sucess add accesss`);
      break;
    case "delgc":
      if (!isOwner) return m.reply(`Khusus Owner`);
      var ini = pler.indexOf(m.chat);
      pler.splice(ini, 1);
      fs.writeFileSync("./idgrup.json", JSON.stringify(pler));
      m.reply(`*[ System notice ]* sucess delete access`);

      break;
      case 'deladp': {
if (!isOwner) return m.reply(`Khusus Owner`);
if (!text) return m.reply(`Untuk melihat ID silahkan ketik ${prefix}listadp`)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID admin tidak ditemukan!")
m.reply(`Berhasil del admin panel *${getid}*`)
}
break
case 'suspend': {
if (!isOwner) return m.reply(`Khusus Owner`);
let srv = text
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Sukses suspend server')
}
break
case 'unsuspend': {
if (!isOwner) return m.reply(`Khusus Owner`);
let srv = text
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Sukses membuka suspend')
}
break

case 'reinstall': {
if (!isOwner) return m.reply(`Khusus Owner`);
let srv = text
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Mereinstall server...')
}
break

case 'startsrv': 
case 'stopsrv': 
case 'restartsrv': {
if (!isOwner) return m.reply(`Khusus Owner`);
let action = command.replace('srv', '')
let srv = text
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
m.reply(`Sukses ${action.toUpperCase()} server`)
}
break
      case 'listadp': {
if (!isOwner) return m.reply(`Khusus Owner`);
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let totalAdmin = 0;
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = " *LIST ADMIN PANEL BOT⚡*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\`📡ID User ${i.attributes.id}\`
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n\n`
totalAdmin++;
})
teks += ` Total Admin : *${totalAdmin} Admin*`
await conn.sendMessage(m.chat, { text: teks }, { quoted: m });
}
break
    case "1gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
                  let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024;
        let cpu = 30;
        let disk = 1024;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
        
         let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
       await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "2gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
                  let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 + 1024;
        let cpu = 30 + 30;
        let disk = 1024 + 1024;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
       
        let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
    {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "3gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 3;
        let cpu = 30 * 3;
        let disk = 1024 * 3;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
        
       let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
       let ctf = `*[ 📦 DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "4gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 4;
        let cpu = 30 * 4;
        let disk = 1024 * 4;
        let email = username + "@rezastore.co.id";
        if (!u) return;
        
      let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "5gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
               let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 5;
        let cpu = 30 * 5;
        let disk = 1024 * 5;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
        
        
       let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "6gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
                let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 6;
        let cpu = 30 * 6;
        let disk = 1024 * 6;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
    
        let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
         let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "7gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
                if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 7;
        let cpu = 30 * 7;
        let disk = 1024 * 7;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
      
      let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
       let ctf = `*[ 📦 DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
         let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "8gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
               if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 8;
        let cpu = 30 * 8;
        let disk = 1024 * 8;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
       
        let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
       let ctf = `*[ 📦 DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
         let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
    {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di Reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "9gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
               if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 9;
        let cpu = 30 * 9;
        let disk = 1024 * 9;
        let email = username + "@RezaOffc.co.id";
        if (!u) return;
       
        let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
       let ctf = `*[ 📦 DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
         let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "10gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
      if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
                 
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 10;
        let cpu = 30 * 10;
        let disk = 1024 * 10;
        let email = username + "@Rezaoffc.co.id";
        if (!u) return;
   
        let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
       let ctf = `*[ 📦 DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
 let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
    {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

*© 🇮🇩 REZA STORE 2023 - 2024*`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "unli":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
                if (!isOwner && !global.db.data.users[m.sender].seller) {
    return m.reply(`Khusus untuk Seller Panel`);
}
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 0;
        let cpu = 0;
        let disk = 0;
        let email = username + "@RezaOffc.co.id";
        if (!u) return;
     
        let password = generateRandomPassword();
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 DATA PANEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-----------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
 let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(ctf),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
    {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password.toString()}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
      case "addadp": {
      if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
    if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
 let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
let username = t[0];
let email = username + "@RezaOffc.co.id";
        let name = username;
let password = generateRandomPassword();
let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        
        if (!u) return;
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

let user = data.attributes

let tks = `
TYPE: ADMIN PANEL

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}
`
conn.sendMessage(m.chat, { text: tks }, { quoted: m });

let y = `*[ 📦 DATA ADP ANDA ]*
*• Username:*  ${username}
*• Password:* ${password}
*• Login:* ${domain}
-----------------------------------------------------
*OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
 let msghhhhhhhhh = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: conn.parseMention(y),
   isForwarded: false, 
   externalAdReply: { 
     title: wm, 
     thumbnailUrl: "https://files.catbox.moe/20jq2f.png", 
     sourceUrl: yt,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: y
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `© `+info.namebot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "shunabot",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${username}"}`
     },
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {
    quoted: frez
});
/*await conn.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});*/
      await conn.sendMessage(u, {
    text: y,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/20jq2f.png",
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
      break;
    case "listusr":
      {
        if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
        let txt = text ? text : 1;
        let f = await fetch(domain + "/api/application/users?page=" + txt, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let data = await f.json();
         
if (f.ok) {

let userList = `*A L L - U S E R*\n*Total: ${data.data.length} user*\n\n`

let adminList = data.data
.filter(user => user.attributes)
.map(user => {
userList += '```ID:```' + ` ${user.attributes.id}\n`
userList += '```Username:```' + ` ${user.attributes.username}\n`
userList += '```Email:```' + ` ${user.attributes.email}\n`
userList += '```First Name:```' + ` ${user.attributes.first_name}\n`
userList += '```Last Name:```' + ` ${user.attributes.last_name}\n`
userList += '```Language:```' + ` ${user.attributes.language}\n`
userList += '```Root Admin:```' + ` ${user.attributes.root_admin ? 'Yes' : 'No'}\n`
userList += '```2FA:```' + ` ${user.attributes['2fa'] ? 'Enabled' : 'Disabled'}\n`
userList += '```Created At:```' + `${user.attributes.created_at}\n\n`
})
conn.reply(m.chat, `${userList}${global.wm}`, m);
}
      }
      break;
    case "detusr":
      {
        if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
        if (!text) throw `*• Example :* ${usedPrefix + command} *[id user]*`;
        let f = await (
          await fetch(domain + "/api/application/users/" + text, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey,
            },
          })
        ).json();
        if (f.errors) return m.reply("*USER NOT FOUND*");
        let user = f.attributes;
        let cap = `*• ID :* ${user.id}
*• Email :* ${user.email}
*• Username :* ${user.username}
*• Admin :* ${user.root_admin ? "yes" : "no"}
*• Create :*
${await tanggal(user.created_at)}
*• Upadate :*
${await tanggal(user.updated_at)}`
/*conn.sendButtons(m.chat, [['Delete User', `.delusr ${user.id}`],['List User', `.listusr`]], frez, {
                body: cap,
                footer: wm,
                url: null,
              });*/
await conn.sendMessage(m.chat, {
    text: cap,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/ou5ax2.png",
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
      break;
    case "delusr":
      {
    if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
    if (!text) throw `*• Example :* ${usedPrefix + command} *[id user]*`;
        let f = await fetch(domain + "/api/application/users/" + text, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let res = f.ok
          ? {
              errors: null,
            }
          : await f.json();
        if (res.errors) return m.reply("*THERE ARE NO USERS*");
        m.reply("*SUCCESS DELETE USER*");
      }
      break;
    case "delsrv":
      {
    if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
    if (!text) throw `*• Example :* ${usedPrefix + command} *[id server]*`;
        let f = await fetch(domain + "/api/application/servers/" + text, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let res = f.ok
          ? {
              errors: null,
            }
          : await f.json();
        if (res.errors) return m.reply("*THERE ARE NO SERVERS*");
        m.reply("*SUCCES DELETE SERVERS*");
      }
      break;
    case "detsrv":
      {
    if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
    if (!text) throw `*• Example :* ${usedPrefix + command} *[id server]*`;
        let f = await (
          await fetch(domain + "/api/application/servers/" + text, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey,
            },
          })
        ).json();
        if (f.errors) return m.reply("*SERVERS NOT FOUND*");
        let s = f.attributes;
        let cap = `*• ID :* ${s.id}
*• Name :* ${s.name}        
*• Desc :* ${s.description}
*• Memory :* ${s.limits.memory === 0 ? "Unlimited" : s.limits.memory + "Mb"}
*• Disk :* ${s.limits.disk === 0 ? "Unlimited" : s.limits.disk + "Mb"}
*• Cpu :* ${s.limits.cpu === 0 ? "Unlimited" : s.limits.cpu + "%"}
*• Create :*
${await tanggal(s.created_at)}
*• Update :*
${await tanggal(s.updated_at)}`
/*conn.sendButtons(m.chat, [['Delete Server', `.delsrv ${s.id}`],['List Server', `.listsrv`]], frez, {
                body: cap,
                footer: wm,
                url: null,
              });*/
              
      await conn.sendMessage(m.chat, {
    text: cap,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: [m.sender],
        externalAdReply: {
              title: oh,
                        body: "",
                        thumbnailUrl: "https://files.catbox.moe/ekrgj9.png",
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
      break;
    case "listsrv":
      {
        if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
        let txt = text ? text : 1;
        let f = await fetch(domain + "/api/application/servers?page=" + txt, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        
       let data = await f.json();
         
if (f.ok) {
let totalServers = data.meta.pagination.total;
let servers = data.data;

let serverList = `*A L L - S E R V E R*\n*Total: ${data.data.length} server*\n\n`

servers.forEach(server => {
let serverInfo = server.attributes;
serverList += '```Server ID:```' + ` ${serverInfo.id}\n`
serverList += '```Server Name:```' + ` ${serverInfo.name}\n`
serverList += '```Code Server:```' + ` ${serverInfo.identifier}\n`
serverList += '```User ID:```' + ` ${serverInfo.user}\n`
serverList += '```Suspended:```' + ` ${serverInfo.suspended ? "Yes" : "No"}\n`
serverList += '```Updated At:```' + ` ${serverInfo.updated_at}\n`
serverList += '```Created At:```' + ` ${serverInfo.created_at}\n\n`
});

conn.reply(m.chat, `${serverList}${global.wm}`, m);
}
       }
      break;
  }
};
handler.command = handler.help = [
  "pannel",
  "1gb",
  "2gb",
  "3gb",
  "4gb",
  "5gb",
  "6gb",
  "7gb",
  "8gb",
  "9gb",
  "10gb",
  "unli",
  "listusr",
  "detusr",
  "delusr",
  "listsrv",
  "delsrv",
  "detsrv",
  "listadp",
  "deladp",
  "addadp",
  "addgc",
  "delgc",
  "startsrv",
  "restartsrv",
  "unsuspend",
  "suspend",
  "reinstall",
  "stopsrv",
];
handler.tags = ["cpanel"];
handler.rowner = true
export default handler

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}   