<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import { onMounted } from "vue";

const pageTitle = "House Rental"; // The dynamic title
const faviconPath = "./src/assets/icons/buddhist.png"; // The path to your icon
onMounted(() => {
  // Set the document title
  document.title = pageTitle;

  // Set the favicon dynamically
  const link = document.querySelector(
    "link[rel~='icon']"
  ) as HTMLLinkElement | null;
  if (!link) {
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.type = "image/png";
    newLink.href = faviconPath;
    document.head.appendChild(newLink);
  } else {
    link.href = faviconPath;
  }
});
</script>

<template>
  <NavBar />
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped></style>
