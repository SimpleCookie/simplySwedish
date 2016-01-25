angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('QuestionsCtrl', function($scope, Questions) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.questions = Questions.all();
  $scope.getRandom = function(){
    $scope.question = Questions.getRandom();
    Questions.shuffle($scope.question.answers);
    return $scope.question;
  }
  $scope.submit = function(question, i) {
    if (typeof($scope.answered) != 'undefined') return;
    var correctAnswerIndex = question.answers.indexOf(question.correctAnswer);
    $scope.answered = 'answered-'+i+' correctAnswer-'+correctAnswerIndex;
    $scope.clicks = 0;
  }
  $scope.nextQuestion = function(){
    if ($scope.clicks == 1){
      $scope.question = $scope.getRandom();
      $scope.answered = undefined;
    }
    $scope.clicks++;
    return $scope.question;
  }
  $scope.remove = function(questions) {
    Questions.remove(question);
  };
})

.controller('QuestionDetailCtrl', function($scope, $stateParams, Questions) {
  $scope.question = Questions.get($stateParams.questionId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
