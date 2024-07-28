const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/10/legiao_boCGWhXim02z.jpg";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/10/legiao_boCGWhXim02z.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2250160543352" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250160543352";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_25_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4LFxuICAgICAgICA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6QW1nb0lqQmRQbmM3Q01WcHFhQWF3QW9wQytvaFNuV0x5UU9EVGJ1NWs0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1VXFxZmZ1b1J5dXktdnlTa2UzbVlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM5OTBjNzBiLTc2NDMtNGZiNy04MDdiLWNlMDkxODc1ZjBiN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDIzMCxcbiAgICAgIDE5NixcbiAgICAgIDMwLFxuICAgICAgMTA4LFxuICAgICAgMjUsXG4gICAgICAxNTUsXG4gICAgICAxMTcsXG4gICAgICAyMTgsXG4gICAgICAxOCxcbiAgICAgIDE0NCxcbiAgICAgIDM2LFxuICAgICAgMTczLFxuICAgICAgMTU2LFxuICAgICAgMjU0LFxuICAgICAgMSxcbiAgICAgIDEyNyxcbiAgICAgIDYxLFxuICAgICAgMTgyLFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMTQzLFxuICAgICAgMTMwLFxuICAgICAgMjAsXG4gICAgICA1OSxcbiAgICAgIDI1NCxcbiAgICAgIDIwNSxcbiAgICAgIDE0OCxcbiAgICAgIDEyOSxcbiAgICAgIDg2LFxuICAgICAgMjI1LFxuICAgICAgMTUxLFxuICAgICAgMjUwLFxuICAgICAgMzEsXG4gICAgICA0NSxcbiAgICAgIDE5MyxcbiAgICAgIDIwNyxcbiAgICAgIDg3LFxuICAgICAgMjIwLFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdKNFpRUjFQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwMTYwNTQzMzUyOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB8JOKiPCShpzwnZCD8J2aq/CdmqnwnZqwIPCdkIPwnZq18J2bgfCdmrDwnZCLJ/CdkJLwkoac8JOKieqnglwiLFxuICAgIFwibGlkXCI6IFwiMjMzNDc5MTIwMTE4MTk6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTJPdFlvRUVOaUFtTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwUEFNNDd2TzBmRjc0QW43SU9Ya1FnV1M1NUZsZTN6N2twc1pmQUl1dVY0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9Za1M2MVlJK2JFRi9lL0VSNTZRUUR3N0tGZDlHTkxNcWJ1T1gvY3V1K2VkTGpXSEVDRE1rMVdxZFE2SXNkcGtvS0E1eTlJVjJxZjg1TXFXSU1EeUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZ1cEpFcjFPTWJCSnhKd2NQWVBNTnUyOWxFZ2R0TVBXVDNicHYrOVV3ZFRZcTFuNkRnMDhsVDdtQ01OdHBrSkh3K29SZ2JVSCtFN2NsVmE2Q21HempnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTAxNjA1NDMzNTI6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNTUwOTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "$",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Dabi bot",
  ownername:process.env.OWNER_NAME|| "Dabi devils",


  errorChat : process.env.ERROR_| "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
