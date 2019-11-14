require('dotenv').config();
// MY_MEM is an env variable we are making up just fo the sake of testing env vars out
// this can be tested using MY_MEM=Arrays node environment_variables.js
// this will result in the console logging out 'I remember Arrays'
console.log('I remember ' + process.env.MY_MEM);

// I won't specify MY_FAV intentionally so I can see teh default being used
const my_favorite = process.env.MY_FAV || 'filter function';
console.log('I really like the ' + my_favorite);

// This can be called so that the default is used and also with a specific DB_HOST
// MY_MEM=Arrays node environment_variables.js
// MY_MEM=Arrays DB_HOST=myprodawshost node environment_variables.js
const db_host = process.env.DB_HOST || 'localhost';
console.log('Using databse host: ' + db_host);

