<script type="module">
  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyALkewgGiRFeqDm58IbNt8MMgN8I8xgkj8",
        authDomain: "wasteman-app.firebaseapp.com",
        projectId: "wasteman-app",
        storageBucket: "wasteman-app.appspot.com",
        messagingSenderId: "42861681980",
        appId: "1:42861681980:web:3bd1411c874f05e9ea5239",
        measurementId: "G-DS8JFZ6XTF"
        };

  //Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>