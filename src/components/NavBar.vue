<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img
        src="../assets/icons/house.png"
        alt="Profile"
        class="profile-image" />
      <router-link class="nav-link" to="/">Dashboard</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
    </div>

    <div class="navbar-right">
      <i class="fas fa-bell"></i>
      <i :class="themeIcon" @click="toggleTheme" class="theme-icon"></i>
      <img
        src="../assets/icons/bussiness-man.png"
        alt="Profile"
        class="profile-image" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  mounted() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
    this.applyTheme();
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    themeIcon() {
      return this.isDarkMode ? "fas fa-moon" : "fas fa-sun";
    },
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      const theme = this.isDarkMode ? "dark" : "light";
      if (this.isDarkMode) {
        document.documentElement.setAttribute("data-theme", theme);
      } else {
        document.documentElement.removeAttribute("data-theme");
      }

      localStorage.setItem("theme", theme);
    },
    applyTheme() {
      const theme = this.isDarkMode ? "dark" : "light";
      if (this.isDarkMode) {
        document.documentElement.setAttribute("data-theme", theme);
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--nav-background-color);
  color: var(--nav-text-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensures the navbar stays above other elements */
}

.navbar-left {
  display: flex;
  gap: 20px;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 4%;
}

.nav-link {
  color: var(--nav-text-color);
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  margin-top: 3%;
}

.nav-link:hover {
  font-weight: normal !important;
  text-decoration: none !important;
}

.nav-link:hover {
  text-decoration: underline;
}

/* Icons */
.theme-icon {
  font-size: 18px;
  color: var(--nav-text-color);
  cursor: pointer;
}

.icon {
  font-size: 18px;
  color: var(--nav-text-color);
  cursor: pointer;
}

.profile-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}
</style>
