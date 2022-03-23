var firebaseConfig = {
      apiKey: "AIzaSyA8G0t8PqnVLV57tWve8DX2fH5aOte1Q4k",
      authDomain: "kwitter-3e76c.firebaseapp.com",
      databaseURL: "https://kwitter-3e76c-default-rtdb.firebaseio.com",
      projectId: "kwitter-3e76c",
      storageBucket: "kwitter-3e76c.appspot.com",
      messagingSenderId: "1025402182956",
      appId: "1:1025402182956:web:b815f693465cab0c44a089",
      measurementId: "G-S56E0D9CN7"
};

firebase.initializeApp(firebaseConfig);




function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();

function logout() {
    
}