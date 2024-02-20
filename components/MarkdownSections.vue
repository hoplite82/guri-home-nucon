<template>
  <ContentList path="/textblock" v-slot="{ list }">
    
      <section v-for="tb in list.sort((a, b) => a.id - b.id).slice(1)" :key="tb.id" class="page-section" @id="tb.title">
        <div class="container px-4 px-lg-5 text-center " v-if="tb.show" >
          <h2>{{ tb.title }}</h2>
          <hr class="divider divider-light" />
          <ContentRenderer>
            <p class="taj fs-4"><ContentRenderer :value="tb" /></p>
          </ContentRenderer>
        </div>
      
      </section>
  </ContentList>
</template>
