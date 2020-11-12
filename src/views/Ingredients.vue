<template>
  <div id="ingredients">
    <SideNavTemplate>
      <template>
        <v-card class="overflow-hidden">
          <v-app-bar
            absolute
            color="#6A76AB"
            shrink-on-scroll
            prominent
            src="https://c.pxhere.com/photos/f2/cf/greens_onion_spices_vegetables_food_kitchen_cooking_cutting_board-988557.jpg!d"
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-3"
          >
            <template v-slot:img="{ props }">
              <v-img
                v-bind="props"
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
              ></v-img>
            </template>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>My ingredients</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <template v-slot:extension>
              <v-tabs align-with-title>
                <v-tab>All</v-tab>
                <v-tab>Pasta</v-tab>
                <v-tab>Vegetables</v-tab>
              </v-tabs>
            </template>
          </v-app-bar>
          <v-sheet id="scrolling-techniques-3" class="overflow-y-auto">
            <v-container>
              <IngredientsList :ingredients="jsondata" />
            </v-container>
          </v-sheet>
        </v-card>
      </template>
    </SideNavTemplate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideNavTemplate from '@/templates/SideNavTemplate.vue';
import IngredientsList from '@/components/IngredientsList.vue';
import json from '@/json/Products.json';

@Component({
  components: {
    SideNavTemplate,
    IngredientsList,
  },
  data() {
    return {
      jsondata: json,
    };
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.v-container {
  height: 100%;
  margin-top: 218px;
}
</style>
