'use strict'
const ShowsTemplate = require('../templates/show-list.handlebars')
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

// Writing a function to format the datetime returned from the API for a show's time

const success = (data) => {
}

const failure = (error) => {
}

// Show functions

// Show create

const createShowSuccess = (response) => {
  resetForm($('#create-show'))
  $('#usermessages').text('You have added a chore!')
  $('#chore-list').empty()
  $('#show-chore-button').show()
}

const createShowFailure = (response) => {
  $('#usermessages').text('Adding a chore failed. Try again.')
  console.log('This is response from shows/ui.js', response)
}

// Show a user's shows

const validateShowShow = (response) => {
  if (response.shows[0].id > 0) {
    showShowsSuccess(response)
  } else {
    noShowShowsTwice(response)
  }
}

const showShowsSuccess = (response) => {
  console.log('You have arrived at showShowsSuccess in ui.js')
  // store.chores returns an empty array -- [] -- if there are no chores
  // linter expects === but code fails if it is not ==
  if (store.shows == '') {
    $('#usermessages').text('You don\'t have any shows yet. How about adding some using Create A Listing below?')
  } else {
    $('#show-list').show()
    const ShowList = ShowsTemplate({ shows: store.shows })
    console.log('This is store.shows at showShowsSuccess in ui.js: ', store.shows)
    // this is a test to begin debugging an approach to formatting the time in a show's Listing
    let date = new Date('2014-8-20')
    console.log((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear())
    $('#show-list').append(ShowList)
    console.log('This is showShowList: ', ShowList)
    console.log('This is store.shows from ui.js: ', store.shows)
    $('#usermessages').text('Look at those chores! But do not worry, you got this.')
    // $('#show-chore-button').hide()
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

const updateShowSuccess = (response) => {
  resetForm($('#update-show'))
  $('#usermessages').text('You have updated a chore!')
  $('#chore-list').empty()
  $('#show-chore-button').show()
}

const updateShowFailure = (response) => {
  $('#usermessages').text('Updating a chore failed. Try again?')
}

// Chore Delete

const deleteShowSuccess = (response) => {
  resetForm($('#delete-show'))
  $('#usermessages').text('You have deleted a chore!')
  $('#chore-list').empty()
  $('#show-chore-button').show()
}

const deleteShowFailure = (response) => {
  $('#usermessages').text('Deleting a chore failed. Try again.')
}

module.exports = {
  resetForm,
  failure,
  success,
  createShowSuccess,
  createShowFailure,
  validateShowShow,
  showShowsSuccess,
  showChoreFailure,
  noChoresYet,
  updateShowSuccess,
  updateShowFailure,
  deleteShowSuccess,
  deleteShowFailure
}
