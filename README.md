# Start server

cd server
npm install
npm start

 Server will be running at http://localhost:3001 in debug mode.

exaple of API : http://localhost:3001/api/romannumerals/80

# Start client

cd client
npm install
npm start

Client app will be running at http://localhost:3000/


# Approached use

For server used express generator to build scafolding app and added routes for api, currently for /romannumerals/:upperLimit?

For client used create-react-app to build scafolding app. Used following notable library in particular

Redux for data layer 
redux-promise-middleware for async action creater along with redux-thunk

Following notable es6 featurs used

async await for asynchonous operations
array function
let
const
Object shorthand 
Spread operator


# Improvements

Following improvements could be done to polish up this test app
More unit tests
configuration file for api endpoitns and upperLimit for upper limit number to convert to romoan, currently its 3999
More styling
remove scafolding codes

In server, could implement headers check for security purpose
add unit testings
remove scafolding codes

# Debug tools

used redux debugger for chrome, which can be enabled by setting true to let debug = true at line 6 of store-creater.js and then redux debugger tool for chrome should be installed.
used react debugger tool for chrome

In server, used nodemon and --inspect .eg nodemon --inspect ./bin/www, which is then can be debugged in chrome for any request made to server e.g Debugger listening on ws://127.0.0.1:9229/67171643-46cb-44ce-acce-061f9f921b7a
For help see https://nodejs.org/en/docs/inspector


# Tech stack version
React fibre i.e 16.x
Node 9.4.0

