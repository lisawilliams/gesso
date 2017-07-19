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

const onCreateShow = function (event) {
  event.preventDefault()
  console.log('you have reached onCreateShow')
  const data = getFormFields(event.target)
  console.log('this is data from onCreateShow', data)
  api.createShow(data)
    .then(ui.createShowSuccess)
    .catch(ui.createShowFailure)
}

// Show all of a user's chores

// Show all of a user's chores

const onShowAllChores = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showAllChores()
    .then(ui.showChoreSuccess)
    .catch(ui.showChoreFailure)
}

// Update a chore

const onUpdateChore = function (event) {
  event.preventDefault()
  let data = {}
  data.chores = getFormFields(event.target)
  let choreNumber = (data.chores.chore.id)
  let choreObject = (data.chores)
  api.updateChore(choreObject, choreNumber)
  .then(ui.updateChoreSuccess)
.catch(ui.updateChoreFailure)
}

// Delete a chore

const onDeleteChore = function (event) {
  event.preventDefault()
  const id = getFormFields(event.target)
  // debugger;
  api.deleteChore(id.chore.id)
  .then(ui.deleteChoreSuccess)
  .catch(ui.deleteChoreFailure)
}

// REMEMBER TO PUT IN # before form ID!

const addHandlers = () => {
  // $('#chore-crud').on((document).ready, onStartState)
  $('#create-show').on('submit', onCreateShow)
  $('#show-chore').on('submit', onShowAllChores)
  $('#delete-chore').on('submit', onDeleteChore)
  $('#update-chore').on('submit', onUpdateChore)
}

module.exports = {
  addHandlers,
  onCreateShow,
  onShowAllChores,
  onUpdateChore,
  onDeleteChore
}
