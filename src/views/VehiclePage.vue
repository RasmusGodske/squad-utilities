<template>
  <v-container fluid>
    <v-row>
      <v-col
        lg=8
        md=12
        sm=12
      >
        <v-card
          flat
          tile
          elevation="4"
          height="100%"
        >
          <v-toolbar color="primary">
            <v-toolbar-title @click="loadSettings">{{ $route.params.id }}</v-toolbar-title>
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
                <template>
                  <v-tabs
                    v-model="currentPreviewLeftTab"
                    background-color="transparent"
                    grow
                  >
                    <v-tab
                      v-for="tab in previewTabs"
                      :key="tab"
                    >
                      {{ tab }}
                    </v-tab>
                  </v-tabs>

                </template>

                <div v-show="currentPreviewLeftTab == 0">
                  <v-img
                    class="vehicle-image"
                    rel="preload"
                    aspect-ratio="1"
                    contain
                    v-for="(image, side) in vehicle.model.real"
                    :key="image"
                    v-show="side == selectedView"
                    :src="image"
                  ></v-img>
                </div>
                <div v-show="currentPreviewLeftTab == 1">
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
                </div>
                <div v-show="currentPreviewLeftTab == 2">
                  <v-img
                    class="vehicle-image"
                    rel="preload"
                    aspect-ratio="1"
                    contain
                    v-for="(image, side) in vehicle.model.internal"
                    :key="image"
                    v-show="side == selectedView"
                    :src="image"
                  ></v-img>
                </div>
              </v-col>
              <v-col
                cols="5"
                fill-height
                class="image-preview"
              >
                <template>
                  <v-tabs
                    v-model="currentPreviewRightTab"
                    background-color="transparent"
                    grow
                  >
                    <v-tab
                      v-for="tab in previewTabs"
                      :key="tab"
                    >
                      {{ tab }}
                    </v-tab>
                  </v-tabs>

                </template>

                <div v-show="currentPreviewRightTab == 0">
                  <v-img
                    class="vehicle-image"
                    rel="preload"
                    aspect-ratio="1"
                    contain
                    v-for="(image, side) in vehicle.model.real"
                    :key="image"
                    v-show="side == selectedView"
                    :src="image"
                  ></v-img>
                </div>
                <div v-show="currentPreviewRightTab == 1">
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
                </div>
                <div v-show="currentPreviewRightTab == 2">
                  <v-img
                    class="vehicle-image"
                    rel="preload"
                    aspect-ratio="1"
                    contain
                    v-for="(image, side) in vehicle.model.internal"
                    :key="image"
                    v-show="side == selectedView"
                    :src="image"
                  ></v-img>
                </div>

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
      </v-col>

      <v-col
        lg=4
        md=12
      >
        <v-card
          flat
          tile
          elevation="4"
          height="100%"
        >
          <v-toolbar color="primary">
            <v-toolbar-title>Info</v-toolbar-title>
          </v-toolbar>

          <v-card-title class="text-h4 faction-title">
            Factions
          </v-card-title>

          <v-row
            align="center"
            justify="end"
            v-for="faction in vehicle.factions"
            :key="faction.id"
            class="faction-item"
          >
            <v-col
              col=10
              class="faction-item"
            >
              <h4>{{faction.name}}</h4>
            </v-col>
            <v-col col=2>
              <v-img
                class="faction-flag"
                contain
                :aspect-ratio="16/9"
                :src="faction.flag_image"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VehicleRepo from "@/services/VehicleRepo";

export default {
  name: "Home",
  components: {},
  data: () => {
    return {
      vehicle: {},
      selectedView: "top",
      views: ["right", "left", "front", "back", "top"],
      currentPreviewLeftTab: localStorage.getItem("currentPreviewLeftTab"),
      currentPreviewRightTab: localStorage.getItem("currentPreviewRightTab"),
      previewTabs: ["real", "armour", "internal"],
    };
  },
  created: function () {
    this.vehicle = VehicleRepo.getVehicleByID(this.$route.params.id);
    console.log("this.vehicle", this.vehicle);
  },
  watch: {
    currentPreviewLeftTab: function (newVal) {
      if (newVal !== null) {
        localStorage.setItem(
          "currentPreviewLeftTab",
          this.currentPreviewLeftTab
        );
        console.log("currentPreviewLeftTab", this.currentPreviewLeftTab);
      }
    },
    currentPreviewRightTab: function (newVal) {
      if (newVal !== null) {
        localStorage.setItem(
          "currentPreviewRightTab",
          this.currentPreviewRightTab
        );
        console.log("currentPreviewRightTab", this.currentPreviewRightTab);
      }
    },
  },
  mounted() {
    this.loadSettings();

    console.log("this.currentPreviewLeftTab", this.currentPreviewLeftTab);
    console.log("this.currentPreviewLeftTab", this.currentPreviewLeftTab);
  },
  methods: {
    loadSettings() {
      const leftTab = localStorage.getItem("currentPreviewLeftTab");
      const rightTab = localStorage.getItem("currentPreviewRightTab");

      this.currentPreviewLeftTab = parseInt(leftTab);
      this.currentPreviewRightTab = parseInt(rightTab);
    },
  },
};
</script>

<style scoped>
.image-list-sides {
  height: 200px;
}

.view-side-image-col {
  margin: 0.2rem;
}

.view-side-image-btn {
  cursor: pointer;
  widows: 100%;
}

.image-preview {
  /* padding: 1rem; */
  padding: 0 !important;
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
</style>