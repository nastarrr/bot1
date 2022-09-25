export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    let chat = global.db.data.chats[m.chat]
    if (chat.antiSpam) {
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
               global.db.data.users[m.sender].banned = true
                let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let caption = `Hai *@${who.split("@")[0]}* Kamu Di Banned Karena Spam!`
    this.sendButton(m.chat, caption, wm, null, [['𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐒𝐏𝐀𝐌', '/disable antispam']], m, { mentions: this.parseMention(caption) })
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
     }
}