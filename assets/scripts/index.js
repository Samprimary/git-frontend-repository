'use strict'

const api = require('./api')

$(() => {
  $('#dropdown-anchor').click('#show-sign-up', function () {
    $('#sign-up-field').html(``)
    $('#sign-up-field').html(`<form id='sign-up-form' class="forms">
        <input name="credentials[email]" type="email" placeholder="Enter Username">
        <input name="credentials[password]" type="password" placeholder="Enter Password">
        <input name="credentials[password_confirmation]" type="password" placeholder="Confirm Password">
        <button type="submit"  class="forms">Sign Up</button>
      </form>`)
    $('#sign-up-form').on('submit', authEvents.onSignUp)
  })

  $('#dropdown-link').click('#show-change-password', function () {
    $('#sign-up-field').html(``)
    $('#sign-up-field').html(`<form id='change-password-form' class="forms">
        <input name="passwords[old]" type="password" placeholder="Old Password">
        <input name="passwords[new]" type="password" placeholder="New Password">
        <input name="credentials[password_confirmation]" type="password" placeholder="Confirm Password">
        <button type="submit" class="forms">Change Password</button>
      </form>`)
    $('#change-password-form').on('submit', authEvents.onChangePassword)
  })

  // $('#sign-in-form').on('submit', authEvents.onSignIn)
  // $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-in-field').on('submit', '#sign-in-form', authEvents.onSignIn)
  $('#sign-in-field').on('submit', '#sign-out-form', authEvents.onSignOut)
})
