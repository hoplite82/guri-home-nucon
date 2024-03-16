// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import type { Context } from "@netlify/functions"
import axios from 'axios'
// import type { HandlerEvent } from "@netlify/functions"
// import type {  } from "@netlify/functions"
import mailjet from 'node-mailjet'
import { } from 'node-mailjet'
interface MJ_Contact {
  Name: string;
  Email: string;
  ID: string;
  // Tel: string
  // Msg: string
};

type MJ_Res = {
  Data: MJ_Contact[]
}

function addContactToSubcriber(MJ_APIKEY_PUBLIC: string, MJ_APIKEY_PRIVATE: string, mj_nina_sub_id: string, contact_id: string) {
  console.log("addContact: "+contact_id +"list: "+mj_nina_sub_id)
  try {
    mailjet.apiConnect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE)
      .post("listrecipient", { 'version': 'v3' })
      .request({
        "ContactID": contact_id,
        "ListID": mj_nina_sub_id,
      }).then(r => r.response).then(()=> {return true})
    
  } catch (e) { console.log; return false; }

}

async function newMailJetContact(MJ_APIKEY_PUBLIC: string, MJ_APIKEY_PRIVATE: string, formcontact: FormData) {
  try {

    const { data } = await mailjet.apiConnect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE)
      .post("contact", { 'version': 'v3' })
      .request({
        "IsExcludedFromCampaigns": "false",
        "Name": formcontact.get("name"),
        "Email": formcontact.get("email")
      }).then(r => r.response);
      console.log(data)
    const mjres = data as MJ_Res
    console.log(mjres.Data[0].ID)
    
    return mjres.Data[0].ID
  } catch (e) { 
    console.log(e)
    return "Mailjet Error new Contact" }
}

async function sendMailToClient(MJ_APIKEY_PUBLIC: string, MJ_APIKEY_PRIVATE: string, sender: string, formcontact: FormData) {
  console.log("sendMail")
  try {
    const cn = formcontact.get("name")
    const cmail = formcontact.get("email")
    const tel = formcontact.get("tel")
    const msg = formcontact.get("msg")

    mailjet.apiConnect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE)
      .post('send')
      .request({
        FromEmail: sender,
        Subject: 'Du hast Kontakt mit Nina aufgenommen',
        'Text-part':
          `Nina wird sich nach Prüfung deiner Nachricht bei dir melden.
      
        Deine Angaben:
          Name:     ${cn}
          Tel:      ${tel}
          Nachricht:${msg}
        `
        ,
        'Html-part':
          '',
        Recipients: [{ Email: cmail }],
      }).then(r => r.response)
      return "Mail gesendet"
  } catch (e) {
    console.log(e)
    return "Fehler beim Senden"

  }
}

async function sendInfo(MJ_APIKEY_PUBLIC: string, MJ_APIKEY_PRIVATE: string, sender: string, formcontact: FormData, nc :boolean) {
  console.log("sendInfo")
  try {
    const cn = formcontact.get("name")
    const cmail = formcontact.get("email")
    const tel = formcontact.get("tel")
    const msg = formcontact.get("msg")
    let subject = nc ? "Du hast eine Nachricht von einem neuen Kunden" : "Du hast eine neue Nachricht"

    mailjet.apiConnect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE)
      .post('send')
      .request({
        FromEmail: sender,
        Subject: subject,
        'Text-part':
          `Seine angaben im Feld:
          Name:     ${cn}
          Tel:      ${cmail}
          Tel:      ${tel}
          Nachricht:${msg}
        `
        ,
        'Html-part':
          '',
        Recipients: [ 
           { Email: "nina_spiegel@gmx.de" },
          {Email: "robert@pratersch.de" }],
      }).then(r => r.response)
      return "Mail gesendet"
  } catch (e) {
    console.log(e)
    return "Fehler beim Senden"

  }
}


export default async (req: Request, context: Context) => {
  const mj_api_pub = Netlify.env.get("MAILJET_NINA_PUBLIC")
  const mj_api_pri = Netlify.env.get("MAILJET_NINA_PRIVATE")
  const mj_nina_sub_id = Netlify.env.get("MAILJET_NINA_SUBCRIBE_ID")
  const sender = Netlify.env.get("MAILJET_SENDER")
  let x = await req.formData()

  // contact.name = x.get("name")
  // contact.email = x.get("email")
  // contact.tel = x.get("email")
  // contact.msg = x.get("msg")



  if (mj_api_pri && mj_api_pub && mj_nina_sub_id && sender) {
    try {

      const resc = await newMailJetContact(mj_api_pub, mj_api_pri, x)
      console.log("rec"+resc)
      let newc = false
      if (resc != "Mailjet Error new Contact") {
        console.log("ID"+resc)
        await addContactToSubcriber(mj_api_pub, mj_api_pri, mj_nina_sub_id, resc)
        newc = true        
        
      } else {
        new Response("Mailjet Error new Contact2")
        
      }

      const ress = await sendMailToClient(mj_api_pub, mj_api_pri, sender, x)
      const ress2 = await sendInfo(mj_api_pub, mj_api_pri, sender, x, newc)
      return new Response(ress2)
      
    } catch (e) {
      console.log(e)
      new Response(e + "!!")
    }
  } else {
    new Response("Server env is missing a Var!")
  }

  //return new Response(contact_email+" "+mj_nina_sub_id) 
}
