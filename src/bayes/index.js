var bayes = require('bayes')

var classifier = bayes()

// teach it positive phrases

classifier.learn('Build app using reactjs', 'reactjs')
classifier.learn('React Router basics', 'reactjs')

// teach it a negative phrase

classifier.learn('Introduction to Angular 5', 'angular')
classifier.learn('Ng CLI Basics', 'angular')
classifier.learn('Advanced ng tricks','angular')

// now ask it to categorize a document it has never seen before

const category = classifier.categorize('Ionic 3 with ng cli')
console.log(category)
