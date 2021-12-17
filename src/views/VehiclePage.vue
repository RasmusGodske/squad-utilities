<template>
  <v-container fluid>
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
        <v-row
          justify="space-around"
          class="top-image mb-6"
        >
          <v-col
            cols="5"
            fill-height
            class="image-preview"
          >
            <v-img
              class="ml-auto vehicle-image"
              rel="preload"
              aspect-ratio="1"
              contain
              v-for="(image, side) in vehicle.model.real"
              :key="image"
              v-show="side == selectedView"
              :src="image"
            ></v-img>
          </v-col>
          <v-col
            cols="5"
            fill-height
            class="image-preview"
          >
            <v-img
              class="vehicle-image"
              rel="preload"
              aspect-ratio="1"
              contain
              v-for="(image, side) in vehicle.model.armour"
              :key="image"
              v-show="side == selectedView"
              :src="image"
            ></v-img>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="space-around"
          class="image-list-sides"
        >
          <v-col class="view-side-image-col">
            <h2 class="side-title">Right</h2>
            <v-img
              class="view-side-image-btn"
              contain
              :aspect-ratio="16/9"
              cols="2"
              :src="vehicle.model.real.right"
              v-on:click="selectedView='right'"
            ></v-img>
          </v-col>
          <v-col class="view-side-image-col">
            <h2 class="side-title">Left</h2>
            <v-img
              class="view-side-image-btn"
              contain
              :aspect-ratio="16/9"
              cols="2"
              :src="vehicle.model.real.left"
              v-on:click="selectedView='left'"
            ></v-img>
          </v-col>
          <v-col class="view-side-image-col">
            <h2 class="side-title">Back</h2>
            <v-divider />
            <v-img
              class="view-side-image-btn"
              contain
              :aspect-ratio="16/9"
              cols="2"
              :src="vehicle.model.real.back"
              v-on:click="selectedView='back'"
            ></v-img>
          </v-col>
          <v-col class="view-side-image-col">
            <h2 class="side-title">Front</h2>
            <v-img
              class="view-side-image-btn"
              contain
              :aspect-ratio="16/9"
              cols="2"
              :src="vehicle.model.real.front"
              v-on:click="selectedView='front'"
            ></v-img>
          </v-col>
          <v-col class="view-side-image-col">
            <h2 class="side-title">Top</h2>
            <v-img
              class="view-side-image-btn"
              contain
              :aspect-ratio="16/9"
              cols="2"
              :src="vehicle.model.real.top"
              v-on:click="selectedView='top'"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
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

.view-side-image-col md=2 sm=4 {
  margin: 0.2rem;
}

.view-side-image-btn {
  cursor: pointer;
  widows: 100%;
}

.image-preview {
  padding: 1rem;
  background: black;
}

.vehicle-image {
  max-height: 30rem;
  /* height: 100%; */
  /* width: 100%; */
  /* object-fit: contain; */
}

.side-title {
  text-align: center;
  margin-bottom: 0.5rem;
}
</style>