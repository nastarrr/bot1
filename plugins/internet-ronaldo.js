import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Cristianoronaldo")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Cristiano Ronaldo*", author, url, [['NEXT', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo']
handler.tags = ['internet']
handler.command = /^(cristianoronaldo)$/i
handler.limit = true
export default handler