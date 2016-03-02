'use strict';

angular.module('fitTraqApp')
  .controller('WorkoutController', ['$http',
function WorkoutController ($http){

  var vm = this;
  vm.$http = $http;
  vm.events = [];
  vm.workouts = [];
  vm.event = {}
  vm.user = {};
//   this.Workouts = [{
//     name: "Chest Day",
//     owner: "Spencer",
//     exercises: [{
//         name: "Bench Press",
//         sets: [{ reps: 10, weight: 185 }, { reps: 8, weight: 205 }, { reps: 6, weight: 225 }]
//     }, {
//         name: "Cable Fly",
//         sets: [{ reps: 10, weight: 140 }, { reps: 8, weight: 150 }, { reps: 6, weight: 150 }]
//     }]
// }]


  // vm.addEvent = addEvent;
  vm.addWorkout = addWorkout;
  vm.getWorkouts = getWorkouts;
  vm.deleteWorkout = deleteWorkout;
  vm.showWorkout = showWorkout;
  vm.getEvents = getEvents;
  vm.Log = Log;


  // function addEvent(){
  //     vm.Workouts.push({name: vm.text, owner: "Spencer"});
  //     vm.text = null;
  //   }

  function Log() {
    console.log("called the function");
  }

  function getEvents() {
    console.log(vm.user);
    User.findByIdAsync(req.user._id)
    .then(user => {
      vm.user = user.data
      console.log(vm.user);
  });
}

  function getWorkouts() {

    $http.get('/api/workouts').then(response => {
      vm.workouts = response.data;
      console.log(vm.workouts);
      return vm.workouts
    });
  }


  function showWorkout(workout) {
    $http.get('/api/workouts/' + workout._id).then(response => {
      vm.event = response.data;
      console.log(vm.event)
      return vm.event
    })
  }

  function editWorkout(workout) {
    $http.post('/api/workouts/' + workout._id)
  }

  function addWorkout() {
    console.log("adding workout");

    $http.post('/api/workouts', { name: vm.text} )
  };

  function deleteWorkout(workout) {
    console.log("deleting working");

    $http.delete('/api/workouts/' + workout._id);
  }

  }
]);

