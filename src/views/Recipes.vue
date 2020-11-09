<template>
  <div id="home">
    <SideNavTemplate>
    </SideNavTemplate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideNavTemplate from '@/templates/SideNavTemplate.vue';

@Component({
  components: {
    SideNavTemplate,
  },
})
export default class Home extends Vue {}
</script>
