'use strict'

const getFormFields = require('./get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // ('the form was submitted')
  const data = getFormFields(event.target)
  // ('data is', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  // ('the form was submitted')
  const data = getFormFields(event.target)
  // ('data is', data)
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

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut
}
