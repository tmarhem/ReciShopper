// import firebase from 'firebase';
import { auth } from '@/firebase';
import store from '@/store/index';

export default {

  created() {
    auth
      .onAuthStateChanged((user) => {
        store.dispatch('onUserChange', user);
      });
  },
};
