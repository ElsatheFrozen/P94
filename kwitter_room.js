// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1Hcc8UmT5JBKyltvKgJOpEJqa9n6qYzc",
    authDomain: "cp93-d0af0.firebaseapp.com",
    databaseURL: "https://cp93-d0af0-default-rtdb.firebaseio.com",
    projectId: "cp93-d0af0",
    storageBucket: "cp93-d0af0.appspot.com",
    messagingSenderId: "942767678396",
    appId: "1:942767678396:web:82cd9ed1537303f87dc1b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }