'use strict'

let apiUrl
const apiUrls = {
  production: 'https://desolate-wildwood-48917.herokuapp.com/raiders',
  // production: 'http://localhost:4741',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
