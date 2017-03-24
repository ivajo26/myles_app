import RNfirebase from 'react-native-firebase';

export default firebase = RNfirebase.initializeApp({
  debug: __DEV__ ? '*' : false,
  errorOnMissingPlayServices: false,
  persistence: true,
});
