'use strict'

const store = require('./store')
// const api = require('./api')
const events = require('./events')
// const reqIndex = require('../scripts/index')

const signInDisplay = function () {
$('#sign-in-field').html(`<form id='sign-out-form'>
  <button type="submit">Sign Out</button>
  </form>`)
$('#dropdown-link').html(`<h4><button id="show-change-password" class="formlink">Change My Password</button></h4>`)
$('#dropdown-anchor').html(``)
$('#sign-up-field').html(``)
}

const signOutDisplay = function () {
  $('#sign-in-field').html(`<form id='sign-in-form' class="forms">
              <input name="credentials[email]" type="email" placeholder="Enter Username">
              <input name="credentials[password]" type="password" placeholder="Enter Password">
              <button type="submit"  class="forms">Sign In</button>
            </form>`)
    $('#dropdown-link').html(``)
    $('#dropdown-anchor').html(`  <h4><button id="show-sign-up" class="formlink" type="button">Sign Up</button></h4>`)
    $('#sign-up-field').html(``)

  }


const signUpSuccess = function (data) {
  $('#login-infobox').html(`<h4>New Player Created!</h4>`)
}

const signUpError = function (error) {
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#login-infobox').html(`<h4>Signed In!</h4>`)
  signInDisplay()
  // reqIndex.resetBoard()
  console.log('we signed in')
  }

const signInError = function (error) {
  $('#login-infobox').html(`<h4>Sign-in failed. Double check your password.</h4>`)
}

const changePasswordSuccess = function () {
  $('#login-infobox').html(`<h4>You successfully changed your password.</h4>`)
}

const changePasswordError = function (error) {
  $('#login-infobox').html(`<h4>There was an error.</h4>`)
}

const signOutSuccess = function () {
  // ('you successfully signed out')
  delete store.user
  // ('store after sign out is', store)
  $('#login-infobox').html(`<h4>Signed Out!</h4>`)
  signOutDisplay()
  // reqIndex.resetBoard()
}

const signOutError = function (error) {
  $('#login-infobox').html(`<h4>Signed Out!</h4>`)
}

const showRaidersTemplate = require('./raider-listing.handlebars')

const getRaidersSuccess = (data) => {
  console.log(data)
  const showRaidersHtml = showRaidersTemplate({ raiders: data.raiders })
  $('.content').append(showRaidersHtml)
}

const deleteRaiderSuccess = () => {
  $('.message').html('Raider annihlated')
}

const clearRaiders = () => {
  $('.content').empty()
}

const clearRaiderError = (error) => {
  console.log('Something went wrong.')
}


  // const doSignUp = function () {
  //   $('#sign-up-form').on('submit', events.onSignUp)
  // }
  //
  // const doChangePassword = function () {
  //   $('#change-password-form').on('submit', events.onChangePassword)
  // }

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  signInSuccess: signInSuccess,
  signInError: signInError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordError: changePasswordError,
  signOutSuccess: signOutSuccess,
  signOutError: signOutError,
  deleteRaiderSuccess: deleteRaiderSuccess,
  clearRaiders: clearRaiders,
  getRaidersSuccess: getRaidersSuccess,
  store: store
//  doSignUp: doSignUp,
//  doChangePassword: doChangePassword
}
