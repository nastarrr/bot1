import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m,
		mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime)) {
		let img = await webp2png(await q.download()),
			url = API('violetics', '/api/media/image-enhancer', { img }, 'apikey')
		conn.sendMessage(m.chat, { image: { url }}, { quoted: m })
	} else throw `*[❗] Kirim/Balas Gambar Dengan Perintah ${usedPrefix + command}*`
}
handler.help = ['enhancer']
handler.tags = ['tools']
handler.command = /^enhancer$/i

export default handler