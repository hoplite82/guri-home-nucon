<script setup lang="ts">
const responsemsg = ref("")
const contactfrom = ref<HTMLFormElement | undefined>(undefined)
let loading = ref(false)

async function sendMail() {
  loading.value = true
  if (contactfrom.value instanceof HTMLFormElement) {

    const formdata = new FormData(contactfrom.value)
    const { data, pending, error } = await useFetch(".netlify/functions/hello-world", { method: "post", body: formdata })
    setAnswer(data?.value + "")
    

  }
  loading.value = false
}

function setAnswer(ans: string) {
  responsemsg.value = ans
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
          <form ref="contactfrom" id="guri-contact-form" >
            <!-- Name input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="name" name="name" type="text" placeholder="Vorname Nachname" required />
              <label for="name">Vor und Nachname</label>
            </div>
            <!-- Email address input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="emailinput" name="email" type="email" placeholder="name@example.com" required />
              <label for="emailinput">Email</label>
            </div>
            <!-- Phone number input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="phone" name="tel" type="tel" placeholder="0156 35850456" />
              <label for="phone">Telefonnummer</label>
            </div>
            <!-- Message input-->
            <div class="form-floating mb-3">
              <textarea type="textarea" class="form-control" id="message" name="msg" placeholder="Enter your message here..." style="height: 10rem" ></textarea>
              <label for="message">Nachricht</label>
            </div>
           
          </form>
          <div class="d-grid col-6 mx-auto">
            <div id="submitSuccessMessage">
              <div v-if="loading" class="fw-bolder text-center mb-3">Waiting</div>
              <div v-if="responsemsg" class="fw-bolder text-center mb-3">{{ responsemsg }}</div> 
              <!-- <div id="response-msg" class="fw-bolder text-center mb-3"></div> -->
            </div>  
          <PrimeButton @click="sendMail" class="btn btn-primary rounded-pill " icon="pi pi-send" type="submit" label="Submit" />
        </div>
        </div>
      </div>
      <!-- <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-4 text-center mb-5 mb-lg-0">
          <i class="bi-phone fs-2 mb-3 text-muted"></i>
          <div>0176 30678459</div>
        </div>
      </div> -->
    </div>
  </section>
</template>

