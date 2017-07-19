'use strict'
const showChoresTemplate = require('../templates/chore-list.handlebars')
const store = require('./../store')

// Code to reset form
// Instructions for how to call it below

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected')
}

// to call, use:
// resetForm($('#myform')); // by id, recommended
// resetForm($('form[name=myName]')); // by name

const success = (data) => {
}

const failure = (error) => {
}

// Chore functions

// Chore create

const createShowSuccess = (response) => {
  resetForm($('#create-show'))
  $('#usermessages').text('You have added a chore!')
  $('#chore-list').empty()
  $('#show-chore-button').show()
}

const createChoreFailure = (response) => {
  $('#usermessages').text('Adding a chore failed. Try again.')
  console.log('This is response from shows/ui.js', response)
}

// Chore show

const validateChoreShow = (response) => {
  if (response.chores[0].id > 0) {
    showChoreSuccess(response)
  } else {
    noShowChoreTwice(response)
  }
}

const showChoreSuccess = (response) => {
  // store.chores returns an empty array -- [] -- if there are no chores
  // linter expects === but code fails if it is not ==
  if (store.chores == '') {
    $('#usermessages').text('You don\'t have any chores yet. How about adding some using Create A Chore below?')
  } else {
    $('#chore-list').show()
    const showChoreList = showChoresTemplate({ chores: store.chores })
    $('#chore-list').append(showChoreList)
    $('#usermessages').text('Look at those chores! But do not worry, you got this.')
    $('#show-chore-button').hide()
  }
}

const showChoreFailure = (response) => {
  $('#usermessages').text('Hm. Showing all the chores failed. Try again?')
}

// In case user hasn't added any chores yet but clicks chore button

const noChoresYet = (response) => {
  $('#usermessages').text('You don\'t have any chores yet. How about adding some using Create A Chore below?')
}

// Chore Update

const updateChoreSuccess = (response) => {
  resetForm($('#update-chore'))
  $('#usermessages').text('You have updated a chore!')
  $('#chore-list').empty()
  $('#show-chore-button').show()
}

const updateChoreFailure = (response) => {
  $('#usermessages').text('Updating a chore failed. Try again?')
}

// Chore Delete

const deleteChoreSuccess = (response) => {
  resetForm($('#delete-chore'))
  $('#usermessages').text('You have deleted a chore!')
  $('#chore-list').empty()
  $('#show-chore-button').show()
}

const deleteChoreFailure = (response) => {
  $('#usermessages').text('Deleting a chore failed. Try again.')
}

module.exports = {
  resetForm,
  failure,
  success,
  createShowSuccess,
  createChoreFailure,
  validateChoreShow,
  showChoreSuccess,
  showChoreFailure,
  noChoresYet,
  updateChoreSuccess,
  updateChoreFailure,
  deleteChoreSuccess,
  deleteChoreFailure
}
