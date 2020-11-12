<template>
  <div id="planning">
    <SideNavTemplate>
      <template>
        <div>Profile</div>
      </template>
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
export default class Profile extends Vue {}
</script>
