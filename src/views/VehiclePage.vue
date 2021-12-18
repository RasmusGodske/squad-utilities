<template>
  <div class="vehicle-page">
    <v-container>
      <h1>{{ $route.params.id }}</h1>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    
  },
  data: () => {
    return {
    };
  },
};
</script>

<style scoped>
</style>