<template>
  <div id="home">
    <SideNavTemplate :transclusions="['HomeSweetHome']">
      <template>
        <div>Home Sweet Home</div>
      </template>
    </SideNavTemplate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideNavTemplate from '@/templates/SideNavTemplate.vue';

@Component({
  methods: {},
  components: {
    SideNavTemplate,
  },
})
export default class Home extends Vue {}
</script>
