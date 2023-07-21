// Your web app's Firebase configuration
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

  user_name = localStorage.getItem("Username");
  document.getElementById("Username").innerHTML= "Welcome "+ user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"   
    });

    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " +Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() 
{

localStorage.removeItem("Username");
localStorage.removeItem("room_name");
window.location = "index.html";

}