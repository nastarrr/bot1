/**
* cuma mau bilang terimakasih ama https://github.com/uhdahlah
**/


import axios from "axios"
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*Example: #tebakumur Clara*', m)

    await m.reply('*Searching...*')
	axios.get(`https://api.lolhuman.xyz/api/tebakumur?apikey=${global.lolkey}&name=${text}`).then ((res) => {
	 	let hasil = `*ʏᴏᴜʀ ɴᴀᴍᴇ : ${text}*\n*ʏᴏᴜʀ ᴀɢᴇ : ${res.data.result.age}*`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['tebakumur'].map(v => v + ' <nama>')
handler.tags = ['internet', 'fun']
handler.command = /^(tebakumur)$/i
handler.owner = false
handler.exp = 0
handler.limit = true
// https://github.com/uhdahlah
export default handler
