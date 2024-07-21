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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_53_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxLFxuICAgICAgICA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKa0NPcGdOc0t0MGNpdm11amszY2xHME5QNFBnSEkzNVBhWmp2anZoaHdrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTAxNjA1NDMzNTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJFM0VGMzc3QzhGREZCQUY0NzMyODU4NzI2MTEwRjU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA0Nzk2MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTAxNjA1NDMzNTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEyMjhCQzExRDc0MEFBMTc4MEUzN0NCRDNCMkI5REE4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA0Nzk2M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrX0ZDV2U4clNXNnZIcDVONU9TclhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgwZGY2NDAyLTM0NGEtNGNlMy1hODBkLWMzNjhkODU3OTU2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICA3NSxcbiAgICAgIDEwNSxcbiAgICAgIDIyOCxcbiAgICAgIDc5LFxuICAgICAgMTgzLFxuICAgICAgNzQsXG4gICAgICAxNTEsXG4gICAgICAyMDUsXG4gICAgICAxNzksXG4gICAgICAxMzksXG4gICAgICA2LFxuICAgICAgNjAsXG4gICAgICA5MCxcbiAgICAgIDE5NixcbiAgICAgIDE5MSxcbiAgICAgIDIxNSxcbiAgICAgIDE0NyxcbiAgICAgIDIxOSxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDYzLFxuICAgICAgMTcwLFxuICAgICAgMTI5LFxuICAgICAgMTksXG4gICAgICA5MCxcbiAgICAgIDE2NyxcbiAgICAgIDQ1LFxuICAgICAgMjM5LFxuICAgICAgNDksXG4gICAgICA5MCxcbiAgICAgIDk4LFxuICAgICAgNzAsXG4gICAgICA0NCxcbiAgICAgIDUxLFxuICAgICAgOTgsXG4gICAgICA3NyxcbiAgICAgIDEzNCxcbiAgICAgIDIxLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk44N0haRlZXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwMTYwNTQzMzUyOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB8JOKiPCShpzwnZCD8J2aq/CdmqnwnZqwIPCdkIPwnZq18J2bgfCdmrDwnZCLJ/CdkJLwkoac8JOKieqnglwiLFxuICAgIFwibGlkXCI6IFwiMjMzNDc5MTIwMTE4MTk6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXlPdFlvRUVJbTMxTFFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwUEFNNDd2TzBmRjc0QW43SU9Ya1FnV1M1NUZsZTN6N2twc1pmQUl1dVY0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkplVVdWTGlLM05rWWxpQVFHdHNDeVpuUExibTVuZ0VpTGJ0bit6ODF3MXcrQmZiRDBvV3g0ZzJHWXNlYzZRdmlkUkxtdWJuZVdrenh0ZktaV1AwK0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNjNkFwaFFUTUJVaDZvOTVaeU1XbEtQUTNjUFhnU2w5S1pzenhuMUdXNXlMSGgveUJSRjVxL3BheC9jY3ZvZ3lqaXA1SG9GNFR3OFhTWEdZbFMrZmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTAxNjA1NDMzNTI6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNDc5NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZnhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZmeC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
