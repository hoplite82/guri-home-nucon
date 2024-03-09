<script setup lang="ts">

const loading = ref(false);
const responsemsg = ref("");
const name = ref(""),
  email = ref(""),
  tel = ref(""),
  msg = ref("");

function sendContactMail() {
  loading.value = true;
  $fetch("/mailsend", { method: "POST", params: { name: name.value, email: email.value, tel: tel.value, msg: msg.value }, headers: { stupidSec: '45678' } })
    .then((res) => (responsemsg.value = res + ""))
    .catch((e) => (responsemsg.value = e));
  loading.value = false;
}

</script>
<template>
  <section class="page-section bg-rosa" id="contact">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-8 col-xl-6 text-center text-white">
          <h2 class="mt-0">Kontakt</h2>
          <hr class="divider" />
          <p class="mb-5"></p>
        </div>
      </div>
      <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
        <div class="col-lg-6">
          <form id="guri-contact-form" @submit.prevent="sendContactMail">
            <!-- Name input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="name" name="name" type="text" placeholder="Vorname Nachname" v-model="name" required />
              <label for="name">Vor und Nachname</label>
            </div>
            <!-- Email address input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="emailinput" name="mail" type="email" placeholder="name@example.com" v-model="email" required />
              <label for="emailinput">Email</label>
            </div>
            <!-- Phone number input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="phone" name="phone" type="tel" placeholder="0156 35850456" v-model="tel"/>
              <label for="phone">Telefonnummer</label>
            </div>
            <!-- Message input-->
            <div class="form-floating mb-3">
              <textarea type="textarea" class="form-control" id="message" name="massage" placeholder="Enter your message here..." style="height: 10rem" v-model="msg" ></textarea>
              <label for="message">Nachricht</label>
            </div>
            <!-- Submit success message-->
            <!---->
            <!-- This is what your users will see when the form-->
            <!-- has successfully submitted-->
            <div id="submitSuccessMessage">
              <div v-if="loading" class="fw-bolder text-center mb-3">Waiting</div>
              <div v-if="responsemsg" class="fw-bolder text-center mb-3">{{ responsemsg }}</div>
            </div>
            <!-- Submit Button-->
            <div class="d-grid col-6 mx-auto">
              
              <PrimeButton class="btn btn-primary rounded-pill " icon="pi pi-send" type="submit" label="Submit" :loading="loading" />
            </div>
           
          </form>
        </div>
      </div>
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-4 text-center mb-5 mb-lg-0">
          <i class="bi-phone fs-2 mb-3 text-muted"></i>
          <div>0176 30678459</div>
        </div>
      </div>
    </div>
  </section>
</template>
