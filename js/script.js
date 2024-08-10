//  function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve("resolved")
//         }, 2000)
//     });
    
// }

// async function asyncCall() {
//     console.log("calling");
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();


// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//        resolve("Data fetched");
//         }, 2000);
//     });
    
// }

// fetchData().then(data =>{
//     console.log(data);
// }).catch(error =>{
//     console.log(error);
    
// });




// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Error: Data fetch failed"); // Simulating an error condition
//         }, 2000);
//     });
// }

// fetchData()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error); // This will catch and print the error
//     });



// async function fetchData() {
//     console.log("heyday");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("data fetched")
        
//         }, 2000);
//     });   
// }

// async function processData() {

//     try{
//         const data = await fetchData();
//         console.log(data);
//     }
//     catch (error){
//         console.error(error);
       
//     }
// }

// processData();



  
// const p = new Promise((res, rej) => {
//     res(1);
//   });
  
//   async function asyncReturn() {
//     return p;
//   }
  
//   function basicReturn() {
//     return Promise.resolve(p);
//   }
  
//   console.log(p === basicReturn()); // true
//   console.log(p === asyncReturn()); // false

// => async functions always return a new promise, even when returning an existing promise.
// => Promise.resolve(p) returns the exact same promise p if p is already a promise.
// => This is why the first comparison is true and the second is false.
  

