import { sticker } from '../lib/sticker.js' 
 import { stickerLine, stickerTelegram } from '@bochilteam/scraper' 
  
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
     // TODO: add stickerly 
     const isTele = /tele/i.test(command) 
     if (!args[0]) throw `*Perintah Ini Untuk Mencari Sticker Dari Telegram ${isTele ? 'Tele.' : 'sᴇᴀʀᴄʜ.*'} 
*Note: Hasil Tidak Akurat*
  
 Cara Penggunaan:
 *${usedPrefix + command} <name>"
  
 Contoh:
 *${usedPrefix + command} naruto*` 
     const json = await (isTele ? stickerTelegram : stickerLine)(args[0]) 
     m.reply(` 
 *ᴛᴏᴛᴀʟ sᴛɪᴄᴋᴇʀ:* ${(json[0]?.stickers || json).length} 
 `.trim()) 
     for (let data of (json[0]?.stickers || json)) { 
         const stiker = await sticker(false, data.sticker || data, global.packname, global.author) 
         await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m).catch(console.error) 
         await delay(1500) 
     } 
 } 
 handler.help = ['stikersearch <name>'] 
 handler.tags = ['Sticker'] 
 handler.command = /^(ss|stickers|stickersearch|ssearch)$/i 
  
 handler.limit = true 
  
 export default handler 
  
 const delay = time => new Promise(res => setTimeout(res, time))