'use strict';

angular.module('fitTraqApp')
  .controller('EventController', ['$http',
function EventController ($http){

  var vm = this;
  vm.$http = $http;
  // vm.events = [];
  vm.event = {}
  vm.user = {};
  vm.date;

  // vm.addEvent = addEvent;

  vm.Log = Log;
  vm.getEvents = getEvents;
  vm.showEvent = showEvent;
  vm.editEvent = editEvent;
  vm.addEvent = addEvent;
  vm.deleteEvent = deleteEvent;

  getEvents();


  function Log() {
    console.log("called the function");
  }


  function getEvents() {
    $http.get('/api/events').then(response => {
      vm.events = response.data;
      console.log(vm.events);
    });
  }


  function showEvent(event) {
    $http.get('/api/events/' + event._id).then(response => {
      vm.event = response.data;
      console.log(vm.event)
      return vm.event
    })
  }

  function editEvent(event) {
    $http.post('/api/events/' + event._id)
  }

  function addEvent() {
    vm.date = $('#modal1 #date').text();
    console.log("adding event");
    console.log(vm.date);
    $http.post('/api/events', { name: vm.text1, title: vm.text1, start: vm.date, datetime: vm.date, formated_datetime: vm.date, allDay: true, workout: vm.textarea1 })
  };

  function deleteEvent(event) {
    console.log("deleting event");

    $http.delete('/api/events/' + event._id);
  }

  }
]);


