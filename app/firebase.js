 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAYfgyinUAbYU3tb5lc3wDCNedQ0oKBp7A",
    authDomain: "faith-20e6a.firebaseapp.com",
    databaseURL: "https://faith-20e6a.firebaseio.com",
    storageBucket: "faith-20e6a.appspot.com",
    messagingSenderId: "100477053105"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();
  messaging.requestPermission()
.then(function() {
  console.log('Notification permission granted.');
 return messaging.getToken();
})
.then(function(token){
    console.log(token);
})
.catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});
messaging.onMessage(function(payload) {
  console.log("Message received. ", payload);
  // ...
});





      