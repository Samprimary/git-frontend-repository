'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const signOut = function (data) {
  // ('sign out is', data)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  // ('store is', store)
  // ('token is', store.user.token)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexSubmit = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/raiders/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getSubmit = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/raiders/' + data.raiders.id,
    headers: {
      contentType: 'application/json'
    },
    data: {
      id: data.raiders.id,
      raider: {
        name: data.raiders.name,
        power: data.raiders.power
      }
    }
  })
}

const createSubmit = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/raiders/',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: data
  })
}

const updateSubmit = function (data, raiderId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/raiders/' + raiderId,
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: data
  })
}

const deleteSubmit = (raiderId) => {
  return $.ajax({
    url: config.apiUrl + '/raiders/' + raiderId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword,
  indexSubmit: indexSubmit,
  getSubmit: getSubmit,
  createSubmit: createSubmit,
  updateSubmit: updateSubmit,
  deleteSubmit: deleteSubmit

}
