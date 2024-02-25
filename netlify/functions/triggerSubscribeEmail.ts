import { sendEmail } from "@netlify/emails";

await sendEmail({
  from: "mail@spiegel-yoga.de",
  to: "robert@pratersch.de",
  subject: "test",
  template: "test",
  parameters: {
    name: "Horst"
  },
});