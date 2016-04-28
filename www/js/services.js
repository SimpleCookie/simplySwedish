angular.module('starter.services', , ['ionic'])

// .factory('Chats', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var chats = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'img/ben.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'img/max.png'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'img/adam.jpg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'img/perry.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     face: 'img/mike.png'
//   }];

//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   };
// });

.factory('Questions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var questions = [{
    id: 0,
    language: 'englishToSwedish',
    type: 'glossary',
    description: 'What is "vacation" in Swedish?',
    correctAnswer: 'Semester',
    answers : [
      'Semester',
      'Ledig',
      'Barnfri',
      'Frihet'
    ]
  }, {
    id: 1,
    language: 'englishToSwedish',
    type: 'glossary',
    description: 'What is "candy/sweets" in Swedish?',
    correctAnswer: 'Godis',
    answers : [
       'Godis',
       'Chocklad',
       'Pepparkaka',
       'Kakor'
    ]
  }, {
    id: 2,
    language: 'englishToSwedish',
    type: 'glossary',
    description: 'What is "clothes" in Swedish?',
    correctAnswer: 'Kläder',
    answers : [
       'Kläder',
       'Skor',
       'Jacka',
       'Halsduk'
    ]
  }, {
    id: 3,
    language: 'englishToSwedish',
    type: 'glossary',
    description: 'What is "fun" in Swedish?',
    correctAnswer: 'Kul',
    answers : [
       'Kul',
       'Godis',
       'Apa',
       'Banan'
    ]
  }, {
    id: 4,
    language: 'englishToSwedish',
    type: 'glossary',
    description: 'What is "game" in Swedish?',
    correctAnswer: 'Spel',
    answers : [
       'Spel',
       'Kul',
       'Räkna',
       'Läxa'
    ]
  }];

  return {
    all: function() {
      return questions;
    },
    remove: function(question) {
      questions.splice(questions.indexOf(question), 1);
    },
    get: function(questionId) {
      for (var i = 0; i < questions.length; i++) {
        if (questions[i].id === parseInt(questionId)) {
          return questions[i];
        }
      }
      return null;
    },
    shuffle: function(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    },
    getRandom: function(){
      // console.log("getRandom returns index: "+Math.floor(Math.random()*questions.length));
      return questions[Math.floor(Math.random()*questions.length)];
    }
  };
})


