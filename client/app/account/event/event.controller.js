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
  vm.workoutType = ''

  // vm.addEvent = addEvent;

  vm.Log = Log;
  vm.getEvents = getEvents;
  vm.showEvent = showEvent;
  vm.editEvent = editEvent;
  vm.addEvent = addEvent;
  vm.deleteEvent = deleteEvent;
  vm.buildCalendar = buildCalendar;
  vm.closeModal = closeModal;
  vm.getUser = getUser;

  getEvents();

  function buildCalendar() {
    console.log('building calendar...');
    $('#calendar').fullCalendar({

        events: vm.events,
        eventClick: function(date, jsEvent, view) {
          console.log(date.start._i);
          $('#modal2').html("<h4>" + date.title + "</h4>");
          $('#modal2').append("<h6>" + date.start._i + "</h6>");
          $('#modal2').append("<h5>" + date.workoutType + "</h5>");
          $('#modal2').append("<h5>" + date.workout + "</h5>");
          $('#modal2').openModal();
        },
        dayClick: function(date, jsEvent, view) {

          var today = date.format();
          $('#modal1 #date').html(today);
          $('#modal1').openModal();
        }
    })
  }

  function closeModal() {
    $('#modal1').closeModal();
    buildCalendar();
    getEvents();
    location.reload();
  }

  function Log() {
    console.log("called the function");
  }


  function getEvents() {
    console.log('getting events')
    $http.get('/api/events').then(response => {
      vm.events = response.data;
      console.log(vm.events);
      vm.buildCalendar();
      return vm.events;
      getUser();
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
    $http.put('/api/events/' + event._id)
  }

  function addEvent() {
    vm.date = $('#modal1 #date').text();
    console.log("adding event");
    console.log(vm.date);
    $http.post('/api/events', { name: vm.text1, title: vm.text1, start: vm.date, datetime: vm.date, formated_datetime: vm.date, allDay: true, workout: vm.textarea1, workoutType: vm.workoutType })
    vm.workoutType = '';
    vm.getEvents();
    vm.buildCalendar();
  };

  function deleteEvent(event) {
    if(confirm("Delete this workout?")) {
    console.log("deleting event");
    $http.delete('/api/events/' + event._id)
      .then(function() {
          console.log('DOIT');
          // var index = vm.events.indexOf(event);
          // vm.events.splice(index, 1);
          vm.getEvents();
      });

     }
   }

   function getUser() {
    $http.get('/api/users/me').then(response => {
      vm.user = response.data;
      console.log(vm.user);
      return vm.user;
    });
   }
   getUser();







}]);


