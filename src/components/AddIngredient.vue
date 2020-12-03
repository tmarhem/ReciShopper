<template>
  <div id="AddIngredient">
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title class="headline"> Add Ingredient </v-card-title>

        <v-card-text>
          <v-text-field outlined label="Barcode" :rules="rules"></v-text-field>
          <div>or</div>
          <v-btn depressed disabled>
            <v-icon dark> mdi-barcode-scan </v-icon>
            Scan Barcode
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-on:click="$emit('dialog-exited', 'test')"> Add </v-btn>
          <v-btn color="error" v-on:click="$emit('dialog-exited', 'test')">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rules: [(v: string) => v.length === 13 || 'Barcode is 13 characters'],
    };
  },
  components: {},
})
export default class AddIngredient extends Vue {}
</script>

<style scoped>
</style>
