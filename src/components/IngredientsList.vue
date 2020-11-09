<template>
  <div id="IngredientsList">
    <v-card
      v-for="ing in ingredients"
      :key="ing.id"
      elevation="2"
      :loading="true"
      outlined
      shaped
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img height="250" :src="ing.image_small_url"></v-img>

      <v-card-title>{{ ing.product_name_fr }}</v-card-title>

      <v-card-text> </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text> Edit </v-btn>
        <v-btn color="deep-purple lighten-2" text> Remove </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  props: {
    ingredients: Array,
  },
})
export default class IngredientsList extends Vue {}
</script>
