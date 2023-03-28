import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    })};

const firebaseConfig = {

    apiKey: "AIzaSyCIcGRa8RF_55qms1EZnfONr_9RyHqvxzQ",
    authDomain: "tread-379302.firebaseapp.com",
    projectId: "tread-379302",
    storageBucket: "tread-379302.appspot.com",
    messagingSenderId: "171571653869",
    appId: "1:171571653869:web:4e13f823954e00013d30e4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

getToken(messaging, {vapidKey: "BDXZrQCKEnAfnJWh6oIbEYKTuogSmiNl4gKVIDNmOEabzRt2BpAVIV4Znb7OgKzWJAz9eLOKde6YhWLpAdw1EZ0"}).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log(currentToken);

  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    requestPermission()
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});
export const onForegroundMessage = () =>
  new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));