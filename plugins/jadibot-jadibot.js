import Jadibot from "../lib/jadibot.js";
import Connection from "../lib/connection.js";
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.sender;
    if (!who || who === "@s.whatsapp.net") throw "Uhm.. nomor yang anda masukan tidak valid!";
    if (Connection.conns.has(who.split("@")[0])) throw "Uhm.. kamu sudah menjadi bot!";
    const usePairingCode = !/qr(?:\s?code)?/i.test(command);
    try {
        await Jadibot(who, conn, m, usePairingCode);
    } catch (e) {
        throw e?.message || e;
    };
};

handler.help = handler.tags = ["jadibot"];
handler.command = /^jadibot(qr(code)?)?$/i;
export default handler;