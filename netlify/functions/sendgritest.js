// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail';
// spiegel yoga key
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'robert.pratersch@freenet.de', // nina_spiegel@gmx.de Change to your recipient
  from: 'mail@yoga-spiegel.de', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun ',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
