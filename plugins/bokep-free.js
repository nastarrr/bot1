let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Gak ada yang gratis, kecuali dirimu!!!
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Up Premium!!!*', 'status@broadcast')
}
handler.help = ['bokepfree']
handler.tags = ['nsfw']
handler.command = /^(bokepfree)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler