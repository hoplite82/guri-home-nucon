
import Client from 'node-mailjet';


export default defineEventHandler((event) => {
  
  const {name,email,tel,msg} = getQuery(event)
 
  

  const { MAILJET_NINA_PUBLIC, MAILJET_NINA_PRIVATE, MAILJET_SENDER,CONTACT_TO_EMAIL_ADDRESS } = process.env
  let mailjetresult
  if (MAILJET_NINA_PRIVATE && MAILJET_NINA_PUBLIC && MAILJET_SENDER && CONTACT_TO_EMAIL_ADDRESS) {
    Client.apiConnect(MAILJET_NINA_PUBLIC, MAILJET_NINA_PRIVATE).post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: MAILJET_SENDER,
            Name: 'Robert',
          },
          To: [
            {
              Email: CONTACT_TO_EMAIL_ADDRESS,
              Name: name
            },
          ],
          Subject: "Neue Kontaktnachricht von "+name,
          TextPart: `Name : ${name} E-Mail: ${email} Telefon: ${tel}
          Nachricht:
          ${msg}
          `,
          HtmlPart: `<a src="">In Kontaktlist aufnehmen</a>`
        },
      ],
    }).then((result: { body: any; }) => {
      console.log(result.body)
      mailjetresult = result.body
    })
      .catch((err: { statusCode: any; }) => {
        console.log(err.statusCode)
        mailjetresult = err.statusCode
      })


  } else{
    mailjetresult = "No MailjetKeys in Server process"
  }



  return {
    MAILJET_NINA_PRIVATE, MAILJET_NINA_PUBLIC, mailjetresult


  }
})
