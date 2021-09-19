const firebaseConfig = {
    apiKey: "AIzaSyCzZwf7RC3NFB0RtccZ-Co8Rfizw0JXHys",
    authDomain: "hackathoon-3b3a9.firebaseapp.com",
    databaseURL: "https://hackathoon-3b3a9-default-rtdb.firebaseio.com",
    projectId: "hackathoon-3b3a9",
    storageBucket: "hackathoon-3b3a9.appspot.com",
    messagingSenderId: "637825253103",
    appId: "1:637825253103:web:fac8974e1edd130c38251a",
    measurementId: "G-M2J0ZFZY0J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


function Login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(res => alert(res))
  }

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    console.log(email + password);
    auth.createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}


auth.onAuthStateChanged((user) => {
    if (user) {
        database.ref('users' + user.uid).update({
            email: user.email,
            lastLoggedInAt: new Date()
        });
        setData(user);
        setMessages();
        document.getElementById("user").innerHTML = user.email;
        document.getElementById("login_box").style.display = "none";
        document.getElementById("signup_box").style.display = "block";
    } else {
        document.getElementById("login_box").style.display = "block";
        document.getElementById("signup_box").style.display = "none";
    }
});


















// function login() {
//     let provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider).catch(res => alert(res))
//   };


  
// const signup = () => {
//     let email = document.getElementById("semail").value;
//     let password = document.getElementById("spassword").value;
//     auth.createUserWithEmailAndPassword(email,password)
//       .then(() => {
//         document.getElementById("email").value = "";
//         document.getElementById("password").value = "";
//       })
//       .catch(err => alert(err));
//   }


// auth.onAuthStateChanged((user) => {
//     if (user) {
//       firestore.collection("semail").doc(user.uid).set({
//         email: user.email
//       })
  
//       if (document.querySelector("password").checked) {
//         location.replace("home.html");
//         console.log(user.email)
//       }
//       else {
//         location.replace("home.html")
//       }
//     }
//   })




// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in    
//     var user = userCredential.user;
//     // ...
//   })

//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });



//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//     window.location
//       var uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });








































