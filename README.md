# fit-traq

-----------------
WDI ATL Project 4
-----------------

Github: https://github.com/Spencer-Lewis/FitTraq

----------------------------
Demo:
----------------------------

Heroku: https://fit-traq.herokuapp.com/


----------------------------
Included in this repository:
----------------------------

All necessary files and folders for use:

**HTML files**
  edit, new, show, index, _form views for events

**CSS**
  /public/stylesheets/style.css
    style.css                           styling for all view pages

**DB**
  MongoDB used in development, referenced using Mongoose as ODM

**MEN STACK**
  App created using MongoDB, Express, Node, Angular

---------
The App:
---------
FitTraq is a fitness tracking app developed to provide a simple calendar UI
for the user to track his/her workouts. Upon creating an account, a user can
add a profile image, set a workout goal to achieve, and set a plan to achieve
that workout goal. Once logged in, a user than has access to the calendar view.
The calendar displays every workout event created by the user. The user can
click on a day on the calendar and a create workout modal pops up. From this
modal a user can create a workout event that will then be displayed on the
calendar. Clicking a workout event on the calendar provides a second modal
with details about that workout event. To delete events, the user can switch
over to the workouts view on the navbar. From here, any workout can be viewed
and deleted.

-------
To Run:
-------

1. The repo for the application can also be accessed via Github.
  - https://github.com/Spencer-Lewis/FitTraq

2. git clone https://github.com/Spencer-Lewis/FitTraq

3. npm install

4. bower install

4. gulp build

RUN!

5. gulp serve





-----------------
Technologies Used
-----------------
-Languages: HTML, CSS, Javascript

-Sass

-Materialize

-Gulp

-Angular Fullstack Generator

-Heroku: https://fit-traq.herokuapp.com/

-full calendar

-----------------
Planned Additions
-----------------
- Edit a Workout

- Edit a user profile image, goal, or plan

- Take specific workout data (reps, sets, weight... etc.)

- Track progress with specific workout data

- Data visualization of workout progress


--------
Contact:
--------
-Author: Spencer Lewis

-Slack: @spencer.lewis

-Github: https://github.com/Spencer-Lewis/FitTraq




This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.3.0.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
