// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail';
sgMail.setApiKey('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')
const msg = {
  to: 'robert.pratersch@freenet.de', // Change to your recipient
  from: 'mail@yoga-spiegel.de', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
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