import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
try {
	if (text.match(/(https:\/\/sfile.mobi\/)/gi)) {
		let res = await sfileDl(text)
		if (!res) throw 'Error :/'
		await m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
		conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype: res.mimetype }, { quoted: m })
	} else if (text) {
		let [query, page] = text.split`|`
		let res = await sfileSearch(query, page)
		if (!res.length) throw `ǫᴜᴇʀʏ "${text}" not found :/`
		res = res.map((v) => `*💬 ᴛɪᴛʟᴇ:* ${v.title}\n*📼 sɪᴢᴇ:* ${v.size}\n*🌐 ʟɪɴᴋ:* ${v.link}`).join`\n\n`
		m.reply(res)
	} else throw '*Masukkan Tautan Query/Sfile*'
	} catch {
	if (!text) throw '*MASUKKAN LINK*\n\nExample: https://sfile.mobi/1FjpfJwHxC07'
let res = await axios('https://violetics.pw/api/downloader/sfile?apikey=beta&url=' + text)
let json = res.data
conn.sendMessage(m.chat, { document: { url: json.result.url }, fileName: json.result.title, mimetype: null }, { quoted: m })
	}
}
handler.help = ['sfile']
handler.tags = ['downloader']
handler.command = /^sfile(d(own(load)?|l))?$/i

export default handler

async function sfileSearch(query, page = 1) {
	let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
	let $ = cheerio.load(await res.text())
	let result = []
	$('div.list').each(function () {
		let title = $(this).find('a').text()
		let size = $(this).text().trim().split('(')[1]
		let link = $(this).find('a').attr('href')
		if (link) result.push({ title, size: size.replace(')', ''), link })
	})
	return result
}

async function sfileDl(url) {
	let res = await fetch(url)
	let $ = cheerio.load(await res.text())
	let filename = $('div.w3-row-padding').find('img').attr('alt')
	let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
	let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
	let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
	return { filename, filesize, mimetype, download }
}