'use strict'

const getFormFields = require('./get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('events/onSignUp submitted')
  const data = getFormFields(event.target)
  // console.log('data is ', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('events/onSignIn submitted')
  const data = getFormFields(event.target)
  // console.log('data is', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // ('Did I get data? - ', data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutError)
}

const createRaider = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('data is ', data)
  api.createSubmit(data)
    .then(ui.createSuccess)
    .catch(ui.createError)
  $(event.target).trigger('reset')
}

const indexRaiders = function (event) {
  event.preventDefault()
  api.indexSubmit()
    .then(ui.indexSuccess)
    .catch(ui.indexError)
}

const getRaider = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getSubmit(data)
}

const updateRaiderList = function (event) {
  $('.update-raider-list').show()
} // may not work in time

const updateRaider = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const raiderId = $(event.target).closest('ul').attr('data-id')
  api.updateSubmit(data, raiderId)
    .then(ui.updateSuccess)
    .catch(ui.updateError)
  $(event.target).trigger('reset')
}

const deleteRaider = function (event) {
  event.preventDefault()
  const raiderId = $(event.target).closest('ul').attr('data-id')
  api.deleteSubmit(raiderId)
    .then(ui.deleteSuccess)
    .catch(ui.deleteError)
}

const addHandlers = () => {
  $('#getRaidersButton').on('click', ui.onGetRaiders)
  $('#clearRaidersButton').on('click', ui.onClearRaiders)
}

const onGetRaiders = (event) => {
  event.preventDefault()
  api.getRaiders()
    .then(ui.getRaidersSuccess)
    .catch(ui.failure)
}

const onClearRaiders = (event) => {
  event.preventDefault()
  ui.clearRaiders()
}

module.exports = {
  addHandlers: addHandlers,
  //
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  //
  indexRaiders: indexRaiders,
  createRaider: createRaider,
  getRaider: getRaider,
  updateRaider: updateRaider,
  deleteRaider: deleteRaider,
  //
  updateRaiderList: updateRaiderList,
  //
  onGetRaiders: onGetRaiders,
  onClearRaiders: onClearRaiders
}
