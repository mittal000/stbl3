var firebaseConfig = {
    apiKey: "AIzaSyB7o8M886-hv038KNSez15RydubEjGDNPs",
    authDomain: "kwitter-2-23150.firebaseapp.com",
    databaseURL: "https://kwitter-2-23150-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-23150",
    storageBucket: "kwitter-2-23150.appspot.com",
    messagingSenderId: "20429717366",
    appId: "1:20429717366:web:2d01c9f3f8c8bf26818457"
  };


firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
