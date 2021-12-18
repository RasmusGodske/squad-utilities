<template>
  <v-card
    flat
    tile
    elevation="4"
  >
    <v-toolbar color="primary">
      <v-toolbar-title>Factions</v-toolbar-title>
    </v-toolbar>

    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr
            v-for="faction in factions"
            :key="faction.id"
            class="faction-tr"
          >
            <td>{{ faction.name }}</td>
            <td>
              <v-img
                class="faction-flag"
                contain
                :aspect-ratio="16/9"
                :src="faction.flag_image"
              ></v-img>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "VehicleInfoFactionList",
  components: {},
  props: {
    factions: Array,
  },
  data: () => {
    return {};
  },
  created: function () {
    console.log("this.factions", this.factions);
  },
};
</script>

<style scoped>
.faction-title {
  padding-bottom: 0;
}

.faction-item {
  margin: 0.1rem;
}

.faction-flag {
  width: auto;
  height: 2rem;
}
/* Remove Hover effect on table */
.faction-tr:hover {
  background-color: unset !important;
}
</style>