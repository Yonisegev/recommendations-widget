# Taboola - Yoni Segev

A recommendation widget created using pure Javascript, HTML and CSS and the Taboola REST API.

I've used pre-fixed variables to avoid clashing with the host site variables.

I tried to avoid using ES6 features to be able to support all browsers (IE, Baidu, etc).


## How to run (Make sure your ad-block is off):
1. Clone repo
2. ``` npm i ```
3. Make sure you have live-server installed (npm i -g live-server)
4. ``` npm start ```
5. If you want to see the widget run inside a host news website, use ```npm run start:host```
*(Do notice the host website is not responsive, but the widget is).*

## Tests
Check the js/tests/index.test.js file to see the tests

Run ```npm run test``` to test.




