let handler = async (m, { conn }) => {
    let imgr = flaaa.getRandom()
    conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
    let id = m.chat
    if (!(id in conn.tebaklogo)) throw false
    let json = conn.tebaklogo[id][1]
    conn.sendButton(m.chat, bottime, '```' + json.hasil.data.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', `${imgr + 'Bantuan'}`, [
        ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
    ], m)
}
handler.command = /^hani$/i

handler.limit = true

export default handler