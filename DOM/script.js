// //  => How to Select DOM Elements

// // 1. getElementById
// const box2 = document.getElementById('box-2');
// console.log(box2);

// // 2. getElementsByClassName
// const boxes = document.getElementsByClassName('box');
// console.log(boxes);


// // 3. getElementsByTagName
// const divs = document.getElementsByTagName('div');
// console.log(divs);

// // 4. querySelector
// const query = document.querySelector('.container');
// console.log(query);

// // 5. querySelectorAll
// const queryAll = document.querySelectorAll('.container');
// console.log(query);



// // => How to Change the Content of DOM Elements

// // 1. The innerHTML Property
// const box1 = document.getElementById('box-1');
// box1.innerHTML = "<h2>BOX-1</h2>"

// //changing HTML attributes value
// const box3 = document.getElementById('box-3');
// box3.style.backgroundColor = "red";

// // 2. Security Risks with innerHTML
// // 3. The innerText and textContent Properties


// // => How to Work with Attributes of DOM Elements
// // 1. The getAttribute Method
// // 2. The setAttribute Method
// // 3. The removeAttribute Method
// // 4. The hasAttribute Method


// // const myBody = document.body;
// // myBody.style.backgroundColor = "yellow";
// // console.log(myBody);




// //creating new element and appending
// const newPara = document.createElement('p');
// newPara.innerText = "A new element";
// newPara.classList.add('box');
// const container = document.getElementById('container');
// container.appendChild(newPara);


// // Accessing DOM Elements By ID
// const element = document.getElementById('elementID');

// // By Class Name
// const elements = document.getElementsByClassName('className');

// // By Tag Name
// const elements = document.getElementsByTagName('tagName');


// // By CSS Selectors
// const element = document.querySelector('.className'); // Single element
// const elements = document.querySelectorAll('.className'); // All matching elements

// // Create an Element
// const newElement = document.createElement('div');

// // Set Inner Text or HTML
// newElement.innerText = 'This is a new element'; // For text
// newElement.innerHTML = '<strong>This is bold text</strong>'; // For HTML content

// // Append as Child
// const parentElement = document.getElementById('parent');
// parentElement.appendChild(newElement);

// // Insert Before Another Element
// const referenceElement = document.getElementById('reference');
// parentElement.insertBefore(newElement, referenceElement);

// // Remove a Child
// parentElement.removeChild(childElement);

// // Remove Itself
// element.remove();

// // Set an Attribute
// element.setAttribute('src', 'image.jpg');

// // Get an Attribute
// const src = element.getAttribute('src');


// // Remove an Attribute
// element.removeAttribute('src');


// // Inline Styles
// element.style.color = 'red';
// element.style.fontSize = '20px';


// // CSS Classes
// element.classList.add('newClass'); // Add a class
// element.classList.remove('oldClass'); // Remove a class
// element.classList.toggle('toggleClass'); // Toggle a class


// // Add Event Listener
// element.addEventListener('click', function() {
//     alert('Element clicked!');
// });


// // Remove Event Listener
// function handleClick() {
//     alert('Element clicked!');
// }
// element.addEventListener('click', handleClick);
// element.removeEventListener('click', handleClick);



// Example: Putting It All Together
// Here’s a comprehensive example that demonstrates creating, styling, and appending a new element, as well as adding an event listener:

document.getElementById('addElementBtn').addEventListener('click', function() {
    const newPara = document.createElement('p');
    newPara.innerText = "A new styled element";
    newPara.classList.add('styled');
    
    const container = document.getElementById('container');
    container.appendChild(newPara);
});