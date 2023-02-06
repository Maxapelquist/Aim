const firebaseConfig = {
  apiKey: "AIzaSyDaCJ2QGm-epEiiCTps_B8rTGivCiywMdg",
  authDomain: "aimdatabase-db87d.firebaseapp.com",
  databaseURL: "https://aimdatabase-db87d.firebaseio.com",
  projectId: "aimdatabase-db87d",
  storageBucket: "aimdatabase-db87d.appspot.com",
  messagingSenderId: "17048738724",
  appId: "1:17048738724:web:a4c59a25d8cd2c99933f31",
  measurementId: "G-5GXNWLNF5W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();


// Show create form or login form depending on profile option
const profileOptionRadio = document.querySelectorAll('input[name="profile-option"]');


document.addEventListener('DOMContentLoaded', function() {
  const profileOptionRadio = document.querySelectorAll('input[name="profile-option"]');
  profileOptionRadio.forEach((radio) => {
    radio.addEventListener('change', () => {
      const createForm = document.getElementById("create-form");
      const loginForm = document.getElementById("login-form");
      if (radio.value === 'create') {
        if (createForm) {
          createForm.style.display = "block";
        }
        if (loginForm) {
          loginForm.style.display = 'none';
        }
      }
      if (radio.value === 'login') {
        if (loginForm) {
          loginForm.style.display = "block";
        }
        if (createForm) {
          createForm.style.display = 'none';
        }
      }
    });
  });
});







// Create a new profile
async function createProfile() {
  // Get user input
  const userId = document.getElementById("userId").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const imageUrl = document.getElementById("imageUrl").value;

  // Create a new user account with email and password
  const response = await auth.createUserWithEmailAndPassword(email, password);
  const user = response.user;

  // Add the user data to the database
  await db.ref('users/' + user.uid).set({
    userId: userId,
    name: name,
    email: email,
    imageUrl: imageUrl
  });

  console.log('Profile created successfully');
}

// Login
async function logIn() {

  // Get user input
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Log in with email and password
  const response = await auth.signInWithEmailAndPassword(email, password);
  const user = response.user;

  console.log('Logged in successfully');
}
