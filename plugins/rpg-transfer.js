const items = [
    'money', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncommon', 'mythic', 'legendary', 'pet', 'exp',
]
let imgr = flaaa.getRandom()
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('Kamu sedang melakukan transfer!')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `Format:
*${usedPrefix}${command} [type] [value] [number]*
Example:
*${usedPrefix}${command} money 9999 @Tags*

*SUPPORTING ITEMS*
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('Tag salah satu, atau ketik Nomernya!!')
    if (!(who in global.db.data.users)) return m.reply(`User ${who} not in database`)
    if (user[type] * 1 < count) return m.reply(`Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${count - user[type]}*`)
    let confirm = `
*Apakah Kamu Yakin Ingin Transfer?*\n\n🧾 Jumlah: *${count}*\n🎁 Tipe: ${rpg.emoticon(type)}${type}${special(type)}\n👤Penerima: *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}*\n
TIMEOUT *60* DETIK
`.trim()
    let c = global.bottime
    conn.sendButton(m.chat, c, confirm, `${imgr + 'Transfer'}`, [['𝗖𝗢𝗡𝗧𝗜𝗡𝗨𝗘'], ['𝗖𝗔𝗡𝗖𝗘𝗟']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('*Waktu Transfer Selesai*'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('Coba Lagi')
    }
    if (/y(es)?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`*✔️ Succes Transfer ${count} ${rpg.emoticon(type)}${type}${special(type)} To @${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`Failted To Transfer *${count}* ${rpg.emoticon(type)}${type}${special(type)} to *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer', 'tf'].map(v => v + ' [type] [jumlah] [@tag]')
handler.tags = ['rpg']
handler.command = /^(transfer|tf)$/i
handler.register = true
handler.limit = true
handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
