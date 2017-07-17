# Gesso

Gesso is an art listings app that allows art enthusiasts to keep track of
local gallery openings so they can support their local galleries and artists.


## Link to Live, Deployed Gesso app

[Gesso Deployed App](https://lisawilliams.github.io/gesso/)

## Link to Front And Back End Repositories

[Gesso Front End](https://github.com/lisawilliams/gesso)

[Gesso Back End](https://github.com/lisawilliams/gesso-api)

## What Gesso Does And How It Works

Gesso is a client-server application with a Javascript front end and a Rails
backend. The front end communicates with the server via an API.

## Technologies Used

Gesso's front end is a Javascript application making use of Bootstrap for UI styling.

The backend database is Postgres, and the API server is a Rails application
that enables CRUD and authorization functions.


The backend server is hosted on Heroku, and the front end is hosted on Github Pages.
See below for links to deployed front and back end servers as well as
links to front and back end repositories.

## The Gesso Front End (Client)

The front end is written in Javascript and makes use of jQuery, AJAX,
Bootstrap, and Handlebars.js.

Handlebars.js is used to manage the display of chores to users, and Bootstrap
is used to both nicely tile these across the page -- or organize them into one
neat column for use on mobile devices. AutoMom communicates with a server
via an API, making requests to get, post, update, or delete chores. The front end
also makes request to the server for auth functions (sign up, sign in,
sign out, change password). It is a fully functional CRUD application.

## The Gesso Back End (Server)

The AutoMom back end is a Rails application which supports RESTful requests
from the AutoMom client.

### Databases and Tables

The backend uses a Postgres database to store user information. In communicating
with the database, I did not set up tables or joins directly; I used the Rails ORM to do that.

There are three active tables, users, galleries, and shows.

The `user` has id and email, and also stores the token, password hash, and timestamps
for when a user record was created and updated.

### ADD TABLE DESCRIPTIONS FOR GALLERIES AND SHOWS

### Entity Relationship Diagram

Users ----|----< Shows
Galleries ---|--- Shows

A user has many shows; galleries also have many shows.

For additional information about the database, visit the project wiki.

## Approach to building Gesso

I used an issue-driven development process for Gesso that I developed along
with my team for the GA Team project. We outlined features by posting
issues to the issue queues of the front and back end repositories.
Feature branches used a naming convention that tied them to individual issues;
an issue, for example, like "Create login modal" that is issue # 20, would
have a branch named issue#20. Commit messages and pull requests would also reference
issue numbers. Upon completion, a feature branch would be merged into development,
and the branch would be deleted. The development branch would be merged into master
prior to public deployment. I tried to deploy at the end of each day as a way
to encourage myself to keep the code in good shape.

I started with Auth as those functions are largely built in the Rails API template
provided by GA. I used the front-end auth code that I had working from Tic-Tac-Toe,
which communicated with a back-end Rails app based on the same API. I was able to get Auth
functions working fairly easily.

I then moved on to the CRUD functions. Here, the backend was not already built for us,
so I used `rails generate` to generate resources, and ran through a procedure that I
followed for each resource I built. Here's an example:

### Chores

1. Scaffold chore resource *DONE*
2. Run bin/rails db:migrate *DONE*
3. Test that you can add a chore via rails console *DONE*
4. Test that you can add a chore via a curl request *DONE*
5. Test that you can return all of a user's chores via a curl request *DONE*
6. Test that you can update a chore via a curl request *DONE*
7. Test that you can delete a chore via a curl request *DONE*

(To see my complete project checklist, see [AutoMom Project Checklist](https://github.com/lisawilliams/auto-mom-front/blob/master/checklist.md))

## Issues I Encountered


## Gesso Documentation: Gesso Wiki

I created [a wiki](MAKE LINK) documenting our API, checklists, and more. We would like to call out the following specific planning documents and documentation:

## API Documentation

[Link to API Documentation](MAKE LINK)


## User Stories

Link to user stories in project wiki

## Wireframes

Link to wireframes in project wiki

## Instructions for installing dependencies:

Clone this repository and run `npm install`.

## Team

Gesso was built by Lisa Williams as a team project undertaken during WDI18 at General Assembly Boston.
