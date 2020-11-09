<template>
  <div id="IngredientsList">
    <v-card
      v-for="ing in ingredients"
      :key="ing.id"
      elevation="2"
      :loading="false"
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
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title
            class="headline"
            v-text="ing.product_name_fr"
          ></v-card-title>

          <v-card-text>
            <v-img
              :src="`http://localhost:8080/Nutri-score-${ing.nutrition_grades_tags[0].toUpperCase()}.svg`"
            ></v-img>
            <!-- <v-img src="@/assets/Nutri-score-A.svg"></v-img> -->
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text> Edit </v-btn>
            <v-btn color="deep-purple lighten-2" text> Remove </v-btn>
          </v-card-actions>
        </div>

        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="ing.image_small_url"></v-img>
        </v-avatar>
      </div>
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

<style scoped>
.v-card {
  margin: 15px;
}

.v-card__title {
  font-size: 0.9rem !important;
}

#IngredientsList {
  margin-top: 250px;
}
</style>
