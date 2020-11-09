<template>
  <div id="login">Login</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';

// const uiConfig = {
//   signInSuccessUrl: '/ingredients',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
//   ],
//   // tosUrl and privacyPolicyUrl accept either url string or a callback
//   // function.
//   // Terms of service url/callback.
//   tosUrl: '<your-tos-url>',
//   // Privacy policy url/callback.
//   privacyPolicyUrl() {
//     window.location.assign('<your-privacy-policy-url>');
//   },
// };

// // Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>
