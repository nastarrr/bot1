let handler = async(m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!text) throw `*Example: ${usedPrefix + command} hello*`

let urut = text.split`|`
  let teksnya = urut[0]
  let teksnya2 = urut[1]
  
if (command == 'maker1') {
let lis = ["burnpaper","butterfly","coffecup","coffee","doubleheart","flaming","grass","gravity","lovemessage","lovetext","naruto","oceansea","quotewood","rainbow","romantic","shadow","smoke"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'oxy ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker2') {
		let lis = ["pubg","slidetext","glitch"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'oxy2 ' + lis[v] + '|' + teksnya + '|' + teksnya2
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker3') {
		let lis = ["3dglowing",
"3dnature",
"3dwoodenblack",
"bevel",
"birthdaycake",
"burnpaper",
"butterfly",
"camuflage",
"candy",
"coffee",
"coffee-heartcup",
"crispchrome",
"embroiderytext",
"flaming",
"flowertext",
"flowertypo",
"funnycup",
"fur",
"gerbang",
"glowrainbow",
"gradientavatar",
"graffititext",
"grenleaves",
"harrypotter",
"illuminated-metallic",
"lovemessage",
"luxuryroyal",
"metalicglow",
"modernmetal",
"multimaterial",
"nature3d",
"neonlight",
"orchids-flower",
"partyneon",
"quotesgrass",
"rainbowbg",
"rainbowshine",
"romance",
"romantic-doubleheart",
"silk",
"smoketype-effect",
"smoketypography",
"stars",
"striking3d",
"summertext",
"sweetcandy",
"typography",
"underquotes",
"underwaterocean",
"underwebmatrix",
"vintage",
"watermelon",
"whitecube",
"wolfmetal",
"woodblock",
"woodenboard",
"woodheart",
"yellowroses"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'oxyx ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker4') {
		let lis = ["tiktokmaker","8bit"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'oxyx2 ' + lis[v] + '|' + teksnya + '|' + teksnya2
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker5') {
		let lis = ["balloon",
"beach-sign",
"blood_writing",
"bracelet",
"cemetery-gates",
"chalk_writing",
"christmas-writing",
"cookies_writing",
"denim-emdroidery",
"einstein",
"foggy_window_writing",
"fortune-cookie",
"frosty-window-writing",
"haunted-hotel",
"heart_tattoo",
"light-graffiti",
"lipstick-writing",
"love-lock",
"nightmare-writing",
"noir",
"pendant",
"plane-banner",
"sand_writing",
"snow-sign",
"soup_letters",
"street-sign",
"typewriter",
"water-writing",
"wooden_sign",
"yacht"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'pfunia ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker6') {
		let lis = ["arrow-signs", 
"birthday-cake", 
"cinema-ticket", 
"lifebuoy", 
"movie_marquee", 
"neon", 
"snow_writing"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'pfunia2 ' + lis[v] + '|' + teksnya + '|' + teksnya2
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker7') {
		let lis = ["bear",
"berry",
"blackpink",
"blood",
"broken",
"carbon",
"christmas",
"circuit",
"devil",
"discovery",
"dropwater",
"embossed",
"fiction",
"firework",
"glossy",
"glue",
"gradient",
"greenhorror",
"harrypotter",
"imglitch",
"light",
"magma",
"metallic",
"neon",
"paper",
"skeleton",
"sketch",
"stone",
"transformer",
"videogame"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'textpro ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker8') {
		let lis = ["aglitch",
"captainamerica",
"choror",
"layered",
"pornhub",
"spooky"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'textpro2 ' + lis[v] + '|' + teksnya + '|' + teksnya2
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker9') {
		let lis = ["3d-effect",
"3d-rubystone",
"3d-text-sub-zombie",
"3dengraved",
"3dgolden",
"3dgradient",
"3dlove",
"3dluxury",
"3dneonlight",
"3dpapercut",
"3drainbow",
"3drealistic",
"3dscifi",
"3dtext-effect",
"3dunderwater",
"3dwaterpipe",
"1917-style",
"alice-league-of-kings",
"angel-wing-galaxy",
"anubis",
"arch-crossfire",
"art-shader",
"assassins-creed",
"azzenka-league-of-kings",
"bearlogo",
"bg-crossfire",
"birthday-cake",
"birthday-cards",
"birthday-greeting",
"birthday-roses",
"black-metal",
"blackpink",
"blood-frosted",
"blood-text",
"blue-effect",
"blue-glitter",
"brickwall",
"brokentext",
"bubble-effect",
"bulb-effect",
"circuit",
"color-fireworks",
"cool-metal",
"dark-gold-metal",
"decorated-cookie",
"deluxe-gold",
"deluxe-silver",
"dinamo",
"double-exposure",
"dragon-fire",
"eroded-metal",
"fabric-text",
"firework",
"fox-crossfire",
"fun-certify1",
"fun-certify2",
"futuristic",
"galaxy-angel",
"galaxy-effect",
"galaxy-effect2",
"galaxy-text",
"galaxy-text-3",
"gankk-league-of-kings",
"gemstone",
"genji-overwatch",
"glossy",
"glossy-bluemetal",
"glossy-carbon",
"glossy-chrome",
"gold-avenger",
"gold-barcar",
"gold-batman",
"gold-bird2",
"gold-eagle",
"gold-effect",
"gold-fox",
"gold-glitter",
"gold-lion",
"gold-lion2",
"gold-star",
"gold-tiger",
"golden-letter",
"gr-crossfire",
"graffiti-color",
"graffiti-text3",
"graffiti-text4",
"graffiti-text5",
"graffiti-text8",
"graffititext",
"green-brush",
"greenhorror",
"halloween-fire",
"hanzo-overwatch",
"heart-birthday",
"heart-cups",
"heart-flashlight",
"hero3-crossfire",
"holographic",
"ledtext",
"lend-text",
"light-text",
"logo-galaxy",
"lol-ahri",
"lol-caitlyn",
"lol-draven",
"lol-ezreal-and-shen",
"lol-fiora",
"lol-fizz",
"lol-garen",
"lol-graves",
"lol-jhin",
"lol-jinx",
"lol-kalista",
"lol-khazix",
"lol-kogmaw",
"lol-leesin",
"lol-lux",
"lol-master-yi",
"lol-miss-fortune",
"lol-nidalee",
"lol-quinn",
"lol-rengar",
"lol-riven",
"lol-sona",
"lol-talon",
"lol-thresh",
"lol-vayne",
"lol-wukong",
"lol-yasuo",
"lol-zed",
"machines-effect",
"magic-text",
"magmatext",
"matrix-text",
"mei-overwatch",
"mercy-overwatch",
"metal-avenger",
"metal-headshot",
"metal-lion-2",
"metal-real-madrid",
"metal-star",
"metal-superman",
"metal-text-effect",
"metal-wolf-2",
"metalic",
"metallic-letter",
"mganga-league-of-kings",
"miniontext",
"modern-gold-3",
"modern-gold-4",
"modern-gold-5-pro",
"modern-gold-green",
"modern-gold-purple",
"modern-gold-red",
"modern-gold-sliver",
"modern-goldred",
"name-on-hot-air-ballon",
"neon",
"neon-2",
"neon-brightblue",
"neon-effects",
"neon-light-galaxy",
"neon-satin",
"neondevil",
"neonlight",
"neontext-light",
"paper-cut",
"paperart",
"rainbow-effect",
"reaper-overwatch",
"red-birthdaycake",
"redhot-metal",
"resht-league-of-kings",
"science",
"sfg-crossfire",
"skeleton",
"sketch",
"snowtext",
"soldier-overwatch",
"status-life",
"status-life-1",
"status-life-2",
"status-love",
"status-mood",
"status-mood-1",
"status-mood-2",
"status-mood-3",
"sunlight-shadow",
"swat-crossfire",
"tattoo-dragon",
"text-birthdaycake",
"text-birthdaycake2",
"thundertext",
"torbjornplate-overwatch",
"transformer",
"typography-autumn",
"typography-leaves",
"typography-maker1",
"violet-league-of-kings",
"water-3d",
"water-effect",
"watercolor",
"wedding-silver",
"wetglass",
"wings-effect",
"wishes-birthdaycake",
"word-greenfireworks",
"word-leaves"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'textprox ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker10') {
		let lis = ["3dgalaxy-metal",
"3dgold",
"3drosegold",
"3dsilver",
"3dspace",
"3dstone",
"3dvintage",
"avengers",
"balloons-cards",
"balloons-love",
"classic8bit",
"cutegirl",
"floraltext",
"glitchtext",
"gradientlogo",
"horrortext",
"juventus",
"layeredtext",
"lion-mascot",
"marvel",
"metal-marvel",
"metal-molding",
"ninja-black&white",
"phtext",
"spider-man",
"thortext",
"tiktok",
"typography-greenleaf",
"wolf-black&white",
"wolf-galaxy"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'textprox2 ' + lis[v] + '|' + teksnya + '|' + teksnya2
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker11') {
		let lis = ["american",
"anonymous",
"aov",
"arrow",
"arrow2",
"blackpink",
"cake",
"caper",
"cloth",
"cloud",
"coverpubg",
"crank",
"dragonfire",
"eraser",
"foggy",
"glasses",
"graffiti",
"greenbrush",
"hallowen",
"horror",
"incandescent",
"leafgraphy",
"letters",
"metals",
"ml",
"neonblue",
"neonbp",
"nightstars",
"pig",
"pubgavatar",
"puppy",
"sunlight",
"television",
"tiger",
"typography",
"typography2",
"warface",
"water"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'epho ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker12') {
		let lis = ["buoys",
"heated",
"pencil",
"quotestatus",
"wood"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'epho2 ' + lis[v] + '|' + teksnya + '|' + teksnya2
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker13') {
		let lis = ["3d-crack-text-effect-online",
"3d-underwater",
"3d-wood",
"3damerican-flag",
"3dglue-realistic",
"3dgradient",
"3dgradient2",
"3dmetal-effect",
"3dmetal-text-",
"3dmulticolor-papercut",
"3dpig-gif",
"3druby-stone",
"3dsand-engraved",
"3dshiny-metallic",
"3dsparkle-christmas",
"3dsub-zombie",
"3dtext-effect",
"3dtext-effect2",
"3dtext-effect3",
"3dtext-pig",
"3dvalentine-cards",
"3dxmas-cards",
"3dxmas-cards2",
"83day-card",
"83day-card2",
"83day-card3",
"83day-card4",
"advanced-glow",
"ahri-league-of-legends",
"alice-league-of-kings",
"amily-arena-of-valor",
"angels-wings",
"anonymous-neon",
"art-shader",
"azzenka-league-of-kings",
"balloon-noel",
"bats-halloween",
"bear2",
"bee",
"birthday-cake",
"birthday-cake2",
"birthday-cake3",
"birthday-cake4",
"birthday-cake5",
"birthday-cake6",
"birthday-cake7",
"birthday-cake8",
"birthday-cake9",
"birthday-cake10",
"birthday-cards",
"birthdayfoil-balloon",
"blackpink",
"blackpink-neon",
"blackskin-snake",
"blood-frosted",
"blood-steel",
"blood-text",
"blood-text2",
"blood-wall",
"blue-effect",
"blue-neon",
"bokeh-text",
"boom-comic",
"broken-glass",
"bulb-effect",
"cake-text",
"cake-text2",
"cake-text3",
"candy-text",
"card-christmas",
"card-christmas2",
"cartoon-graffiti",
"christmas-snow",
"christmas-tree",
"christmasball-ornaments",
"circle-mascot-team",
"cloth-effect",
"cloud-sky",
"clouds-sky",
"color-fireworks",
"colorful-angelwing",
"cool-metal",
"cute-girl-gamer",
"cute-typography",
"dance-effect",
"dancing-santaclaus",
"darkgreen-typography",
"darth-vader",
"decorated-cookie",
"deluxe-gold",
"deluxe-silver",
"dinamo-effect",
"double-exposure",
"dragon-fire",
"equalizer-blue",
"equalizer-effect",
"eraser-effect",
"evelynn-league-of-legends",
"fabric-effect",
"fabric-effect2",
"facebook-gold-play-button",
"facebook-silver-play-button",
"firework-effect",
"firework-effect2",
"flower-card",
"flower-effect",
"football-club2",
"fps-game",
"fun-certify",
"fun-certify2",
"galaxy-angel",
"galaxy-angelwings",
"galaxy-effect",
"galaxy-effect2",
"galaxy-text",
"galaxy-text2",
"galaxy-text3",
"galaxy-text4",
"galaxy-text5",
"galaxyangel-wings",
"gankk-league-of-kings",
"gemstone-effect",
"glitter-gold",
"glossy-carbon",
"glowing-effect",
"gold-effect",
"gold-effect2",
"gold-effect3",
"gold-text",
"gold-text2",
"golden-text",
"graffiti-text",
"graffiti-text2",
"graffiti-text3",
"graffiti-text4",
"graffiti-text5",
"green-brush",
"green-fireworks",
"greenskin-snake",
"greeting-cards",
"greetingcard-birthday",
"greetingcard-birthday2",
"halloween-fire",
"halloween-frankenstain",
"halloween-text",
"halloween-text2",
"halloween-videocard",
"hand-love",
"hand-love2",
"handwritten-foggyglass",
"happynewyear-firework",
"heart-cup",
"heart-flashlight",
"heart-wings",
"holographic-effect",
"horror-gift",
"icecream-chocolate",
"jean-text-effect",
"jewel-effect",
"joker",
"kahlii-arena-of-valor",
"kaisa-league-of-legends",
"leaves-text",
"lend-effect",
"light-effect",
"light-neonsign",
"lightfuturistic-technology",
"lightning-pubg-video",
"lol-fiora",
"lol-master-yi",
"lol-notice",
"lol-zed",
"luxury-gold",
"magic-effect",
"matrix",
"metal-darkgold",
"metal-eagle",
"metal-effect",
"metal-headshot",
"metal-lion",
"metal-logo",
"metal-star",
"metal-text",
"metallic-text",
"mganga-league-of-kings",
"minimal-logomaker",
"mobile-legends",
"modern-gold3",
"modern-gold4",
"modern-gold5",
"modern-goldgreen",
"modern-goldpurple",
"modern-goldred",
"modern-goldred2",
"modern-goldsliver",
"my-love",
"name-football",
"neon-brightblue",
"neon-devilwing",
"neon-satin",
"neon-valentine",
"neonlight-galaxy",
"newyear-greeting",
"newyear-greeting2",
"newyear-greeting3",
"ninja-mascot",
"orangeskin-snake",
"paper-cutout",
"paperclip-quote",
"papercut-effect",
"personalized-christmas",
"personalized-queen",
"pikachu",
"project-yasuo",
"pubg-birthdaycake",
"pubg-maker",
"pubg-maker2",
"pubg-maker3",
"pubg-maker4",
"purple-effect",
"rainbow-glow",
"realistic-cloud",
"realistic-embroidery",
"redhot-metal",
"redhot-metal2",
"resht-league-of-kings",
"road-paint",
"romantic-valentine",
"rooster",
"round-thunder",
"sandsummer-beach",
"sandsummer-beach2",
"signature",
"skin-python-text-effect",
"skull-videomaker",
"snake-text",
"snow-text",
"stars-night",
"status-life",
"status-life2",
"status-life3",
"status-love",
"status-love2",
"status-mood",
"status-mood2",
"status-mood3",
"status-mood4",
"storm-trooper",
"summerysand",
"sunflower-birthdaycake",
"sunlight-shadow",
"tattoo-body",
"tattoo-body2",
"tattoo-girl",
"tattoo-hand2",
"text-christmas",
"text-effectcolor",
"text-leaves",
"text-party",
"text-rain",
"text-wall",
"tiger",
"traveling-bear",
"typography-leaves",
"typography-leavesautumn",
"typography-maker",
"typography-maker2",
"typography-maker3",
"underwater-text",
"valentine-day",
"video-greeting-cards",
"violet-league-of-kings",
"wallpaper-moblie",
"water-3d",
"water-effect",
"water-effect2",
"watercolor-effect",
"wedding-silver",
"wet-glass",
"wings-effect",
"women-day",
"yasuo",
"yellowskin-snake",
"yena-arena-of-valor"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'ephotox ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
	
	if (command == 'maker14') {
		let lis = ["3d-wood2",
"3dgalaxy-metal",
"3dgold",
"3drose-gold",
"3dsilver",
"3dspace",
"3dstone",
"3dvintage-light-bulb",
"avengers",
"balloon-text",
"balloons-cards",
"balloons-love",
"bear",
"blueglass-effect",
"buffalo",
"bull",
"captain-america",
"chicken",
"cutegirl-graffiti",
"cyanglass-effect",
"dragon",
"eagle",
"floral-ornamental",
"football-club",
"graffiti-text6",
"greenglass-effect",
"griffin",
"gun",
"heated-steel",
"hornet",
"horse",
"jaguar",
"juventus",
"life-buoys",
"lion",
"lion2",
"marvel",
"messi",
"metal-marvel",
"metal-molding",
"monkey",
"ninja-black&white",
"orangeglass-effect",
"phoenix",
"pinkglass-effect",
"pornhub",
"premier-leaguecup",
"pubg-black&white",
"purpleglass-effect",
"real-madrid",
"redglass-effect",
"rhino",
"sabertooth",
"shark",
"spider-man",
"tattoo-hand",
"text-logo",
"tiger-logo",
"tiktok",
"typography-greenleaf",
"wolf-black&white",
"wolf-galaxy",
"wolf-logo",
"wolver",
"yellowglass-effect"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'ephotox2 ' + lis[v] + '|' + teksnya + '|' + teksnya2
	}))
	let button = {
		buttonText: `𝗖𝗛𝗢𝗢𝗦𝗘 𝗠𝗔𝗞𝗘𝗥 𝗢𝗣𝗧𝗜𝗢𝗡`,
		description: `*• ${name} Silakan Pilih ${command} Di Tombol Di Bawah...*.\n\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
}
handler.help = ['maker 1-14']
handler.tags = ['maker']
handler.command = /^maker(1[0-4]|1|[2-9])$/i
handler.limit = true
handler.register = true
export default handler