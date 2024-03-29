let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { 
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*FORMAT SALAH, Contoh:*
  *${l}❌${r} ${usedPrefix + command} close*
  *${l}✅${r} ${usedPrefix + command} open*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['g *open / close*']
handler.tags = ['group']
handler.command = /^(g)$/i

handler.admin = true
handler.botAdmin = true

export default handler
