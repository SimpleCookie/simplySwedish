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

.factory('Game', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var questions = [{
    id: 0,
    language: 'englishToSwedish',
    type: 'glossary',
    description: 'What is "vacation" in Swedish?',
    answer: 'Semester?',
    fakeAnswer1: 'Ledig',
    fakeAnswer2: 'Barnfri',
    fakeAnswer3: 'Frihet'
  }, {
    id: 1,
    language: 'englishToSwedish',
    type: 'glossary',
    description: 'What is "candy/sweets" in Swedish?',
    answer: 'Godis',
    fakeAnswer1: 'Chocklad',
    fakeAnswer2: 'Godis',
    fakeAnswer3: 'Kakor'
  }, {
    id: 2,
    language: 'englishToSwedish',
    type: 'glossary',
    description: 'What is "clothes" in Swedish?',
    answer: 'Kläder',
    fakeAnswer1: 'Skor',
    fakeAnswer2: 'Jacka',
    fakeAnswer3: 'Halsdul'
  }, {
    id: 3,
    language: 'englishToSwedish',
    type: 'glossary',
    description: 'What is "fun" in Swedish?',
    answer: 'Look at my mukluks!',
    fakeAnswer1: 'img/perry.png',
    fakeAnswer2: 'img/perry.png',
    fakeAnswer3: 'img/perry.png'
  }, {
    id: 4,
    language: 'englishToSwedish',
    type: 'glossary',
    description: 'What is "fun" in Swedish?',
    answer: 'Kul.',
    fakeAnswer1: 'Hemskt',
    fakeAnswer2: 'Skola',
    fakeAnswer3: 'Läxa'
  }];

  return {
    all: function() {
      return questions;
    },
    remove: function(chat) {
      questions.splice(questions.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < questions.length; i++) {
        if (questions[i].id === parseInt(chatId)) {
          return questions[i];
        }
      }
      return null;
    }
  };
});