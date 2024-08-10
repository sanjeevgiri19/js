console.log("heasasy");


// fetch("https://jsonplaceholder.typicode.com/users")
// .then (function (response) {
//     console.log(response.json());
// })



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then (function (response) {
//     return response.json();
//     })
//     .then ( function (data) {
//         console.log(data);
//     })



// with arrow function

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data));



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data));




//example: using methods

// const data = {
//     title: "this is title",
//     body: "this is post body",
//     userId: 2
// }

// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//         "Content-type" : "application/json"
//     }
// })
// .then((res) => res.json())
// .then((data) => console.log(data));


