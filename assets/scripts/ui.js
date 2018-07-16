'use strict'

const store = require('./store')
const handlebars = require('./raider-listing.handlebars')

// const signInannouncer = function () {
// $('#sign-in-field').html(`<form id='sign-out-form'>
//   <button type="submit">Sign Out</button>
//   </form>`)
// $('#dropdown-link').html(`<h4><button id="show-change-password" class="formlink">Change My Password</button></h4>`)
// $('#dropdown-anchor').html(``)
// $('#sign-up-field').html(``)
// }

const signOutAnnouncer = function () {
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
  $('#dropdown-anchor').html(`
      <h4><button id="show-sign-up" class="formlink" type="button">Sign Up</button></h4>`)
  $('dropdown-link').html(``)
  $('#sign-up-field').html(``)
  //
  $('#create-playlist').show()
  $('#get-playlist').show()
  $('#change-password').show()
}

const signUpError = function () {
  $('#login-infobox').html(`<h4>That didn't seem to work. Try again?</h4>`)
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#login-infobox').html(`<h4>Signed In!</h4>`)
  $('#announcer').html(`Hello, Commander.`)
  $('#dropdown-anchor').html(``)
  $('#sign-in-field').html(``)
  $('#sign-in-field').html(`<form id='sign-out-form'>
  <button type="submit">Sign Out</button>
  </form>`)
  $('#dropdown-link').html(``)
  $('#sign-up-field').html(``)
  $('#dropdown-anchor-pw').html(`
      <h4><button id="show-change-password" class="formlink" type="button">Change Your Password</button></h4>`)

  // $('#raider-options').html(`<h4>Delete a raider</h4>
  //       <form id='delete-raiders-form' class="forms">
  //           <input name="id" type="integer" placeholder="Enter ID">
  //           <button type="submit"  class="forms">Delete</button>
  //         </form>
  // <h4>Create a raider</h4>
  //         <form id='create-raiders-form' class="forms">
  //             <input name="name" type="text" placeholder="Enter Name">
  //             <input name="power" type="integer" placeholder="Enter Power">
  //             <button type="submit"  class="forms">Create</button>
  //           </form>
  // <h4>Adjust a raider</h4>
  //         <form id='adjust-raiders-form' class="forms">
  //         <input name="ID" type="text" placeholder="Enter Name">
  //         <input name="name" type="text" placeholder="Enter New Name">
  //         <input name="power" type="integer" placeholder="Enter New Power">
  //         <button type="submit"  class="forms">Adjust</button>
  //       </form>
  //       <div class="tan-line"></div>
  //       <button id="getRaidersButton" class="btn btn-default">Get Raiders!</button>
  // //     <button id="clearRaidersButton" class="btn btn-default">Clear Raiders!</button>
  //     <div id="content" class="content"></div>`)

  $('#create-raider').show()
  $('#get-raider').show()

  // console.log('we signed in')
}

const signInError = function () {
  $('#login-infobox').html(`<h4>Sign-in failed. Double check your password.</h4>`)
}

const changePasswordSuccess = function () {
  $('#login-infobox').html(`<h4>You successfully changed your password.</h4>`)
  $('#change-password-field').html(``)
}

const changePasswordError = function () {
  $('#login-infobox').html(`<h4>That didn't seem to work. Please double check.</h4>`)
}

const signOutSuccess = function () {
  // ('you successfully signed out')
  delete store.user
  // ('store after sign out is', store)
  $('#login-infobox').html(`<h4>Signed Out!</h4>`)
  $('#raider-options').html(``)
  $('#dropdown-anchor-pw').html(``)
  $('#initial-buttons').html(``)
  $('#raiders-content').html(``)
  signOutAnnouncer()
}

const signOutError = function () {
  $('#login-infobox').html(`<h4>That .. didn't work? Well, now we're doomed.</h4>`)
}

const createSuccess = function () {
  $('#announcer').html('We made your raider.')
}

const createError = function (error) {
  $('#announcer').html('We could not make your raider.', error)
}

const indexSuccess = function (data) {
  $('#announcer').html('Raiders assembled!')
  const showRaidersHtml = handlebars({ raiders: data.raiders })
  $('#raiders-content').html('')
  $('#raiders-content').append(showRaidersHtml)
}

const indexError = function (error) {
  $('#announcer').html('We could not get the raiders.', error)
}

const deleteSuccess = function (raiderId) {
  $('#announcer').html('That raider is history.')
  $('#content').html('')
}
const deleteError = function (error) {
  $('#announcer').html('That raider evaded your feeble attempt.', error)
}

const findSuccess = function (response) {
  $('#announcer').html('Here is your raider.')
}
const findError = function (error) {
  $('#announcer').html('That raider evaded detection.', error)
}

const updateSuccess = function (raiderId) {
  $('#announcer').html('You have updated that raider.')
  $('#content').html('')
}
const updateError = function (error) {
  $('#announcer').html('That raider was NOT updated', error)
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
  //
  store: store,
  //
  createSuccess: createSuccess,
  createError: createError,
  indexSuccess: indexSuccess,
  indexError: indexError,
  deleteSuccess: deleteSuccess,
  deleteError: deleteError,
  findSuccess: findSuccess,
  findError: findError,
  updateSuccess: updateSuccess,
  updateError: updateError
}
