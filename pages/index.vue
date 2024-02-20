<script setup>
 useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],bodyAttrs: {
    id: 'page-top'
  }
});
</script>

<template>
  <main>
      <AppNav />
      <AppHeader />
      <Services />
      <AboutMe />
      <Chakra />
      <MarkdownSections />
      <Contact />
      <FooterSite />
  </main>
</template>