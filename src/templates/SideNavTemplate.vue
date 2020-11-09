<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey darken-3"
      mini-variant
    >
      <router-link v-for="(avatar, i) in avatars" :key="i" :to="avatar.route">
        <v-avatar
          :size="i === 1 ? 36 : 20"
          class="d-block text-center mx-auto mb-9"
        >
          <v-icon> {{ avatar.iconName }} </v-icon>
        </v-avatar>
      </router-link>
    </v-navigation-drawer>

    <v-main>
      <slot v-for="el in transclusions" :name="el" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  props: {
    transclusions: {
      type: Array,
      default: ['default'],
    },
  },
  data() {
    return {
      avatars: [
        {
          iconName: 'mdi-home',
          route: '/home',
        },
        {
          iconName: 'mdi-chef-hat',
          route: '/recipes',
        },
        {
          iconName: 'mdi-carrot',
          route: '/ingredients',
        },
      ],
    };
  },
})
export default class Home extends Vue {}
</script>
