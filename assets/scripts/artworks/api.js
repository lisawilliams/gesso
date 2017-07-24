'use strict'

const config = require('./../config')
const store = require('./../store')

// API POST, posts a new chore to the db based on user form input

const createArtwork = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/artworks/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
  .then((response) => {
    store.show = response.show
  })
}

// API GET, shows all chores for a current user

const showAllShows = function () {
  return $.ajax({
    url: config.apiOrigin + '/shows/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  .then((response) => {
    store.shows = response.shows
    console.log('This is response from showAllShows in api.js: ', response)
    return store
  })
}

// API PATCH, updates a chore

const updateShow = function (showObject, showNumber) {
  // debugger
  return $.ajax({
    url: config.apiOrigin + '/shows/' + showNumber,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: showObject
  })
}

// API DELETE, deletes a selected chore

const deleteShow = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/shows/' + id,
    // url: config.apiOrigins.development + '/chores/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createShow,
  showAllShows,
  updateShow,
  deleteShow
}
