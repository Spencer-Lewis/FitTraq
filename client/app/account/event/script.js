  $(document).ready(function() {
    $('select').material_select();
    // var events = $('#event').text();
    var events = [{title: "Derpfest", start: new Date(), datetime: new Date()}];
    $('#calendar').fullCalendar({

        events: events,
        // events: $('#events').text(),
        eventClick: function(date, jsEvent, view) {
          console.log(date.start._i);
          // $('#modal2').html(date.title + "<br>");
          // $('#modal2').append(date.start._i);
          $('#modal2').openModal();
        },
        dayClick: function(date, jsEvent, view) {
          var today = date.format();
          $('#modal1 #date').html(today);
          $('#modal1').openModal();
        }
    })
});
