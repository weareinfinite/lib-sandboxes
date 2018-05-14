const ke = require("keyword-extractor");

var sentence = `
In this tutorial, we will see How To Deploy Nodejs App To Heroku. It is just a simple app. No fancy functionalities are there. I want to show you how you can deploy your Node.js application on Heroku. Heroku is a cloud platform as a service supportin...
`
var result = ke.extract(sentence,{
    language:"english",
    remove_digits: true,
    return_changed_case:true,
    remove_duplicates: true

});

console.log(result)
