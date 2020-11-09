<template>
  <div id="home">
    <SideNavTemplate>
      <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
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
