'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var WorkoutSchema = new mongoose.Schema({
    name: String,
    owner: String,
    exercises: [{
        name: String,
        sets: [{
            reps: Number,
            weight: Number
        }]
    }],
    duration: [{
        minutes: Number,
        seconds: Number
    }],
    distance: Number
});


export default mongoose.model('Workout', WorkoutSchema);


// {
//     "name": "Chest Day",
//     "owner": "Spencer",
//     "exercises": [
//     {
//         "name": "Bench Press",
//         "sets": [{"reps": 10, "weight": 185}, {"reps": 8, "weight": 205}, {"reps": 6, "weight": 225}]
//     },
//     {
//         "name": "Cable Fly",
//         "sets": [{"reps": 10, "weight": 140}, {"reps": 8, "weight": 150}, {"reps": 6, "weight": 150}]
//     }
//     ]
// }
