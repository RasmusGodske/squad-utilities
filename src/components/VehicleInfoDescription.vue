<template>
  <v-card
    flat
    tile
    elevation="4"
  >
    <v-toolbar color="primary">
      <v-toolbar-title>Description</v-toolbar-title>
    </v-toolbar>

    <vue-simple-markdown class="markdown" :source="description"></vue-simple-markdown>

  </v-card>
</template>

<script>
export default {
  name: "VehicleInfoDescription",
  components: {},
    props: {
      vehId: String,
    },
  data: () => {
    return {
      description: `Fetching description`,
      noDescription: `## No description found`
    };
  },
  methods: {
    async loadDescription() {
        const description = await this.$vehicleRepo.getDescription(this.vehId);
        if (description !== undefined) {
            this.description = description;
        } else {
            this.description = `No description found.`;
        }
    }
  },
  created: function () {
    this.loadDescription();
  },
};
</script>

<style scoped>
.markdown {
    color: white;
    padding: 1rem;
}
</style>