// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
 var config = {
    apiKey: "AIzaSyAYfgyinUAbYU3tb5lc3wDCNedQ0oKBp7A",
    authDomain: "faith-20e6a.firebaseapp.com",
    databaseURL: "https://faith-20e6a.firebaseio.com",
    storageBucket: "faith-20e6a.appspot.com",
    messagingSenderId: "100477053105"
  };
  firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title='hello';
    const options={
       body:payload.data.message
    };
    return self.registration.showNotification(title,options);
})