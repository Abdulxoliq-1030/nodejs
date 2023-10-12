const url = require("url");

const newUrl = new URL(
  "http://abdulxoliq.com:5000/users/user.html?name=John&status=active&age=24"
);

// return common url text
console.log(newUrl.href); // http://abdulxoliq.com/users/user.html?name=John&status=active&age=24

// return host with port
console.log(newUrl.host); // abdulxoliq.com:5000

// return hostname without port
console.log(newUrl.hostname); // abdulxoliq.com

// return path
console.log(newUrl.pathname); // /users/user.html

//  return query parameters
console.log(newUrl.search); // ?name=John&status=active&age=24

// objected
console.log(newUrl.searchParams); // URLSearchParams { 'name' => 'John', 'status' => 'active', 'age' => '24' }

// add new params
newUrl.searchParams.append("lastName", "Doe");
console.log(newUrl.searchParams); // URLSearchParams { 'name' => 'John', 'status' => 'active', 'age' => '24', 'lastName' => 'Doe' }

// loop
console.log(
  newUrl.searchParams.forEach((name, value) => {
    console.log(`${value}: ${name}`);
  })
); // {
// name: John
// status: active
// age: 24
// lastName: Doe
// }
