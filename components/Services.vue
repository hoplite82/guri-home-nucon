<script setup>
</script>

<template>
  <section class="page-section bg-white" id="Kurse">
    <div class="container px-4 px-lg-5">
      <ContentDoc path="/textblock/textblock-1" v-slot="{ doc }"> 
      <h2 class="text-center mt-0">{{doc.title}}</h2>
      <hr class="divider" />
      <ContentRenderer :value="doc" />
      </ContentDoc>
      <div class="row gx-4 gx-lg-5">
        <div class="col-lg-6 col-md-12 text-center">
          <div class="mt-4 card bg-light">
            <ContentDoc path="/textblock/textblock-2" v-slot="{ doc }">
              <div class="mb-2"><i class="fs-1 text-primary"></i></div>
              <h3 class="h4 mb-2">{{ doc.title }}</h3>
              <p class="text-muted mb-0 p-2">
                <ContentRenderer :value="doc" />
              </p>
            </ContentDoc>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 text-center">
          <div class="mt-4 card bg-light">
            <div class="mb-2"><i class="fs-1 text-primary"></i></div>
            <ContentDoc path="/textblock/textblock-3" v-slot="{ doc }">
            <h3 class="h4 mb-2">{{ doc.title }}</h3>
            <p class="text-muted mb-2 p-2">
              <ContentRenderer :value="doc" />
            </p>
            </ContentDoc>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 text-center">
          <div class="mt-4 card bg-light">
            <div class="mb-2"><i class="fs-1 text-primary"></i></div>
            <ContentDoc path="/textblock/textblock-4" v-slot="{ doc }">
            <h3 class="h4 mb-2">{{ doc.title }}</h3>
            <p class="text-muted mb-2 p-2">
              <ContentRenderer :value="doc" />
            </p>
          </ContentDoc>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
