'use strict'

const config = require('./config')
const events = require('./events')
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

const makeRaider = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/raiders',
    data: data
  })
}

const changeRaider = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/raiders',
    data: data
  })
}

const getRaiders = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/raiders'
  })
}

const removeRaiders = (data) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/raiders/' + data
  })
}


module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword,
  makeRaider: makeRaider,
  changeRaider: changeRaider,
  getRaiders: getRaiders,
  removeRaiders: removeRaiders

}
