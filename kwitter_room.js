// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6TPv78eC4VkB8NuUU2jMHIEMkD3HUSVw",
    authDomain: "let-s-chat-web-app-b5b63.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-b5b63-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-b5b63",
    storageBucket: "let-s-chat-web-app-b5b63.appspot.com",
    messagingSenderId: "64670732696",
    appId: "1:64670732696:web:e76816e40ad3486e7e5bed"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
