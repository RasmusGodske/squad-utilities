<template>
  <div class="server-control-panel-page">
    <v-container>
      <v-card
        flat
        tile
        elevation="4"
        height="100%"
      >
        <v-toolbar color="primary">
          <v-toolbar-title>Server Controls</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text>
          <v-btn
            elevation="2"
            raised
            color="primary"
            v-on:click="startServer"
          >Start server</v-btn>
          <v-btn
            elevation="2"
            raised
            color="error"
            v-on:click="stopServer"

          >Stop server</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SquadServerRepo from "@/services/squad-server/squadServerService"

export default {
  name: "ServerControlPanelPage",
  components: {},
  data: () => {
    return {};
  },
  methods: {
    startServer: function(event) {
      SquadServerRepo.start();
    },
    stopServer: function(event) {
      SquadServerRepo.stop();
    }
  }
};
</script>

<style scoped>
</style>