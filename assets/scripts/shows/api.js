'use strict'

const config = require('./../config')
const store = require('./../store')

// API POST, posts a new chore to the db based on user form input

const createShow = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/shows/',
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

const showAllChores = function () {
  return $.ajax({
    url: config.apiOrigin + '/chores/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  .then((response) => {
    store.chores = response.chores
    return store
  })
}

// API PATCH, updates a chore

const updateChore = function (choreObject, choreNumber) {
  // debugger
  return $.ajax({
    url: config.apiOrigin + '/chores/' + choreNumber,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: choreObject
  })
}

// API DELETE, deletes a selected chore

const deleteChore = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/chores/' + id,
    // url: config.apiOrigins.development + '/chores/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createShow,
  showAllChores,
  updateChore,
  deleteChore
}
