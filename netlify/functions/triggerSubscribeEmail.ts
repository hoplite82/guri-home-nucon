import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }
  const requestBody = JSON.parse(event.body) as {
    contactName: string,
    contactEmail: string,
    message: string,
  };

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  await fetch(`${process.env.URL}/.netlify/functions/emails/test`, {
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
    },
    method: "POST",
    body: JSON.stringify({
      from: 'mail@yoga-spiegel.de',
      to: 'robert@pratersch.de',
      subject: "New Subscriber "+requestBody.contactName,
      parameters: {
        name: requestBody.contactName,
        email: requestBody.contactEmail,
        msg: requestBody.message,
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify("Subscribe email sent!"),
  };
};

export { handler };
