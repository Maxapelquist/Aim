  // Firebase Configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDaCJ2QGm-epEiiCTps_B8rTGivCiywMdg",
    authDomain: "aimdatabase-db87d.firebaseapp.com",
    databaseURL: "https://aimdatabase-db87d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aimdatabase-db87d",
    storageBucket: "aimdatabase-db87d.appspot.com",
    messagingSenderId: "17048738724",
    appId: "1:17048738724:web:a4c59a25d8cd2c99933f31",
    measurementId: "G-5GXNWLNF5W"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  function createProfile() {
    // Get user input
    const userId = document.getElementById("userId").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const imageUrl = document.getElementById("imageUrl").value;

    // Write data to Firebase
    db.ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });

    // Confirmation message
    alert("Profile created successfully!");
  }