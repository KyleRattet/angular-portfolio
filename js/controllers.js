app.controller('myController', function($scope) {
  $scope.greeting = "Heloolll";
});


app.controller('BioController', function($scope) {
  $scope.message = "John Hancock Bio:";
});

app.controller('ProjectsController', function($scope) {
  $scope.message = "John Hancock's Projects:";
});

app.controller('ResumeController', function($scope) {
  $scope.message = "John Hancock's Resume";
});
