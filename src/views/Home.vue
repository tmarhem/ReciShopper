<template>
  <div id="home">
    <SideNavTemplate :transclusions="['HomeSweetHome']">
      <template v-slot:HomeSweetHome>
        <div>Home Sweet Home</div>
      </template>
    </SideNavTemplate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideNavTemplate from '@/templates/SideNavTemplate.vue';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    SideNavTemplate,
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
