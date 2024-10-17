import { createApp } from "vue";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);

// Set the global page title
document.title = "House Rental";

// Set the global favicon
const faviconPath = "./src/assets/icons/bussiness-man.png";
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

app.mount("#app");
