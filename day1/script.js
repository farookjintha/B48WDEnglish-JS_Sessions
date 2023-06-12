function createMyElement(){
    const myHeading = document.createElement('h1'); //to add a new element ex: div, span, h1, img
    myHeading.innerText = 'This is my Heading element!'; //to add a content inside the element
    myHeading.setAttribute('class', 'my-custom-class'); //to add an attribute to an element ex: class, id, href
    document.body.appendChild(myHeading);
};

function createMyAnchorElement(){
    const myAnchor = document.createElement('a'); //to add a new element ex: div, span, h1, img
    myAnchor.innerText = 'Go to Youtube'; //to add a content inside the element
    myAnchor.setAttribute('href', 'https://www.youtube.com'); //to add an attribute to an element ex: class, id, href
    myAnchor.setAttribute('target', '_blank')
    document.body.appendChild(myAnchor);
    document.body.append('Just a string.....');
};

function accessAndModifyMyElement(){
    const myElement = document.getElementById('myDiv1');
    myElement.style.width = '300px';
    myElement.style.height = '300px';
    myElement.style.border = '1px solid red';
    myElement.innerHTML = "<img src='./filename.png' />";


    const myElement2 = document.getElementsByClassName('myDiv2');
    myElement2[0].style.width = '300px';
    myElement2[0].style.height = '300px';
    myElement2[0].style.border = '1px solid green';
    myElement2[0].innerHTML = '<h2>Heading inside my element.</h2>';



    myElement2[1].style.width = '300px';
    myElement2[1].style.height = '300px';
    myElement2[1].style.border = '1px solid blue';
    myElement2[1].innerHTML = '<h2>Heading inside my element.</h2>';
}

function accessUsingQuerySelector(){
    const myElements = document.querySelectorAll('#myDiv1');

    myElements.forEach((element) => {
        element.style.width = '300px';
        element.style.height = '300px';
        element.style.border = '1px solid red';
        element.innerHTML = '<h2>Accessed using Query Selector</h2>';
    })

    
    const myElement = document.querySelector('#myDiv1');

    myElement.style.width = '300px';
    myElement.style.height = '300px';
    myElement.style.border = '1px solid red';
    myElement.innerHTML = '<h2>Accessed using Query Selector</h2>';
}