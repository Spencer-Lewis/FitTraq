'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EventSchema = new mongoose.Schema({
  owner: String,
  name: String,
  start: String,
  title: {
      type: String
  },
  datetime: {
    type: String
  },
  formatted_datetime: {
    type: String
  },
  allDay: {
    type: Boolean,
    value: true
  },
  workout: String,
  workoutType: String
//   {
//     title: String,
//     exercises: [{
//         name: String,
//         sets: [{
//             reps: Number,
//             weight: Number
//         }]
//     }],
//     duration: [{
//         minutes: Number,
//         seconds: Number
//     }],
//     distance: Number
// }
});

export default mongoose.model('Event', EventSchema);
