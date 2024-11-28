import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
const printMessage = (await import('./lib/print.js')).default
/**
* @type {import('@adiwajshing/baileys')}
*/
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
* Handle messages upsert
* @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate
*/
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
             let user = global.db.data.users[m.sender]
                if (typeof user !== 'object') global.db.data.users[m.sender] = {}
                if (user) {
                    if (!isNumber(user.healt)) user.healt = 100
                    if (!isNumber(user.stamina)) user.stamina = 100
                    if (!isNumber(user.haus)) user.haus = 100
                    if (!isNumber(user.laper)) user.laper = 100
                    if (!isNumber(user.level)) user.level = 0
                    if (!isNumber(user.chat)) user.chat = 0
                    if (!('pasangan' in user)) user.pasangan = ''
                    if (!('ultah' in user)) user.ultah = ''
                    if (!('catatan' in user)) user.catatan = ''
                    if (!('sahabat' in user)) user.sahabat = ''
                    if (!('email' in user)) user.email = ''
                    if (!isNumber(user.exp)) user.exp = 0
                    if (!isNumber(user.crystal)) user.crystal = 0
                    if (!isNumber(user.lastGameTime)) user.lastGameTime = 0
                    if (!isNumber(user.exphero)) user.exphero = 0
                    if (!isNumber(user.pc)) user.pc = 0
                  
                    if (!isNumber(user.ojekk)) user.ojekk = 0
                    if (!isNumber(user.takjil)) user.takjil = 0
                    if (!isNumber(user.ngewe)) user.ngewe = 0
                    if (!isNumber(user.anak)) user.anak = 0
                    
                   
                    if (!isNumber(user.coin)) user.coin = 0
                    if (!isNumber(user.atm)) user.atm = 0
                    if (!isNumber(user.limit)) user.limit = 100
                  
                    if (!isNumber(user.lastclaim)) user.lastclaim = 0
                    if (!isNumber(user.lastcode)) user.lastcode = 0  
                    if (!isNumber(user.saldo)) user.saldo = 0
                    if (!isNumber(user.uang)) user.uang = 0
                    if (!isNumber(user.tiketcoin)) user.tiketcoin = 0
                    if (!isNumber(user.bank)) user.bank = 0
                    if (!isNumber(user.poin)) user.poin = 0
                    
                    if (!isNumber(user.pertanian)) user.pertanian = 0
                    if (!isNumber(user.pertambangan)) user.pertambangan = 0
                    
                    
                    if (!isNumber(user.botol)) user.botol = 0
                    if (!isNumber(user.kardus)) user.kardus = 0
                    if (!isNumber(user.gelas)) user.gelas = 0
                    if (!isNumber(user.plastik)) user.plastik = 0
                    if (!isNumber(user.kaleng)) user.kaleng = 0
                    if (!isNumber(user.aqua)) user.aqua = 0
                    if (!isNumber(user.diamond)) user.diamond = 0
                    if (!isNumber(user.berlian)) user.berlian = 0
                    if (!isNumber(user.iron)) user.iron = 0
                    if (!isNumber(user.emas)) user.emas = 0
                    
        
                    if (!isNumber(user.common)) user.common = 0
                  
                    if (!isNumber(user.uncommon)) user.uncommon = 0
                    if (!isNumber(user.mythic)) user.mythic = 0
                    if (!isNumber(user.legendary)) user.legendary = 0
                    if (!isNumber(user.glory)) user.glory = 0
                  
                    if (!isNumber(user.pet)) user.pet = 0
                   
                
                    if (!isNumber(user.potion)) user.potion = 0
                    if (!isNumber(user.sampah)) user.sampah = 0
                    if (!isNumber(user.armor)) user.armor = 0
                    if (!isNumber(user.pancing)) user.pancing = 0
                    //penambah stamina
                    if (!isNumber(user.apel)) user.apel = 0
                  
                    if (!isNumber(user.ayam)) user.ayam = 0
                    if (!isNumber(user.coal)) user.coal = 0
                    if (!isNumber(user.babipanggang)) user.babipanggang = 0
                    if (!isNumber(user.oporayam)) user.oporayam = 0
                    if (!isNumber(user.gulaiayam)) user.gulaiayam = 0
                    if (!isNumber(user.kepitingbakar)) user.kepitingbakar = 0
                    if (!isNumber(user.pausbakar)) user.pausbakar = 0
                    if (!isNumber(user.rendang)) user.rendang= 0
                    if (!isNumber(user.ikanbakar)) user.ikanbakar = 0
                    if (!isNumber(user.ayambakar)) user.ayambakar = 0
                    if (!isNumber(user.udangbakar)) user.udangbakar = 0
                    if (!isNumber(user.ayamgoreng)) user.ayamgoreng = 0
                  
                    //tools
                    if (!isNumber(user.sword)) user.sword = 0
                    if (!isNumber(user.sworddurability)) user.sworddurability = 0
                    if (!isNumber(user.pickaxe)) user.pickaxe = 0
                    if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
                    if (!isNumber(user.fishingrod)) user.fishingrod = 0
                    if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
                    if (!isNumber(user.pekerjaandua)) user.pekerjaandua = 0
                    if (!isNumber(user.jobexp)) user.jobexp = 0
                    if (!('jail' in user)) user.jail = false
                    if (!('penjara' in user)) user.penjara = false
                    if (!isNumber(user.umpan)) user.umpan = 0
                    if (!isNumber(user.pancingan)) user.pancingan = 0
                    
                    if (!isNumber(user.kucing)) user.kucing = 0
                    if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
                     if (!isNumber(user.singa)) user.singa = 0
                    if (!isNumber(user.singalastclaim)) user.singalastclaim = 0
                     if (!isNumber(user.anjing)) user.anjing = 0
                    if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
                    if (!isNumber(user.ramuanherolast)) user.ramuanherolast = 0
                    if (!isNumber(user.ramuankucinglast)) user.ramuankucinglast = 0
                    if (!isNumber(user.ramuansibgalast)) user.ramuansingalast = 0
                    if (!isNumber(user.ramuananjinglast)) user.ramuananjinglast = 0
                    if (!isNumber(user.ramuanphonixlast)) user.ramuanphonixlast = 0
                    if (!isNumber(user.ramuancentaurlast)) user.ramuancentaurlast = 0
                    if (!isNumber(user.ramuannagalast)) user.ramuannagalast = 0
                    if (!isNumber(user.ramuanrubahlast)) user.ramuanrubahlast = 0
                    if (!isNumber(user.ramuankudalast)) user.ramuankudalast = 0
                    if (!isNumber(user.ramuanserigalalast)) user.ramuanserigalalast = 0
                    if (!isNumber(user.anaklastclaim)) user.anaklastclaim = 0
                    if (!isNumber(user.hero)) user.hero = 0
                    if (!isNumber(user.herolastclaim)) user.herolastclaim = 0
                    if (!isNumber(user.kuda)) user.kuda = 0
                    if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
                    if (!isNumber(user.rubah)) user.rubah = 0
                    if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
                    if (!isNumber(user.anjing)) user.anjing = 0
                    if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
                    if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0
                    if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0
                    if (!isNumber(user.lastjudi)) user.lastjudi = 0
                    if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0
                  
                    if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0
                    
                    if (!isNumber(user.makananhero)) user.makananhero
                    if (!isNumber(user.makananpet)) user.makananpet
                    if (!isNumber(user.makanannaga)) user.makanannaga = 0
                    if (!isNumber(user.makananphonix)) user.makananphonix = 0
                  
                    if (!isNumber(user.makananserigala)) user.makananserigala = 0
                    if (!isNumber(user.makanancentaur)) user.makanancentaur = 0
        
                    if (!'Banneduser' in user) user.Banneduser = false
                    if (!'BannedReason' in user) user.BannedReason = ''
                    if (!isNumber(user.warn)) user.warn = 0
                    if (!isNumber(user.freg)) user.freg = 0
                    if (!isNumber(user.warning)) user.warning = 0
        
                    if (!isNumber(user.afk)) user.afk = -1
                    if (!'afkReason' in user) user.afkReason = ''
                
                //PET
                    if (!isNumber(user.healthmonster)) user.healthmonster = 0
                    if (!isNumber(user.anakkucing)) user.anakkucing = 0
                     if (!isNumber(user.anaksinga)) user.anaksinga = 0
                     if (!isNumber(user.anakanjing)) user.anakanjing = 0
                    if (!isNumber(user.anakhero)) user.anakhero = 0
                    if (!isNumber(user.anakkuda)) user.anakkuda = 0
                    if (!isNumber(user.anakrubah)) user.anakrubah = 0
                    if (!isNumber(user.anakanjing)) user.anakanjing = 0
                    if (!isNumber(user.serigala)) user.serigala = 0
                    if (!isNumber(user.anakserigala)) user.anakserigala = 0
                    if (!isNumber(user.naga)) user.naga = 0
                    if (!isNumber(user.anaknaga)) user.anaknaga = 0
                    if (!isNumber(user.anakanak)) user.anakanak = 0
                    if (!isNumber(user.phonix)) user.phonix = 0
                    if (!isNumber(user.anakphonix)) user.anakphonix = 0
                  
                    if (!isNumber(user.centaur)) user.centaur = 0
                    if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
                    if (!isNumber(user.makananpet)) user.makananpet = 0
                    if (!isNumber(user.makananhero)) user.makananhero = 0
        
                    if (!isNumber(user.antispam)) user.antispam = 0
                    if (!isNumber(user.spamwa)) user.spamwa = 0
                    if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
        
                  
                  
                    if (!isNumber(user.batu)) user.batu = 0
                    if (!isNumber(user.ramuan)) user.ramuan = 0
                    if (!isNumber(user.string)) user.string = 0
                    if (!isNumber(user.sword)) user.sword = 0
                    if (!isNumber(user.sworddurability)) user.sworddurability = 0
                    if (!isNumber(user.pickaxe)) user.pickaxe = 0
                    if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
                    if (!isNumber(user.fishingrod)) user.fishingrod = 0
                    if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
        
                    //mancing
                    if (!isNumber(user.paus)) user.paus = 0
             if (!isNumber(user.kepiting)) user.kepiting = 0
             if (!isNumber(user.gurita)) user.gurita = 0
             if (!isNumber(user.cumi)) user.cumi= 0
             if (!isNumber(user.buntal)) user.buntal = 0
             if (!isNumber(user.dory)) user.dory = 0
             if (!isNumber(user.lumba)) user.lumba = 0
             if (!isNumber(user.lobster)) user.lobster = 0
             if (!isNumber(user.hiu)) user.hiu = 0
             if (!isNumber(user.udang)) user.udang = 0
             if (!isNumber(user.ikan)) user.ikan = 0
             if (!isNumber(user.nila)) user.nila = 0
             if (!isNumber(user.bawal)) user.bawal = 0
             if (!isNumber(user.lele)) user.lele = 0
             if (!isNumber(user.orca)) user.orca = 0
                
             if (!isNumber(user.banteng)) user.banteng = 0
             if (!isNumber(user.harimau)) user.harimau = 0
             if (!isNumber(user.gajah)) user.gajah = 0
             if (!isNumber(user.kambing)) user.kambing = 0
             if (!isNumber(user.panda)) user.panda = 0
             if (!isNumber(user.buaya)) user.buaya = 0
             if (!isNumber(user.kerbau)) user.kerbau = 0
             if (!isNumber(user.sapi)) user.sapi = 0
             if (!isNumber(user.monyet)) user.monyet = 0
             if (!isNumber(user.babihutan)) user.babihutan = 0
             if (!isNumber(user.babi)) user.babi = 0
             if (!isNumber(user.ayam)) user.ayam = 0
         
                    if (!isNumber(user.lastadventure)) user.lastadventure = 0
                    if (!isNumber(user.lastmancing)) user.lastmancing = 0
                    if (!isNumber(user.lastmancing2)) user.lastmancing2 = 0
                    if (!isNumber(user.lastmancing3)) user.lastmancing3 = 0
                    if (!isNumber(user.lastkill)) user.lastkill = 0
                    if (!isNumber(user.lastpractice)) user.lastpractice = 0
                    if (!isNumber(user.lastfishing)) user.lastfishing = 0
                    if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
                    if (!isNumber(user.lastwar)) user.lastwar = 0
                    if (!isNumber(user.lastsda)) user.lastsda = 0
                    if (!isNumber(user.lastberbru)) user.lastberbru = 0
                    if (!isNumber(user.lastduel)) user.lastduel = 0
                    if (!isNumber(user.lastjb)) user.lastjb = 0
                    if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
                    if (!isNumber(user.lastmining)) user.lastmining = 0
                    if (!isNumber(user.lasthunt)) user.lasthunt = 0
                    if (!isNumber(user.lastngocok)) user.lastngocok = 0
                    if (!isNumber(user.lastgift)) user.lastgift = 0
                    if (!isNumber(user.lastrob)) user.lastrob = 0
                    if (!isNumber(user.lasttakjil)) user.lasttakjil = 0
                    if (!isNumber(user.lastopenbo)) user.lastopenbo = 0
                    if (!isNumber(user.lastroket)) user.lastroket = 0
                    if (!isNumber(user.lastngojek)) user.lastngojek = 0
                    if (!isNumber(user.lastngewe)) user.lastngewe = 0
                    if (!isNumber(user.lastbertani)) user.lastbertani = 0
                    if (!isNumber(user.lastramuanclaim)) user.lastramuanclaim = 0
                    
                   
                    if (!isNumber(user.lastgrab)) user.lastgrab = 0
                    if (!isNumber(user.lastweaponclaim)) user.lastweaponclaim = 0
                    if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
                    if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
                    if (!isNumber(user.lastdagang)) user.lastdagang = 0
                    if (!isNumber(user.lasthourly)) user.lasthourly = 0
                    if (!isNumber(user.lastweekly)) user.lastweekly = 0
                    if (!isNumber(user.lastyearly)) user.lastyearly = 0
                    if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
                    if (!isNumber(user.lastdaily)) user.lastdaily = 0
                    if (!isNumber(user.lastguildwar)) user.lastguildwar = 0
                    if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
                    if (!isNumber(user.lastturu)) user.lastturu = 0
                    
                    if (!isNumber(user.lastbansos)) user.lastbansos = 0
                    if (!isNumber(user.lastrampok)) user.lastrampok = 0
                    if (!('registered' in user)) user.registered = false
                    if (!user.registered) {
                    if (!('name' in user)) user.name = this.getName(m.sender)
        
                 
                    if (!isNumber(user.roket)) user.roket = 0
                  
                 
                
                   
                  
                    if (!isNumber(user.anggur)) user.anggur = 0
                    if (!isNumber(user.jeruk)) user.jeruk = 0
                    if (!isNumber(user.semangka)) user.semangka = 0
                    if (!isNumber(user.mangga)) user.mangga = 0
                    if (!isNumber(user.stroberi)) user.stroberi = 0
                    if (!isNumber(user.pisang)) user.pisang = 0
                    if (!isNumber(user.kayu)) user.kayu = 0
                    
                    if (!isNumber(user.makanan)) user.makanan = 0
                    if (!isNumber(user.makanananak)) user.makanananak = 0
                    if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
                    if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
                    if (!isNumber(user.bibitapel)) user.bibitapel = 0
                    if (!isNumber(user.skata)) user.skata = 0
                    if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
                    if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
        
                      
                        if (!isNumber(user.age)) user.age = -1
                        if (!isNumber(user.premiumDate)) user.premiumDate = -1
                        if (!isNumber(user.regTime)) user.regTime = -1
                        
        }
                    if (!isNumber(user.level)) user.level = 0
                    if (!("skill" in user)) user.skill = ""
                    if (!("job" in user)) user.job = ""
                    if (!("title" in user)) user.title = ""
                    if (!("guild" in user)) user.guild = ""
                    if (!user.lbars) user.lbars = '[▒▒▒▒▒▒▒▒▒]'
                    if (!user.premium) user.premium = false
                    if (!user.seller) user.seller = false
                    if (!user.seller) user.sellerTime = 0
                    if (!user.owner) user.owner = false
                    if (!user.owner) user.ownerTime = 0
                    if (!user.premium) user.premiumTime = 0
                    if (!user.role) user.role = 'Newbie ㋡'
                    if (!('autolevelup' in user)) user.autolevelup = true
                    if (!('lastIstigfar' in user)) user.lastIstigfar = true
                } else global.db.data.users[m.sender] = {
                    healt: 100,
                    title: "",
                    guild: "",
                    haus: 100,
                    laper: 100,
                    tprem: 0,
                    stamina : 100,
                    level: 0,
                    chat: 0,
                    pasangan: '',
                    ultah: '',
                    catatan: '',
                    sahabat: '',
                    email: '',
                    pc : 0,
                    exphero: 0,
                    exp: 0,
                    lastGameTime: 0,
                    crystal: 0,
                    coin: 0,
                    atm: 0,
                    limit: 100,
                    lastclaim: 0,
                    lastcode: 0,
                    saldo: 0,
                    uang: 0,
                    tiketcoin: 0,
                    bank: 0,
                    poin: 0,
                    diamond: 0,
                    berlian: 0,
                    iron: 0,
                    emas: 0,
                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    rumahsakit: 0,
                    makanan: 0,
                    ojekk: 0,
                    takjil: 0,
                    ngewe: 0,
                    anak: 0,
                    makanananak: 0,
                    korbanngocok: 0,
                    //mancing
            paus: 0,
            kepiting: 0,
            gurita: 0,
            cumi: 0,
            buntal: 0,
            dory: 0,
            lumba: 0,
            lobster: 0,
            hiu: 0,
            udang: 0,
            ikan: 0,
            orca: 0,
            banteng: 0,
            harimau: 0,
            gajah: 0,
            kambing: 0,
            panda: 0,
            buaya: 0,
            kerbau : 0,
            sapi: 0,
            monyet : 0,
            babihutan: 0,
            babi: 0,
            ayam: 0,
            ayamgoreng: 0,
            ayambakar: 0,
            coal: 0,
            udangbakar: 0,
            babipanggang: 0, 
            oporayam: 0,
            gulaiayam: 0, 
            kepitingbakar: 0, 
            pausbakar: 0, 
            rendang: 0, 
            ikanbakar: 0, 
                    pet: 0,
                    potion: 0,
                    sampah: 0,
                    armor: 0,
                    kucing: 0,
                    kucinglastclaim: 0,
                    ramuanherolast: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    ramuananjinglast: 0,
                    singa: 0,
                    singalastclaim: 0,
                    ramuansingalast: 0,
                    ramuankucinglast: 0,
                    ramuanphonixlast: 0,
                    ramuancentaurlast: 0,
                    ramuannagalast: 0,
                    ramuanserigalalast: 0,
                    ramuankudalast: 0,
                    ramuanrubahlast: 0,
                    hero: 0,
                    herolastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    rubah: 0,
                    rubahlastclaim: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    naga: 0,
                    nagalastclaim: 0,
                    lastjudi: 0,
                    centaur: 0,
                    centaurlastclaim: 0,
                    serigala: 0,
                    serigalalastclaim: 0,
                    phonix: 0,
                    phonixlastclaim: 0,
                    makanannaga: 0,
                    makananphonix: 0,
                    makanancentaur: 0,
                    makananserigala: 0,
                    makananhero: 0,
                    
                    Banneduser: false,
                    BannedReason: '',
                    warn: 0,
                    freg: 0,
                    warning: 0,
                    afk: -1,
                    afkReason: '',
                    anakkucing: 0,
                    anakanjing: 0,
                    anaksing: 0,
                    anakhero: 0,
                    anakkuda: 0,
                    anakrubah: 0,
                    anakanjing: 0,
                    makananhero: 0,
                    makananpet: 0,
                    antispam: 0,
                    spamwa: 0,
                    antispamlastclaim: 0,
                    kayu: 0,
                  
                    
                    
                    
                    batu: 0,
                    string: 0,
                    umpan: 0,
                    jail: false, 
                    jobexp: 0,
                    penjara: false, 
                    pekerjaandua: 0,
                    pancingan: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    lastmancing: 0,
                    lastmancing2: 0,
                    lastmancing3: 0,
                    lastadventure: 0,
                    lastramuanclaim: 0,
                    lastsironclaim: 0,
                  
                    
                    lastweaponclaim: 0,
                    lastkill: 0,
                    lastpractice: 0,
                    lastfishing: 0,
                    lastdungeon: 0,
                    lastduel: 0,
                    lastmining: 0,
                    lasthourly: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastyearly: 0,
                    lastmonthly: 0,
                    lastdaily: 0,
                    lastguildwar: 0,
                    lastrob: 0,
                    lastopenbo: 0,
                    lasttakjil: 0,
                    lastroket: 0,
                    lastdaang: 0,
                    lastngojek: 0,
                    lastngewe: 0,
                    lastbertani: 0,
                    lastramuanclaim: 0,
                    lastgrab: 0,
                    lastngocok: 0,
                    lastturu: 0,
                    
                    lastSetStatus: 0,
                    registered: false,
                    apel: 0,
                    mangga: 0,
                  
                    
                    jeruk: 0,
                    bibitapel: 0,
                    bibitpisang: 0,
                    bibitjeruk: 0,
                    bibitanggur: 0,
                    bibitmangga: 0,
                    anggur: 0,
                    pisang: 0,
                    owner: false,
                    ownerTime: 0,
                    name: this.getName(m.sender),
                    age: -1,
                    regTime: -1,
                    premium: false,
                    seller: false,
                    sellerTime: 0,
                    premiumTime: 0,
                    skill: "",
                    job: "",
                    lbars: '[▒▒▒▒▒▒▒▒▒]', 
                    role: 'Newbie ㋡', 
                    registered: false,
                    autolevelup: true,
                    lastIstigfar: 0,
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('welcome' in chat))
                    chat.welcome = true
                if (!('detect' in chat))
                    chat.detect = false
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                 if (!('sIntro' in chat))
                    chat.sIntro = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('listStr' in chat))
                    chat.listStr = {}
                /*if (!('delete' in chat))
                    chat.delete = false*/
                if (!('antiLinkkick' in chat)) 
                    chat.antiLinkkick = false 
                if (!('antiLinkdelete' in chat))
                    chat.antiLinkdelete = false
                if (!('pembatasan' in chat))
                    chat.pembatasan = false
                if (!('antiSticker' in chat))
                    chat.antiSticker = false
                if (!('antiLinkWa' in chat))
                    chat.antiLinkWa = false
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('antiVirtex' in chat))
                    chat.antiVirtex = false
                if (!('antiToxic' in chat))
                    chat.antiToxic = false
                if (!('antiBadword' in chat))
                    chat.antiBadword = false
                if (!('simi' in chat))
                    chat.simi = false
                if (!('nsfw' in chat))
                    chat.nsfw = false
                if (!('rpg' in chat))
                    chat.rpg = false
                if (!('game' in chat))
                    chat.game = false
                if (!('teks' in chat))
                    chat.teks = false
                if (!('autolevelup' in chat))
                    chat.autolevelup = false
                if (!isNumber(chat.joinpremtime))
                    chat.joinpremtime = 0
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                isBanned: false,
                welcome: true,
                detect: false,
                sWelcome: '',
                sBye: '',
                sIntro: '',
                sPromote: '',
                sDemote: '',
                listStr: {},
                delete: false,
                antiLinkkick: false,
                antiLinkdelete: false,
                pembatasan: false,
                antiLinkWa: false,
                antiSticker: false,
                viewonce: false,
                antiToxic: false,
                antiVirtex: false,
                antiBadword: false,
                simi: false,
                nsfw: false,
                rpg: false,
                game: false,
                
                teks: false,
                autolevelup: false,
                joinpremtime: 0,
                expired: 0,
            }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = true
                if (!('composing' in settings)) settings.composing = false
                if (!('restrict' in settings)) settings.restrict = true
                if (!('autorestart' in settings)) settings.autorestart = true
                if (!isNumber(settings.restartDB)) settings.restartDB = 0
                if (!('backup' in settings)) settings.backup = true
                if (!('reactsw' in settings)) settings.reactsw = false
                if (!isNumber(settings.backupDB)) settings.backupDB = 0
                if (!('cleartmp' in settings)) settings.cleartmp = true
                if (!isNumber(settings.lastcleartmp)) settings.lastcleartmp = 0
                if (!isNumber(settings.status)) settings.status = 0
                if (!('anticall' in settings)) settings.anticall = true
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: true,
                composing: false,
                restrict: true,
                autorestart: true,
                restartDB: 0,
                backup: true,
                reactsw: false, 
                backupDB: 0,
                cleartmp: true,
                lastcleartmp: 0,
                status: 0,
                anticall: true,
            }
        } catch (e) {
            console.error(e)
        }

        if (opts['nyimak'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = global.db.data.users[m.sender].owner || isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
       let isPrems = global.db.data.users[m.sender].premium
       let isJoinprem = global.db.data.chats[m.chat].premiumjoin
if (
        !m.fromMe &&
        !isOwner &&
        !isMods &&
        opts["self"]
      )
            return
if (opts['gconly'] && !m.fromMe && !m.chat.endsWith('g.us') && !global.db.data.users[m.sender].premium && !isOwner)
            return this.reply(m.chat, `• Mohon maaf fitur ini premium, harap update ke pengguna premium.\nHubungi: wa.me/${nomerown}\n\n• Jika ingin gratis harap join ke group kami atau kalian bisa sewa bot kami untuk group kalian\nGroup: ${gcbot}`, m)
        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque,
            time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }
global.db.data.users[m.sender].chat += 1;
        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)): {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants: []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender): {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid): {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                // global.dfail('restrict', m, this)
                continue
            }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix: conn.prefix ? conn.prefix: global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]]:
                Array.isArray(_prefix) ? // Array?
                _prefix.map(p => {
                    let re = p instanceof RegExp ? // RegExp in Array?
                    p:
                    new RegExp(str2Regex(p))
                    return [re.exec(m.text), re]
                }):
                typeof _prefix === 'string' ? // String?
                [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]]:
                [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    isJoinprem,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                continue
            }
            if (typeof plugin !== 'function')
                continue
            if (opts && match && m) {
          let result =
            ((opts?.["multiprefix"] ?? true) && (match[0] || "")[0]) ||
            ((opts?.["noprefix"] ?? false) ? null : (match[0] || "")[0]);
          usedPrefix = result;
          let noPrefix;
          if (isOwner) {
            noPrefix = !result ? m.text : m.text.replace(result, "");
          } else if (isPrems) {
            noPrefix = !result ? m.text : m.text.replace(result, "");
          } else {
            noPrefix = !result ? "" : m.text.replace(result, "").trim();
          }
          let [command, ...args] = noPrefix.trim().split` `.filter((v) => v);
          args = args || [];
          let _args = noPrefix.trim().split` `.slice(1);
          let text = _args.join` `;
          command = (command || "").toLowerCase();
          let fail = plugin.fail || global.dfail;

          const prefixCommand = !result
            ? plugin.customPrefix || plugin.command
            : plugin.command;
          let isAccept =
            (prefixCommand instanceof RegExp && prefixCommand.test(command)) ||
            (Array.isArray(prefixCommand) &&
              prefixCommand.some((cmd) =>
                cmd instanceof RegExp ? cmd.test(command) : cmd === command,
              )) ||
            (typeof prefixCommand === "string" && prefixCommand === command);
          m.prefix = !!result;
          usedPrefix = !result ? "" : result;
                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    let ban = db.data.banned[m.sender]
                    if (typeof ban !== 'undefined' && ban.status) 
                        return
                    if (name != 'owner-unbanchat.js' && name != 'tool-delete.js' && chat?.isBanned && !isOwner)
                        return
                         if (
              name != "mode-bot.js" &&
              chat &&
              chat.mute &&
              !isAdmin &&
              !isOwner
            )
              return
                    if (name != 'owner-unbanuser.js' && name != 'cek-banned.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) {
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) {
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) {
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) {
                    fail('mods', m, this)
                    continue
                }
              if (plugin.premium && !isPrems && !isJoinprem && !isOwner) { // Premium
                        fail('premium', m, this)
                        continue
                    }
                if (plugin.group && !m.isGroup) {
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) {
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) {
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) {
                    fail('private', m, this)
                    continue
                }
                if (plugin.register && !_user.registered) {
                    fail('unreg', m, this)
                    continue
                }
                if (plugin.onlyprem && !m.isGroup && !isPrems) {
                    fail('onlyprem', m, this)
                    continue
                }
                if (plugin.rpg && m.isGroup && !global.db.data.chats[m.chat].rpg) {
                    fail('rpg', m, this)
                    continue
                }
                if (plugin.game && m.isGroup && !global.db.data.chats[m.chat].game) {
                    fail('game', m, this)
                    continue
                }
                
                if (plugin.nsfw && m.isGroup && !global.db.data.chats[m.chat].nsfw) {
                    fail('nsfw', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp): 17 // XP Earning per command
                if (xp > 200)
                    m.reply('Ngecit -_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && !isJoinprem && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                        await this.reply(m.chat, `Limit anda habis.
silahkan hubungi owner bot untuk membeli akses *PREMIUM* seharga *10k/bulan*

*KEUNTUNGAN DARI PREMIUM*
1. No LIMIT/SEPUASNYA
2. Bisa menggunakan Fitur *PREMIUM*
3. Masuk *SURGA*`, m, { contextInfo: {
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.info.channel,
      serverMessageId: 101,
      newsletterName: global.info.namechannel
    }}})
                    continue
                }
                if (plugin.level > _user.level) {
                	this.reply(m.chat, `[💬] Mohon maaf level yang di perlukan untuk menggunakan fitur ini ${plugin.level}\n*Level mu:* ${_user.level} 📊`, m)
                    continue
                }
                if (plugin.age > _user.age) {
                	this.reply(m.chat, `[💬] Umurmu harus diatas ${plugin.age} Tahun untuk menggunakan fitur ini...`, m)	
                    continue
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    isJoinprem,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                        if (!isPrems && !isJoinprem && !isOwner) m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                            let data = (await conn.onWhatsApp(jid))[0] || {}
                            if (data.exists)
                                m.reply(`*🗂️ Plugin:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(' ')}\n📄 *Error Logs:*\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
                        }
                        m.reply(text)
                    }
                } finally {
                        // m.reply(util.format(_user))
                        if (typeof plugin.after === 'function') {
                            try {
                                await plugin.after.call(this, m, extra)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        if (m.limit) this.reply(m.chat, + m.limit + style(' Limit terpakai'), m)
                   }
                    break
                }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user,
        stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0: 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0: now
                } else
                    stat = stats[m.plugin] = {
                    total: 1,
                    success: m.error != null ? 0: 1,
                    last: now,
                    lastSuccess: m.error != null ? 0: now
                }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await printMessage(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (global.db.data.settings[this.user.jid].autoread)
            await this.readMessages([m.key]).catch(() => {})

        if (global.db.data.settings[this.user.jid].composing)
            await this.sendPresenceUpdate('composing', m.chat).catch(() => {})
    }
}

