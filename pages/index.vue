<script setup>
 useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>

<template>
  <main>
    <body id="page-top">
      <AppNav />
      <AppHeader />
      <Services />
      <AboutMe />
      <Chakra />
      <Contact />
      <FooterSite />
    
    </body>
  </main>
</template>