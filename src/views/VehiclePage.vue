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
            <v-col cols="5">
              <v-img
                class="ml-auto"
                contain
                :src="vehicleViews[selectedView].armourModel"
              ></v-img>
            </v-col>
            <v-col cols="5">
              <v-img
                class="ml-auto"
                contain
                :src="vehicleViews[selectedView].real"
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
                :src="vehicle.images.real.right"
                v-on:click="selectedView='right'"
              ></v-img>
            </v-col>
            <v-col cols="2" class="view-side-image-col">
              <v-img
                class="ml-auto view-side-image-btn"
                contain
                height="100"
                :src="vehicle.images.real.left"
                v-on:click="selectedView='left'"
              ></v-img>
            </v-col>
            <v-col cols="2" class="view-side-image-col">
              <v-img
                class="ml-auto view-side-image-btn"
                contain
                height="100"
                :src="vehicle.images.real.back"
                v-on:click="selectedView='back'"
              ></v-img>
            </v-col>
            <v-col cols="2" class="view-side-image-col">
              <v-img
                class="ml-auto view-side-image-btn"
                contain
                height="100"
                :src="vehicle.images.real.front"
                v-on:click="selectedView='front'"
              ></v-img>
            </v-col>
            <v-col cols="2" class="view-side-image-col">
              <v-img
                class="ml-auto view-side-image-btn"
                contain
                height="100"
                :src="vehicle.images.real.top"
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
    console.log(this.$route.params.id);
    console.log(vehicleJson);
    this.vehicle = vehicleJson[this.$route.params.id];
    console.log(this.vehicle);
  },
  computed: {
    vehicleViews: function () {
      const obj = {
        left: {
          real: this.vehicle.images.real.left,
          armourModel: this.vehicle.images.armourModel.left,
        },
        right: {
          real: this.vehicle.images.real.right,
          armourModel: this.vehicle.images.armourModel.right,
        },
        front: {
          real: this.vehicle.images.real.front,
          armourModel: this.vehicle.images.armourModel.front,
        },
        back: {
          real: this.vehicle.images.real.back,
          armourModel: this.vehicle.images.armourModel.back,
        },
        top: {
          real: this.vehicle.images.real.top,
          armourModel: this.vehicle.images.armourModel.top,
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