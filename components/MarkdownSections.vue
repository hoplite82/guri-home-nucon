<script setup>
function rosaswitch(number) {
  return number % 2 === 0 ? "bg-rosa" : "";
}
// const textblocks = await queryContent("textblock").find();
</script>
<template>
  <ContentList path="/textblock" v-slot="{ list }">
    
      <section
        v-for="tb in list
          .sort((a, b) => a.id - b.id)
          .slice(1)
          .filter((tb) => tb.show)"
        :key="tb.id"
        :id="tb.section"
        :class="['page-section', rosaswitch(tb.id)]">
        <div class="container">
          <h2 class="h2">{{ tb.title }}</h2>
          <hr class="divider divider-light" />

          <div v-if="tb.bild">
            <NuxtImg src="/img/nina_boot.jpg" sizes="50vw sm:50vw md:300px lg:500px" style="float: left" class="m-2" />
          </div>
          <ContentRendererMarkdown :value="tb.body" />
        </div>
      </section>
    
  </ContentList>
</template>
