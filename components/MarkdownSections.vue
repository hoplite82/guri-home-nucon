<script setup>
function rosaswitch(num) {
  return num % 2 === 0 ? "bg-rosa" : "";
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
        <div class="row">
          <h2 class="h2">{{ tb.title }}</h2>
          <hr class="divider divider-light" />

          
          <NuxtImg v-if="tb.bild" src="/img/nina_boot.jpg" sizes="50vw sm:50vw md:300px lg:500px" style="float: left" class="m-2" />
         
          <ContentRendererMarkdown :value="tb.body" class="markdown"/>
         
        </div>
      </div>
    </section>
  </ContentList>
</template>
