<template>
  <v-card
    flat
    tile
    elevation="4"
    height="100%"
  >
    <v-toolbar color="primary">
      <v-toolbar-title>{{factionName}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img
        class="ml-auto"
        max-height="80px"
        max-width="90px"
        contain
        :src="flagImage"
      ></v-img>
    </v-toolbar>

    <v-card-text>
      <v-list
        class="vehicle-list"
        flat
      >
        <v-list-item-group color="primary">
          <div
            v-for="(item, i) in vehicles"
            :key="i"
          >
            <v-list-item
              class="vehicle-list-item"
              link
              :to="'/vehicle/'+item.id"
            >
              <!-- <router-link :to="{ name: 'vehicle', params: { id: 123 }}"> -->
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
              <!-- </router-link> -->

              <v-spacer />
              <v-img
                class="ml-auto"
                max-width="150px"
                contain
                :src="item.thumbnail"
                @error="setAltImg"
              ></v-img>
            </v-list-item>
            <v-divider class="vehicle-list-divider"></v-divider>

          </div>
        </v-list-item-group>
      </v-list>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FactionVehicleList",
  props: {
    factionName: String,
    flagImage: String,
    vehicles: Array,
  },
  methods: {
    setAltImg(e) {
      console.log(e);
      e.target.src =
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png";
    },
  },
};
</script>

<style scoped>
.vehicle-list {
  background: none !important;
}

.vehicle-list-item {
  padding-top: 16px;
  padding-bottom: 16px;
}

.vehicle-list-divider {
  margin-left: 8px !important;
  margin-right: 8px !important;
}
</style>