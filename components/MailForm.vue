<template>
  <div class="container">
    <form >
      <div class="form-group">
        <label htmlFor="name">Name</label>
        <input class="form-control" type="text" id="name" name="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label htmlFor="email">E-Mail</label>
        <input class="form-control" type="text" id="email" name="email" placeholder="Massage Text" v-model="mail" required />
      </div>
      <div class="form-group">
        <label htmlFor="email">Nachricht</label>
        <textarea class="form-control" type="text" id="email" name="email" placeholder="Massage Text" v-model="Msg" required></textarea>
      </div>
      <button class="btn btn-primary" @click="sendMail" type="button">Subscribe</button>
    </form>
    <div>{{ name }}</div>
    <div>{{ answer.data.value}}</div>
    <div>{{ fetchmessage }}</div>
    
  </div>
</template>

<script setup>
const name = ref("Name");
const mail = ref("test@mail.de");
const Msg = ref("");
"const url = useRequestURL().origin"
const url = "http://localhost:8888"
const answer = await useFetch(url+"/.netlify/functions/hello-world",{query: {name: 'Robert'}})
let fetchmessage="fetched msg"
fetch(url+"/.netlify/functions/hello-world").then(r =>r.json()).then(o=> fetchmessage= o.message).catch(e=>fetchmessage=e.error)

async function sendMail() {
  const response = await fetch(url+"/.netlify/functions/triggerSubscribeEmail", {
    method: "POST",
    body: JSON.stringify({
      contactName: name.value,
      contactEmail: mail.value,
      message: Msg.value,
    }),
  })
  const data = await response.json()
  console.log(data)

}
</script>
