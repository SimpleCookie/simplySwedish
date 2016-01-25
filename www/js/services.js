angular.module('starter.services', [])

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
});