.factory('Connection', function(){
  
    return {
      /** 
      * @description httpPost is used for insert, delete and specific get HTTP requests
      * @param scope should be a scope you need to access from the $rootScope
      * @param question is the SQL query you wish to send
      * @param type refers to the operation type (insert or login)
      * @param SSL currently recommended false as the SSL still doesn't work
      * @note For delete operation a different httpPost is used in controller.js to give user a confirmation alert first
      **/
      httpPost: function(scope, question, type, SSL) {
          // Show loading screen
          $ionicLoading.show({
              template: 'Laddar..'
          })
          var urlBase = "http";
          if (SSL) urlBase = "https";
  
          var request = $http({
              method: "post",
              url: urlBase+"://ekstroms.xyz/simplySwedish/apiTest.php",
              crossDomain : true,
              data: question,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          });
          /* Successful HTTP post request or not */
          request.success(function(data) {
              // Hide loading screen
              $ionicLoading.hide()
              // Handle response from server
              if (type == "insert"){
                  if (data == "1")
                      showAlert('Bekräftelse', 'Förfrågan har slutförts');
                  else{
                      showAlert('Försök igen', 'Förfrågan misslyckades');
                  }
              }
              else if (type == "delete"){
                  // if (data == "success") console.log("Successful: "+data);
                  if (data == "fail") showAlert('Försök igen','Borttagningen misslyckades');
                  else if (data == "AuthorityError") showAlert('Försök igen', 'Kontrollera dina rättigheter');
                  else if (data == "offline") showAlert('Försök igen', 'Kontrollera att du är inloggad');
                  // Entry has been deleted. Keep in mind:
                  // error may occur if the archive table has a entry with the same id as the active table)
              }
              else if (type == "login"){
                  // Confirm it's a valid token
                  if(data[0].length == 10){ 
                      // Save user info to localstorage
                      localStorage.setItem("token", data[0]); 
                      localStorage.setItem("authority", data[1]); 
                      localStorage.setItem("name", data[2]);
                      localStorage.setItem("mail", JSON.parse(question).mail);
  
                      showAlert('Bekräftelse', 'Du är nu inloggad');
                  }
                  else{
                      showAlert('Försök igen', 'Fel användarnamn eller lösenord');
                  }
              }
              else if (type == "logout"){
                  if (data == "1"){
                      localStorage.setItem("token", "null");
                      localStorage.setItem("mail", "null");
                      localStorage.setItem("name", "null");
                      showAlert('Bekräftelse', 'Du är nu utloggad');
                  }
                  else{
                      showAlert('Försök igen', 'Något gick fel, kontrollera din anslutning eller kontakta administrator');
                  }
              }
              else if (type == "createAccount"){
                  if (data == "1"){
                      showAlert('Bekräftelse', 'Kontot har nu skapats');
                  }
                  else{
                      showAlert('Försök igen', 'Kontot kunde inte skapas')
                  }
              }
              else if (type == "changePassword"){
                  if (data == "1"){
                      showAlert('Bekräftelse', 'Lösenordet har nu ändrats');
                  }
                  else{
                      showAlert('Försök igen', 'Förändringen misslyckades')
                  }
              }
              else if (type == "recoverPassword"){
                  if (data == "1"){
                      // console.log(data);
                      showAlert('Bekräftelse', 'Ett mail har skickats till din email. Kolla inkorgen och även skräpposten.');
                  }
                  else{
                      // console.log(data);
                      showAlert('Försök igen', 'Kontrollera mailaddressen.')
                  }
              }
          })
        .catch(function(data, status, headers, config) {
              // showAlert('Ooops', JSON.stringify(data));
              // console.log(data);
              showAlert('Ooops', 'Något oförväntat gick fel');
              $ionicLoading.hide();
        });
      },
  
      /** 
      * @description httpGet is used to retrieve data
      * @param scope should be a scope you need to access from the $rootScope
      * @param param refers to what you wish to retrieve (felrapporter or users)
      * @param extras can be anything you wish to access or modify during the request
      **/
      httpGet: function(scope, param, extras) {
          $ionicLoading.show({
              template: 'Hämtar data'
          })
          var request = $http({
              method: "GET",
              params: {params: param},
              // cache: true,
              url: "http://ekstroms.xyz/simplySwedish/apiTest.php" // URL to file
  
          }).then(function successCallback(response) { 
              // Hide loading screen
              $ionicLoading.hide()
              if (param == 'questions'){
                  extras.set(response.data);
                  scope.questions = extras.all();
                  // Save all entries to local storage for offline-mode
                  localStorage.setItem("questions", JSON.stringify(scope.registers));
              }
              else if (param == 'users'){
                  extras.set(response.data);
                  scope.users = extras.all();
              }
          }, function errorCallback(response) {
                  // console.log(data);
              // Hide loading screen
              $ionicLoading.hide()
  
                // Retrieve the registers from the local storage
                extras.set(JSON.parse(localStorage.getItem("questions")));
                scope.questions = extras.all();
          });
      },
      getUserToken: function() {
          if (localStorage.getItem("token") === "null") return "";
          return localStorage.getItem("token");
      },
      getUserAuthority: function() {
          if (localStorage.getItem("authority") === "null") return 0;
          return localStorage.getItem("authority");
      },
      getUserMail: function() {
          if (localStorage.getItem("mail") === "null") return "";
          return localStorage.getItem("mail");
      },
      // Show a acknowledge message
      showAlert: function(alertTitle, alertMsg) {
          var alertPopup = $ionicPopup.alert({
              title: alertTitle,
              template: alertMsg
          });
          alertPopup.then(function(res) {
              // ok ..
          });
      }
    };
});
