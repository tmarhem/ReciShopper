import firebase from 'firebase';
import store from '@/store/index';

export default {

  created() {
    firebase
      .auth()
      .onAuthStateChanged((user) => {
        store.commit('setFirebaseUser', user);
      });
  },
};
