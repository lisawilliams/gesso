'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields.js')

// On page load, make chore forms invisible

const onStartState = function (event) {
  event.preventDefault()
  ui.startState
}

// Show events

// Create a show

const onCreateArtwork = function (event) {
  event.preventDefault()
  console.log('you have reached onCreateArtwork')
  const data = getFormFields(event.target)
  console.log('this is data from onCreateArtwork', data)
  api.createArtwork(data)
    .then(ui.createShowSuccess)
    .catch(ui.createShowFailure)
}

// Show all of a user's shows

const onShowAllShows = function (event) {
  event.preventDefault()
  console.log('You have arrived at onShowAllShows')
  const data = getFormFields(event.target)
  console.log(data)
  api.showAllShows()
    .then(ui.showShowsSuccess)
    .catch(ui.showShowsFailure)
}

// Update a show

const onUpdateShow = function (event) {
  event.preventDefault()
  let data = {}
  data.shows = getFormFields(event.target)
  let showNumber = (data.shows.show.id)
  let showObject = (data.shows)
  console.log('This is data.shows: ', data.shows)
  api.updateShow(showObject, showNumber)
  .then(ui.updateShowSuccess)
.catch(ui.updateShowFailure)
}

// Delete a show

const onDeleteShow = function (event) {
  event.preventDefault()
  const id = getFormFields(event.target)
  console.log('This is id from onDeleteShow: ', id)
  // debugger;
  api.deleteShow(id.show.id)
  .then(ui.deleteShowSuccess)
  .catch(ui.deleteShowFailure)
}

// REMEMBER TO PUT IN # before form ID!

const addHandlers = () => {
  // $('#chore-crud').on((document).ready, onStartState)
  $('#create-artwork').on('submit', onCreateArtwork)
  $('#show-user-shows').on('submit', onShowAllShows)
  $('#delete-show').on('submit', onDeleteShow)
  $('#update-show').on('submit', onUpdateShow)
}

module.exports = {
  addHandlers,
  onCreateArtwork,
  onShowAllShows,
  onUpdateShow,
  onDeleteShow
}
