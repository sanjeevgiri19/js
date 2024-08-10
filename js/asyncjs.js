console.log("hesssy");


// Define three example functions
// function first() {
//     console.log(1)
//   }
  
//   function second() {
//     console.log(2)
//   }
  
//   function third() {
//     console.log(3)
//   }
//   // Execute the functions
// first()
// second()
// third()

// Output
// 1
// 2
// 3




// function first(){
//     console.log("1");
// }

// function second (){
//     setTimeout(() => {
//         console.log("2");
    
//     })
// }

// function third(){
//     console.log("3");
// }

//  first()
//  second()
//  third()

//  Output
// 1
// 3
// 2



// The stack, or call stack, holds the state of what function is currently running.
// The queue, also referred to as message queue or task queue, is a waiting area for functions. Whenever the call stack is empty, the event loop will check the queue for any waiting messages, starting from the oldest message. Once it finds one, it will add it to the stack, which will execute the function in the message.

// In the setTimeout example, the anonymous function runs immediately after the rest of the top-level execution, since the timer was set to 0 seconds. It’s important to remember that the timer does not mean that the code will execute in exactly 0 seconds or whatever the specified time is, but that it will add the anonymous function to the queue in that amount of time. This queue system exists because if the timer were to add the anonymous function directly to the stack when the timer finishes, it would interrupt whatever function is currently running, which could have unintended and unpredictable effects.

// Note: There is also another queue called the job queue or microtask queue that handles promises. Microtasks like promises are handled at a higher priority than macrotasks like setTimeout.

// Now you know how the event loop uses the stack and queue to handle the execution order of code. The next task is to figure out how to control the order of execution in your code. To do this, you will first learn about the original way to ensure asynchronous code is handled correctly by the event loop: callback functions.



// A function
// function fn() {
//     console.log('Just a function')
//   }
  
//   // A function that takes another function as an argument
//   function higherOrderFunction(callback) {
//     // When you call a function that is passed as an argument, it is referred to as a callback
//     callback()
//   }
  
//   // Passing a function
//   higherOrderFunction(fn)




// Define three functions
// function first() {
//     console.log(1)
//   }
  
//   function second(callback) {
//     setTimeout(() => {
//       console.log(2)
//       // Execute the callback function
//       callback()
//     }, 0)
//   }
  
//   function third() {
//     console.log(3)
//   }

// first();
// second(third);




// Nested Callbacks and the Pyramid of Doom

// function pyramidOfDoom() {
//     setTimeout(() => {
//       console.log(1)
//       setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//           console.log(3)
//         }, 2000)
//       }, 3000)
//     }, 5000)
//   }

//   pyramidOfDoom();

  // output:
  // 1  (after 5 second)
  // 2  (after 8 seconds)
  // 3  (after 11 seconds)




//   Example 1: Simple Async Function

// async function fetchData() {
//   return "data fetched";
// }

// fetchData().then(data => {
//   console.log(data);
// })




// Example 2: Using await to Wait for a Promise

// function delay(ms){
//   return new Promise(resolve => {
//     setTimeout(resolve, ms) 
//   })
// }

// async function delayed() {
//   const datas = await delay(4000);  // Waits for 4 seconds
//   console.log("this message is delayed 4 seconds");
//  }
// delayed();




//EXAMPLE 3 : Error Handling with async/await

// async function fetchData() {
//   throw new Error("Failed to fetch data");
// }

// async function processData() {
//   try {
//       const data = await fetchData();
//       console.log(data);
//   } catch (error) {
//       console.error("Error caught:", error.message); // Output: Error caught: Failed to fetch data
//   }
// }

// processData();



// Example 4: Handling Multiple Errors

// async function getData() {
//   throw new Error("Failed to get data");
// }

// async function processAllData() {
//   try {
//       await getData();
//       console.log("This line will not run if getData fails");
//   } catch (error) {
//       console.error("Caught error:", error.message);
//   }
// }

// processAllData();



//Example 5. Returning Values from async Functions

// const fetchData = async () => {
//   return "simple data";
// }

// const displayData = async () => {
//   const data = await fetchData();
//   console.log(data);
// }
// displayData()




// Example 6: Returning a Promise

// function fetchData() {
//   return new Promise ( resolve => setTimeout(() => resolve("resolved data"),2000 ));
// }
// async function processData() {
//   const data = await fetchData();
//   console.log(data);
// }
// processData();



// Example 9: Chaining async Functions


// async function fetchData1() {
//   return "Data from fetchData1";
// }

// async function fetchData2() {
//   const data1 = await fetchData1();
//   return `${data1} and Data from fetchData2`;
// }

// async function processData() {
//   const data2 = await fetchData2();
//   console.log(data2); // Output: Data from fetchData1 and Data from fetchData2
// }

// processData();




// const promise = new Promise((resolve, reject) => {
//   resolve('We did it!')
// })
// promise.then((response) => {
//   console.log(response)
// })




// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolving a promise");
//   }, 2000);
// })

// promise.then((Response) => {
//   console.log(Response);
// })




