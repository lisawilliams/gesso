'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const showEvents = require('./shows/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  showEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// optional JS for bootstrap modal for signup/sign in
$(function () {
  $('#login-form-link').click(function (e) {
    $('#sign-in').delay(100).fadeIn(100)
    $('#sign-up').fadeOut(100)
    $('#register-form-link').removeClass('active')
    $(this).addClass('active')
    e.preventDefault()
  })
  $('#register-form-link').click(function (e) {
    $('#sign-up').delay(100).fadeIn(100)
    $('#sign-in').fadeOut(100)
    $('#login-form-link').removeClass('active')
    $(this).addClass('active')
    e.preventDefault()
  })
})
