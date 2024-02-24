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
          <form id="gur-contactForm" method="POST" data-netlify="true">
            <!-- Name input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="name" name="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
              <label for="name">Vor und Nachname</label>
              <div class="invalid-feedback" data-sb-feedback="name:required">Name benötigt</div>
            </div>
            <!-- Email address input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="email" name="mail" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
              <label for="email">Email</label>
              <div class="invalid-feedback" data-sb-feedback="email:required">Email benötigt.</div>
              <div class="invalid-feedback" data-sb-feedback="email:email">Email ist nicht valide.</div>
            </div>
            <!-- Phone number input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="phone" name="phone" type="tel" placeholder="0156 35850456" data-sb-validations="required" />
              <label for="phone">Telefonnummer</label>
              <div class="invalid-feedback" data-sb-feedback="phone:required">Telefonnummer erwünscht.</div>
            </div>
            <!-- Message input-->
            <div class="form-floating mb-3">
              <textarea class="form-control" id="message" name="massage" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
              <label for="message">Nachricht</label>
              <div class="invalid-feedback" data-sb-feedback="message:required">Nachricht benötigt.</div>
            </div>
            <!-- Submit success message-->
            <!---->
            <!-- This is what your users will see when the form-->
            <!-- has successfully submitted-->
            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3">
                <div class="fw-bolder">Nachricht übertragen.</div>
                Muss noch aktiviert werden.
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>
            <!-- Submit error message-->
            <!---->
            <!-- This is what your users will see when there is-->
            <!-- an error submitting the form-->
            <div class="d-none" id="submitErrorMessage">
              <div class="text-center text-danger mb-3">Error sending message!</div>
            </div>
            <!-- Submit Button-->
            <div class="d-grid">
              <button class="btn btn-primary btn-xl" id="submitButton" type="submit">Submit</button>
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
