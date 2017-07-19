'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

// Auth events

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('You have arrived at onSignUp in auth/events.js')
  api.post(data)
    .then(ui.onAddUserSuccess)
    .catch(ui.onAddUserFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.postSignIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  console.log('This is immediately before api.signOut() in auth/events.js')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('This is immediately before api.signOut() in auth/events.js')
  api.signOut(onSignIn.data)
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  onSignUp,
  addHandlers,
  onSignIn,
  onSignOut,
  onChangePassword
}
