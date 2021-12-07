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
            md="6"
            align-self="stretch"
            v-for="(value, name) in factions"
            :key="name"
          >
            <faction-vehicle-list
              :faction-name="value.faction.name"
              :flag-image="value.faction.flag_image"
              :vehicles="value.vehicles"
            />
          </v-col>
        </v-row>

      </v-container>
  </div>
</template>

<script>
import FactionVehicleList from "@/components/FactionVehicleList.vue";
import FactionsRepo from "@/services/FactionsRepo";
import VehicleRepo from '@/services/VehicleRepo';


export default {
  name: "Home",
  components: {
    FactionVehicleList,
  },
  data: () => {
    return {
      factions: [],
    };
  },
  created: function () {
    const factions = FactionsRepo.factions;

    for (const faction of factions) {
        const factionVehicles = VehicleRepo.getVehiclesInFaction(faction.id);

        this.factions.push({
            faction: faction,
            vehicles: factionVehicles,
        })
    }
  },
};
</script>

<style scoped>
.text-right .v-image {
  display: inline-block;
}
</style>