<template>
  <div class="vehicle-page">
    <v-container>
      <v-card
        flat
        tile
        elevation="4"
        height="100%"
      >
        <v-toolbar color="primary">
          <v-toolbar-title>{{ $route.params.id }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text>
          <v-row justify="center">
            <v-col cols="6">
              <v-img
                class="ml-auto"
                rel="preload"
                contain
                v-for="(image, side) in vehicle.model.real"
                :key="image"
                v-show="side == selectedView"
                :src="image"
              ></v-img>
            </v-col>
            <v-col cols="6">
              <v-img
                class="ml-auto"
                rel="preload"
                contain
                v-for="(image, side) in vehicle.model.armour"
                :key="image"
                v-show="side == selectedView"
                :src="image"
              ></v-img>
            </v-col>
          </v-row>
          <v-row
            justify="center"
            class="image-list-sides"
          >
            <v-col cols="2" class="view-side-image-col">
              <v-img
                class="ml-auto view-side-image-btn"
                contain
                height="100"
                :src="vehicle.model.real.right"
                v-on:click="selectedView='right'"
              ></v-img>
            </v-col>
             <v-col cols="2" class="view-side-image-col">
              <v-img
                class="ml-auto view-side-image-btn"
                contain
                height="100"
                :src="vehicle.model.real.left"
                v-on:click="selectedView='left'"
              ></v-img>
            </v-col>
            <v-col cols="2" class="view-side-image-col">
              <v-img
                class="ml-auto view-side-image-btn"
                contain
                height="100"
                :src="vehicle.model.real.back"
                v-on:click="selectedView='back'"
              ></v-img>
            </v-col>
            <v-col cols="2" class="view-side-image-col">
              <v-img
                class="ml-auto view-side-image-btn"
                contain
                height="100"
                :src="vehicle.model.real.front"
                v-on:click="selectedView='front'"
              ></v-img>
            </v-col>
            <v-col cols="2" class="view-side-image-col">
              <v-img
                class="ml-auto view-side-image-btn"
                contain
                height="100"
                :src="vehicle.model.real.top"
                v-on:click="selectedView='top'"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import vehicleJson from "@/assets/vehicles.json";

import VehicleRepo from "@/services/VehicleRepo";

export default {
  name: "Home",
  components: {},
  data: () => {
    return {
      vehicle: {},
      selectedView: "top",
      views: ["right", "left", "front", "back", "top"],
    };
  },
  created: function () {
      // this.vehicle = vehicleJson[this.$route.params.id];
    console.log(this.$route.params.id);
    this.vehicle = VehicleRepo.getVehicleByID(this.$route.params.id);
    console.log("this.vehicle", this.vehicle);


  },
  computed: {
    vehicleViews: function () {
      const obj = {
        left: {
          real: this.vehicle.model.real.left,
          armourModel: this.vehicle.model.armour.left,
        },
        right: {
          real: this.vehicle.model.real.right,
          armourModel: this.vehicle.model.armour.right,
        },
        front: {
          real: this.vehicle.model.real.front,
          armourModel: this.vehicle.model.armour.front,
        },
        back: {
          real: this.vehicle.model.real.back,
          armourModel: this.vehicle.model.armour.back,
        },
        top: {
          real: this.vehicle.model.real.top,
          armourModel: this.vehicle.model.armour.top,
        },
      };
      console.log(obj);
      return obj;
    },
  },
};
</script>

<style scoped>
.image-list-sides {
  height: 200px;
}

.view-side-image-btn {
  cursor: pointer;
}

</style>