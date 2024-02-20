<script setup></script>

<template>
  <section class="page-section bg-white" id="Kurse">
    <div class="container">
      <ContentDoc path="/textblock/textblock-1" v-slot="{ doc }">
        <h2 class="text-center mt-0">{{ doc.title }}</h2>
        <hr class="divider" />
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </div>
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5">
        <ContentList path="/kurse" v-slot="{ list }">
          <div v-for="kurs in list.filter((k) => k.show).sort((a, b) => a.order - b.order)" :key="kurs.order" class="col-lg-6 col-md-12 my-2">
            <div class="m-2 card bg-light text-center px-2" style="min-height: 100%" v-if="kurs.overlay">
              <img class="card-img" src="/img/coming-soon.png" style="max-height: 20%;width: auto;" alt="" />
              <div class="card-img-overlay">
                <div class="overlay-content">
                  <h4 class="m-2">{{ kurs.title }}</h4>
                  <p class="text-muted mb-2"><ContentRenderer :value="kurs" /></p>
                </div>
              </div>
            </div>
            <div class="m-2 card bg-light text-center px-2 mx-auto" style="min-height: 100%" v-else>
                  <h4 class="m-2">{{ kurs.title }}</h4>
                  <p class="text-muted mb-2"><ContentRenderer :value="kurs" /></p>
                  <p class="mx-auto"><a type="button" class="btn btn-primary" href="#contact">Buchen</a></p>
            </div>
          </div>
        </ContentList>
      </div>
    </div>
  </section>
</template>
