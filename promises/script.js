
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );



// let promise = new Promise(function(resolve, reject){
//    setTimeout(() => {
//     let consts  = "Giri";
//     console.log(`hey it's me sanjeev ${consts}`);
//    }, 3000); 
//    resolve();
// });



// promise
// .then(() => {
//     console.log("promise resolved"); 
// })
// .catch((error) => {
    //console.log("promise rejected", error);
    // });



//Creating and Resolving a Simple Promise
// let simplePromise = new Promise((resolve,reject) => {
//     setTimeout((message) => {
//         resolve("promise resolved");
//     }, 3000);
// })
// simplePromise
// .then((message) => {
//     console.log(message);
// });



// Creating and Rejecting a Promise
// let rejectPromise = new Promise((resolve,reject) => {
//     setTimeout((message) => {
//         reject("promise rejected");
//     }, 3000);
// });

// rejectPromise
// .catch((error) => {
//     console.log(error);
// });




//promise example
// const spromise = new Promise((resolve, reject) => {
//     const num = Math.random();
//     if (num >= 0.5) {
//       resolve("Promise is fulfilled!");
//     } else {
//       reject("Promise failed!");
//     }
//   });
//   spromise
//   .then((message) => {
//     console.log(message); // "Promise is fulfilled!" if the promise is resolved
//   })
//   .catch((error) => {
//     console.log(error); // "Promise failed!" if the promise is rejected
//   });




//examples
//   const promises = new Promise((resolve, reject) => {
//     const num = Math.random();
//     if (num >= 0.5) {
//       resolve("Promise iss fulfilled!");
//     } else {
//       reject("Promise failed!");
//     }
//   });
  
//   function handleResolve(value) {
//     console.log(value);
//   }
  
//   function handleReject(reason) {
//     console.error(reason);
//   }
//   promises.then(handleResolve, handleReject);



//setinterval()  method

// function sinterval() {
//     console.log("The setInterval() method repeats a block of code at every given timing event.");

// }
// setInterval(sinterval,1000);




// clearTimeout() method cancels a timeout previously established by calling setTimeout().

// const timeoutId = setTimeout(() => {
//     console.log("timeout executed");
// }, 3000);
// // Clear the timeout before it executes
// clearTimeout(timeoutId);


// function placeOrder() {
//     setTimeout(() => {
//        return (Math.random() * 10) <= 5 ? 'Bag' : 'Shoe';
//     }, 2000);
// }

// let order = placeOrder();
// console.log('Order is for: ' + order);   // Output : Order is for: undefined




function placeOrder(callback) {
    setTimeout(() => {
        const order = (Math.random() * 10) <= 5 ? 'Bag' : 'Shoe';
        callback(order);
    }, 2000);
}

placeOrder((order) => {
    console.log('Order is for: ' + order);
});
