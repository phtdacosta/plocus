const fs = require('fs')

const renderTemplate = (template, pattern, object) => {
    return template.replace(pattern, (currentPattern, key) => {
          if (object.hasOwnProperty(key))
              return object[key]
          else {
              const error = new Error('Pattern ' + currentPattern + ' cannot match any object property')
              throw error
          }
    })
}

const renderTemplateFile = (file, pattern, object) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (error, buffer) => {
            if (error) reject(error)
            else {
                const data = renderTemplate(buffer, pattern, object)
                resolve(data)
            }
        })
    })
}

const renderTemplateFileSync = (file, pattern, object) => {
    const buffer = fs.readFileSync(file, 'utf8')
    const data = renderTemplate(buffer, pattern, object)
    return data
}

module.exports = {
    renderTemplate: renderTemplate,
    renderTemplateFile: renderTemplateFile,
    renderTemplateFileSync: renderTemplateFileSync
}