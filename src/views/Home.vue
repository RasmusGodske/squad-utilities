<template>
  <div class="home">
      <v-container>
        <v-row
          justify="center"
          align-self="center"
        >
          <v-col
            cols="12"
            sm="6"
            md="4"
            align-self="stretch"
            v-for="(value, name) in factions"
            :key="name"
          >
            <faction-vehicle-list
              :faction-name="value.name"
              :flag-image="value.flag"
              :vehicles="value.vehicles"
            />
          </v-col>
        </v-row>

      </v-container>
  </div>
</template>

<script>
import FactionVehicleList from "@/components/FactionVehicleList.vue";
import factionsJson from "@/assets/factions.json";

export default {
  name: "Home",
  components: {
    FactionVehicleList,
  },
  data: () => {
    return {
      factions: {},
    };
  },
  created: function () {
    this.factions = factionsJson;
    // console.log(this.factions.us.vehicles)
    console.log(this.factions);
  },
};
</script>

<style scoped>
.text-right .v-image {
  display: inline-block;
}
</style>