<template>
  <v-container fluid>
    <v-row
      justify="center"
      align-self="center"
    >
      <v-col
        lg=10
        md=12
        sm=12
      >

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
      </v-col>

      <v-col lg=2>
        <v-row>
          <v-col>

            <v-card
              elevation="4"
              dense
            >
              <v-toolbar color="primary">
                <v-toolbar-title>Credits</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>

              <v-card-text>
                <a href="https://steamcommunity.com/profiles/76561198067876199">SirRyser</a> for helping out with taking screenshots and organizing the images.
              </v-card-text>

              <v-card-text>
                <a href="https://steamcommunity.com/id/Husky_AUT">Mjölnir Husky</a> for helping out with the vehicle armour & internal images.Multiple images comes from his <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1667425152">Vehicle Armor Training mod</a>.
              </v-card-text>
              <v-divider />

            </v-card>

          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card
              elevation="4"
              dense
            >
              <v-toolbar color="primary">
                <v-toolbar-title>Server</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>

              <v-card-text>
                <v-row>
                  <v-col>
                    If you wanna play around with vehicles for yourself with Husky's Vehicle mod.
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-btn
                      depressed
                      color="primary"
                      href="steam://connect/62.107.0.209:27165"
                    >
                      Join Server
                    </v-btn>
                  </v-col>
                </v-row>

              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import FactionVehicleList from "@/components/FactionVehicleList.vue";


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
    const factions = this.$factionsRepo.factions;

    for (const faction of factions) {
      const factionVehicles = this.$vehicleRepo.getVehiclesInFaction(faction.id);

      this.factions.push({
        faction: faction,
        vehicles: factionVehicles,
      });
    }
  },
};
</script>

<style scoped>
.text-right .v-image {
  display: inline-block;
}
</style>