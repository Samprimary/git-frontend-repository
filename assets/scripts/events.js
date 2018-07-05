'use strict'

const getFormFields = require('./get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('events/onSignUp submitted')
  const data = getFormFields(event.target)
  console.log('data is ', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('events/onSignIn submitted')
  const data = getFormFields(event.target)
  console.log('data is', data)
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

const onRemoveRaider = (event) => {
  event.preventDefault()
  const raiderId = $(event.target).closest('ul').attr('data-id')
  console.log('raiderId is ', raiderId)
    api.deleteRaiders(raiderId)
      .then(ui.getRaidersSucess)
      .catch(ui.failure)
}

const onDeleteRaiders = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is' + data)
  api.removeRaiders(data)
  .then(ui.removeRaidersSucess)
  .catch(ui.failure)
}

const addHandlers = () => {
  $('#getRaidersButton').on('click', onGetRaiders)
  $('#clearRaidersButton').on('click', onClearRaiders)
  $('.content').on('click', '.remove-raider', onRemoveRaider)

  $('#delete-raiders-form').on('click', onDeleteRaiders)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  addHandlers: addHandlers,
  onRemoveRaider: onRemoveRaider,
  onGetRaiders: onGetRaiders,
  onClearRaiders: onClearRaiders
}
