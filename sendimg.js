
console.log('Starting........')
const chalk = require('chalk')
let express = require('express'), 
router = express.Router(), 
favicon = require('serve-favicon')
router.use(favicon(process.cwd() + '/IMG/favicon.ico'))

console.log(chalk.greenBright('\t\t\t\tSession Generator For Baileys Multi Device'))
const makeWASocket = require("@adiwajshing/baileys").default
const authfile = './session.millie.json'
const pino = require('pino')

const { delay ,useSingleFileAuthState } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(authfile)
const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('h4cO2gJEMwmgmBoteYufW6_weLvBYCqT');

  function Millie() {
    let pnname = `${makeid()}.png`
    try{
    let session = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: pino({ level: 'silent' }),
        treatCiphertextMessagesAsReal:false,
        browser :['𝙈𝙄𝙇𝙇𝙄𝙀 - 𝙈𝘿','opera','1.0.0']
    })

    session.ev.on("connection.update",async  (s) => {
       if (s.qr !== undefined){
         
            var QRCode = require('qrcode')
            QRCode.toFile(`./QR/${pnname}`, s.qr, {
                color: {
                  dark: '#000000', 
                  light: '#FFFFFF' 
                }
              })
         
        }







      
        const { connection, lastDisconnect } = s
        if (connection == "open") {
          await delay(500 * 10)
            let link = await  pastebin.createPasteFromFile(authfile, "Millie-MD session", null,0, "N")
            data = link.replace('https://pastebin.com/',"")
          
            await session.sendMessage(session.user.id, { text: btoa(data) })
            await session.sendMessage(session.user.id, { text: `ᴅᴇᴀʀ ᴜsᴇʀ ᴛʜɪs ɪs ʏᴏᴜʀ sᴇssɪᴏɴ ɪᴅ
          
◕ ⚠️ *ᴘʟᴇᴀsᴇ ᴅᴏ ɴᴏᴛ sʜᴀʀᴇ ᴛʜɪs ᴄᴏᴅᴇ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ ᴀs ɪᴛ ᴄᴏɴᴛᴀɪɴs ʀᴇǫᴜɪʀᴇᴅ ᴅᴀᴛᴀ ᴛᴏ ɢᴇᴛ ʏᴏᴜʀ ᴄᴏɴᴛᴀᴄᴛ ᴅᴇᴛᴀɪʟs ᴀɴᴅ ᴀᴄᴄᴇss ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ*
          
◕ ɢɪᴛʜᴜʙ - https://github.com/Neeraj-x0/Millie-MD
` })
        
            await delay(300 * 10)
        
          console.log(`\n\n\n\n\nThis is your Session ID - ${btoa(data)} \n\n Copy it From here Or the Id has sent to Your Whatsapp\n\n\n`)
          
           await process.exit(0)
        }
        if (
            connection === "close" &&
            lastDisconnect &&
            lastDisconnect.error &&
            lastDisconnect.error.output.statusCode != 401
        ) {
            Millie()
        }
      
    })
    session.ev.on('creds.update', saveState)
    session.ev.on("messages.upsert",  () => { })
   }catch{
      console.log(chalk.redBright('Unknown Error Occured Please report to Owner and Stay tuned'))
    } 
  

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + `/index.html`)
})
  }


Millie()


function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var characters9 = characters.length;
    for ( var i = 0; i < 9; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 characters9));
   }
   return result;
}


module.exports = router