'use strict'
// Requires the module locally from the parent folder
const te = require('../src/index.js')
// Creates patterns to replace specific data
const userPattern = /%(\w*)%/g,
    generalPattern = /{{ (\w*) }}/g
// Creates templates using HTML
const portfolioTemplate = '<html><h1>{{ title }}</h1><div>{{ profile }}</div></html>',
    profileTemplate = '<center>%name%<br>%city%<br>%job%</center>'
// Initializes the objects to fill the templates and the smaller components to fill bigger ones
const personObject = {'name':'Lio', 'city':'Firenze', 'job':'Scientist'}
const profileComponent = te.renderTemplate(profileTemplate, userPattern, personObject)
const portfolioObject = {'title':'My Portfolio', 'profile': profileComponent}
// Renders the final HTML page
const portfolioPage = te.renderTemplate(portfolioTemplate, generalPattern, portfolioObject)