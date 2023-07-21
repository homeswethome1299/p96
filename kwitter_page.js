var firebaseConfig = {
    apiKey: "AIzaSyDrW9c0bjkuicjNPWGyou5nMMR5jm7kNdM",
    authDomain: "kwitter1-b3621.firebaseapp.com",
    databaseURL: "https://kwitter1-b3621-default-rtdb.firebaseio.com",
    projectId: "kwitter1-b3621",
    storageBucket: "kwitter1-b3621.appspot.com",
    messagingSenderId: "929579673060",
    appId: "1:929579673060:web:308cd8930e60bc197b13f1"
  };
  
  // Initialize Firebase
  firebase. initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
Username = localStorage.getItem("Username");
room_name = localStorage = localStorage.getItem("room_name")
function send()
{
    msg = documen.getElementById("msg").value;
    firebase.database().ref(room_name).push ({
    name:Username,
    message:msg,
    like:0
    })
    document.getElementById("msg").value= "";
}

function logout() 
{

localStorage.removeItem("Username");
localStorage.removeItem("room_name");
window.location = "index.html";

}
