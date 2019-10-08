# plocus
Unopinionated static template render engine under 650 bytes

# Features
* Ease of use means more focus on what is important, the creative stuff.
* Create one template model, use it everywhere just changing specific data.
* Split bigger templates on smaller components and combine them as you wish.
* Supports any UTF-8 pattern.
* Extreme small code footprint allows usage on any place supporting JavaScript, from Node.js to browser.


## Usage example:

```js
// Requires the module manually
var p = require('plocus')

// Reusable template example using "(( property ))" as the chosen pattern for the object
var page = `
<html>
  <head>
    <title>(( name ))</title>
  </head>
  Hello (( name ))! Your alchemy exams are scheduled for (( examDate )).
</html>
`

// Object containing valuable information 
var person = {'name':'Cynthia', 'examDate': '05/27/2015'}

// Renders the page filling all property patterns with their corresponding values
var renderedPage = p.renderTemplate(page, /(( (\w*) ))/, person)
// renderedPage value is
/*
<html>
  <head>
    <title>Cynthia</title>
  </head>
  Hello Cynthia! Your alchemy exams are scheduled for 05/27/2015.
</html>
*/
```

# Documentation
The following function is the main one, the others are just specialized cases.
## `renderTemplate(template, pattern, object)`
> Returns a **`string`** which value is generated replacing any object keys found in the raw template by their values based on the given pattern.

**`template`** is a string model containing data to be replaced.

**`pattern`** is a [*regular expression literal*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) model.

**`object`** is any set of keys and their corresponding values.

## `renderTemplateFile(path, pattern, object)`
> Returns a **`string`** which value is generated asynchronously replacing any object keys found in the loaded template by their values based on the given pattern.

**`path`** is the absolute path including the file name which contains the string model.

**`pattern`** is a [*regular expression literal*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) model.

**`object`** is any set of keys and their corresponding values.

* **`renderTemplateFile`** calls **`renderTemplate`** internally.
## `renderTemplateFileSync(path, pattern, object)`
> Returns a **`string`** which value is generated synchronously replacing any object keys found in the loaded template by their values based on the given pattern.

**`path`** is the absolute path including the file name which contains the string model.

**`pattern`** is a *regular expression literal* model.

**`object`** is any set of keys and their corresponding values.

* **`renderTemplateFileSync`** calls **`renderTemplate`** internally.

# License
This project exists under the [MIT license](https://github.com/phtdacosta/plocus/blob/master/LICENSE).
