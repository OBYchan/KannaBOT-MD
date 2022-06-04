import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/cogan?apikey=NOVENganz2447'
	conn.sendButton(m.chat, 'Wangy wangy (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cogan)$/i
handler.tags = ['internet']
handler.help = ['cogan']
handler.limit = true

export default handler
