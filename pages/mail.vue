<template>
  <div class="container">
    <h1 class="title">Contact</h1>

    <article v-for="msg in messages" :key="msg.text" class="message" :class="msg.type === 'success' ? 'is-success' : 'is-danger'">
      <div class="message-body">
        {{ msg.text }}
      </div>
    </article>

    <section class="contact-form">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input v-model="contactName" class="input" type="text" />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="contactEmail" class="input" type="email" />
        </div>
      </div>

      <div class="field">
        <label class="label">Your Message</label>
        <div class="control">
          <textarea v-model="contactMessage" class="textarea" />
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click="sendMessage">Send Message</button>
        </div>
        <div class="control">
          <button class="button is-text" @click="cancelMessage">Cancel</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { sendEmail } from "@netlify/emails";

// await sendEmail({
//   from: "mail@yoga-spiegel.de",
//   to: "robert@pratersch.de",
//   subject: "test",
//   template: "test",
//   parameters: {
//     name: "Horst2",
//   },
// });

// await fetch(
//   `${process.env.URL}/.netlify/functions/emails/test`,
//   {
//     headers: {
//       "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
//     },
//     method: "POST",
//     body: JSON.stringify({
//       from: "",
//       to: "",
//       subject: "",
//       parameters: {
//         name: ""
//       },
//     }),
//   }
// );
</script>
