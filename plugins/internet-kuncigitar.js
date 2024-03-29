import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  if (!text) throw '*Example: #kuncigitar Love Story*'
  let res = await fetch(`http://hadi-api.herokuapp.com/api/chord?q=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw '*Lagu Tidak Ditemukan*'
}
handler.help = ['kuncigitar'].map(v => v + ' <judul lagu>')
handler.tags = ['internet']
handler.command = /^kuncigitar$/i
handler.limit = true

export default handler
