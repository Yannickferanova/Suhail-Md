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


global.SESSION_ID = process.env.SESSION_ID ||     "SUHAIL_09_55_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDM4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NixcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDMzLFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYzZCV1lJUys1OFZCamlHRlphbEV1MzhjdS9INDd2Yk1PQ282ckE0eGlnMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRnNfcXdEUkNRUUs0UmpPWDVvLUFZUVwiLFxuICBcInBob25lSWRcIjogXCI2ZDA1Y2RkMC05ZWRhLTQ1ZDctYTZiNC1jZDYzMWE4ZTA4NWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICA2MixcbiAgICAgIDE1MixcbiAgICAgIDIzNCxcbiAgICAgIDQ2LFxuICAgICAgNjQsXG4gICAgICA0MSxcbiAgICAgIDE1OSxcbiAgICAgIDIyNSxcbiAgICAgIDE4NyxcbiAgICAgIDc4LFxuICAgICAgMTg3LFxuICAgICAgMTEyLFxuICAgICAgMTYzLFxuICAgICAgOTgsXG4gICAgICA2NyxcbiAgICAgIDg2LFxuICAgICAgODgsXG4gICAgICAxNzAsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgOTcsXG4gICAgICA4LFxuICAgICAgMTU0LFxuICAgICAgMjQ1LFxuICAgICAgMTU1LFxuICAgICAgMjI5LFxuICAgICAgMjUzLFxuICAgICAgMTg5LFxuICAgICAgMTg5LFxuICAgICAgMCxcbiAgICAgIDI0NCxcbiAgICAgIDI0MSxcbiAgICAgIDU4LFxuICAgICAgMjUsXG4gICAgICA2MixcbiAgICAgIDY3LFxuICAgICAgNDUsXG4gICAgICAxNTgsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTNjYzODg4OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDE2MDU0MzM1MjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuqngfCTiojwkoac8J2Qg/CdmqvwnZqp8J2asCDwnZCD8J2atfCdm4HwnZqw8J2QiyfwnZCS8JKGnPCTionqp4JcIixcbiAgICBcImxpZFwiOiBcIjIzMzQ3OTEyMDExODE5OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002T3RZb0VFSnlybUxVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMFBBTTQ3dk8wZkY3NEFuN0lPWGtRZ1dTNTVGbGUzejdrcHNaZkFJdXVWND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYVG5CeXpGUGcxOUdHbjNoeFNxQUhlaThFeWwxaEZaS1htY1F4K3UzUisrYzdFbm5lem9ybFZMdmllblAzU3ZHZnVMbjllRXEweG1NYnJJMTkzWUJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4VXdkNFo0YzcrRDFtSmxUMXMrMG8xbFBtUFdSUW44VXlEOE9ZblJzS0x4K205QVpsOTVYclNranczSm1aY2FVMnhKMmYxUE9CSjFoZk9hSWpueFZBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwMTYwNTQzMzUyOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTYwNTQ0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