/**
* Handle groups participants update
* @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate
*/
export async function participantsUpdate( { id, participants, action }) {
    if (opts['self'])
        return
    if (this.isInit)
        return
    let chat = global.db.data.chats[id] || {}
    let text = ''
    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
    switch (action) {
        case 'add':
            case 'remove':
                if (chat.welcome) {
                for (let user of participants) {
                    let pp, ppgc;

                    try {
                        pp = await this.profilePictureUrl(user, 'image');
                    } catch (e) {
                        pp = 'https://telegra.ph/file/0615e1831e71cb13e3f50.png';
                    }

                    try {
                        ppgc = await this.profilePictureUrl(id, 'image');
                    } catch (e) {
                        ppgc = 'https://telegra.ph/file/0615e1831e71cb13e3f50.png';
                    }

                    text = (action === 'add' ? 
                        (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!')
                        .replace('@subject', await this.getName(id))
                        .replace('@desc', groupMetadata.desc ? groupMetadata.desc.toString() : '') :
                        (chat.sBye || this.bye || conn.bye || 'Bye, @user!'))
                        .replace('@user', '@' + user.split('@')[0]);

                    
                    /*let arr =
                action === "add"
                  ? [["🎉 INTRODUCTION", ".intro"]]
                  : [["🕊️ SAYONARA", " "]];
              this.sendButtons(id, arr, null, {
                body: text,
                footer: '© ' + info.namebot + ' 2020-2024',
                url: action === 'add' ? wel : lea,
                //url: pp, 
              });*/
              this.sendMessage(id, {
text: text,
contextInfo: {
mentionedJid: [user],
externalAdReply: {
title: "",
body: '© ' + info.namebot + ' 2020-2024',
thumbnailUrl: pp,
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
                }
            }
                break
            case 'promote':
                text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
                case 'demote':
                    if (!text)
                        text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
                    text = text.replace('@user', '@' + participants[0].split('@')[0])
                    if (chat.detect)
                        this.sendMessage(id, {
                        text, mentions: this.parseMention(text)
                        })
                    break
        }
}
/**
* Handle groups update
* @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate
*/
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
     for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id],
        text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        /*if (chat.delete)
            return
        await this.reply(msg.chat, `
⧻Terdeteksi @${participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.disable antidelete*
`.trim(), msg, { mentions: [participant] })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))*/
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
let Styles = (text, style = 1) => {
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
    let msg = {
 rowner: 'Perintah ini hanya untuk *Reza*',
 owner: 'silahkan jadibot dulu sebelum menggunakan fitur ini, ketik *.jadibot*',
 mods: 'Perintah ini hanya untuk *MODS*',
 premium: 'Perintah ini hanya untuk *PREMIUM*\n\nSilakan kirim *.buyprem* untuk membeli paket *Premium*',
 group: 'Perintah ini hanya untuk *GROUP*',
 private: 'Perintah ini hanya untuk *PRIVATE*',
 admin: 'Perintah ini hanya untuk *ADMINS*',
 botAdmin: 'Jadikan bot sebagai *Admin* untuk menggunakan perintah ini!',
 onlyprem: 'Perintah ini hanya untuk *PREMIUM*',
 nsfw: 'Perintah Ini Belum Diaktifkan Di Grup Ini.\n\nAktifkan Fitur Ini Dengan menulis *.enable nsfw*',
 rpg: 'Perintah Ini Belum Diaktifkan Di Grup Ini.\n\nAktifkan Fitur Ini Dengan Menulis *.enable rpg*',
 game: 'Perintah Ini Belum Diaktifkan Di Grup Ini.\n\nAktifkan Fitur Ini Dengan Menulis *.enable game*',
 restrict: '*FITUR DIMATIKAN OLEH PEMILIK*',
 unreg: `untuk bisa akses fitur ini silahkan Daftar dulu kak\n\n*daftar manual* :\n*ketik* .daftar Reza.18\n\n*daftar Auto* :\n*ketik* .verify\n\n*daftar menggunakan Email* :\n*ketik* .regmail eza@gmail.com`,
    }[type]

    if (msg) return conn.sendMessage(m.chat, {
text: Styles(msg),
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: oh,
body: "", 
thumbnailUrl: "https://files.catbox.moe/bn15zd.png",
sourceUrl: yt,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'handler.js'"))
if (global.reloadHandler) console.log(await global.reloadHandler())
})
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? ??"
if (time >= 4) {
res = "Selamat Pagi"
}
if (time >= 10) {
res = "Selamat Siang"
}
if (time >= 15) {
res = "Selamat Sore"
}
if (time >= 18) {
res = "Selamat Malam"
}
return res
}