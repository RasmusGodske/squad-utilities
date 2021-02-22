<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/SQUAD_logo.png"
            transition="scale-transition"
            width="100"
          />
        </router-link>
        <router-link to="/" class="router-link-no-style">
          <v-toolbar-title>
            Squad Library
          </v-toolbar-title>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <!-- <Home /> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import Home from "./components/Home.vue";
// import Home from "./views/Home.vue";

export default Vue.extend({
  name: "App",

  components: {
    // Home
  },

  data: () => ({
    //
  }),
});
</script>

<style scoped>

.router-link-no-style{
  text-decoration: none; color: inherit;
}

</style>
