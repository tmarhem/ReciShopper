<template>
  <div id="home">
    <SideNavTemplate>
      <template>
        <div>Ingredients template</div>
        <div>My Ingredients</div>
        <IngredientsList :ingredients="jsondata" />
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
