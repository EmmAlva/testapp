const firebase = require('firebase');
// Initialize Firebase
const config = {
    apiKey: "AIzaSyAXCi-9or3_yT_pd4kf9M74TdTLGYIF6hU",
    authDomain: "testapp-8ccfb.firebaseapp.com",
    databaseURL: "https://testapp-8ccfb.firebaseio.com",
    projectId: "testapp-8ccfb",
    storageBucket: "testapp-8ccfb.appspot.com",
    messagingSenderId: "456642210792"
};
firebase.initializeApp(config);

const loadUsers = () => {
  return firebase.database().ref('/users/').once('value').then((snapshot) => {
     return snapshot.val();
  });
};

const loadCourses = () => {
  return firebase.database().ref('/courses/').once('value').then((snapshot) => {
      return snapshot.val();
  })
};

module.exports = {
    users: loadUsers,
    courses: loadCourses
};