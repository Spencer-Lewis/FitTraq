'use strict';

angular.module('fitTraqApp')
  .controller('WorkoutController', ['$http',
function WorkoutController ($http){

  var vm = this;
  vm.$http = $http;
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
  vm.Log = Log;

  // function addEvent(){
  //     vm.Workouts.push({name: vm.text, owner: "Spencer"});
  //     vm.text = null;
  //   }

  function Log() {
    console.log("called the function");
  }

  function getWorkouts() {
    vm.events = [];

    $http.get('/api/workouts').then(response => {
      vm.events = response.data;
      return console.log(vm.events);
    });
  }


  function addWorkout() {
    console.log("adding workout");

    $http.post('/api/workouts', { name: "newWorkout2"} )
  };
  }
]);

