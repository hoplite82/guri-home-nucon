<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label htmlFor="name">E-Mail</label>
        <input class="form-control" type="text" id="name" name="name" required :value="email" />
      </div>
      <div class="form-group">
        <label htmlFor="email">Nachricht</label>
        <textarea class="form-control" type="text" id="email" name="email" required >
          {{ msg }}
        </textarea>
        
      </div>
      <button class="btn btn-primary" :on-click="handleSubmit" type="button">Subscribe</button>
    </form>
    <div>{{ answer }}</div>
    <div>{{ email }}</div>
    <div>{{msg }}</div>
  </div>
</template>

<script setup>
const email = ref("test@mail.de");
const msg = ref("Tipe Nachricht ein");
const answer = "How this shit will react?";
function handleSubmit() {
  answer = "handleSubmit called";
  console.log("console log");

}
</script>
