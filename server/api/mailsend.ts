import Client from 'node-mailjet';


export default defineEventHandler((event) => {
  const { stupidsec } = getHeaders(event)
  if (stupidsec == '45678') {
    const { name, email, tel, msg } = getQuery(event)
    const res = name + " " + email + " " + tel + " \n" + msg
    console.log(stupidsec)
    console.log(event)
    const live = true;
    // start mailsend
    const { MAILJET_NINA_PUBLIC, MAILJET_NINA_PRIVATE, MAILJET_SENDER, CONTACT_TO_EMAIL_ADDRESS } = process.env
    let mailjetresult
    if (MAILJET_NINA_PRIVATE && MAILJET_NINA_PUBLIC && MAILJET_SENDER && CONTACT_TO_EMAIL_ADDRESS && live) {
      Client.apiConnect(MAILJET_NINA_PUBLIC, MAILJET_NINA_PRIVATE).post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: MAILJET_SENDER,
              Name: 'Contact-Form from yoga-spiegel.de',
            },
            To: [
              {
                Email: CONTACT_TO_EMAIL_ADDRESS,
                Name: 'robert'
              },
            ],
            Subject: "Neue Kontaktnachricht von " + name,
            TextPart: `Name : ${name} E-Mail: ${email} Telefon: ${tel}
            Nachricht:
            ${msg}
            `
            // HtmlPart: `<a src="">In Kontaktlist aufnehmen</a>`
          },
        ],
      }).then((result: { body: any; }) => {
        console.log(result.body)
        mailjetresult = "Mail sended"
        
      })
        .catch((err: { statusCode: any; }) => {
          console.log(err.statusCode)
          mailjetresult = err.statusCode
        })


    } else {
      mailjetresult = "No MailjetKeys in Server process or MailSendFunction not activated"
    }
 


    return {
      mailjetresult
    }
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify('Unauthorized')
    }
  }
})
