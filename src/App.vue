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
            Squad Utilities
          </v-toolbar-title>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/RasmusGodske/squad-utilities"
        text
      > 
        <span class="mr-2">Source Code</span>
        <v-icon >mdi-github</v-icon>
      </v-btn>
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
