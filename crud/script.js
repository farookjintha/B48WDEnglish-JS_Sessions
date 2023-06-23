var input = document.getElementById('input');
var posts = document.getElementById('posts');
var msg = document.getElementById('msg');

var users = document.getElementById('users');


async function getUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userList = await response.json();

        userList.forEach((currentUser) => {
            users.innerHTML += `
                <div class='user'>
                    <p> Name: ${currentUser.name}</p>
                    <p> Email: ${currentUser.email}</p>
                <div>
            `
        })
    }catch(error){
        console.log('Error: ', error);
    }
}

// If need to add img to any element dynamically
{/* <img src='${currentCountry.flags.png}' alt='Flag' /> */}


getUsers();



let data = {};

function submitPost(e){
    e.preventDefault();
    if(input.value === ''){
        msg.innerHTML = 'Post cannot be empty.'
    }else{
        msg.innerHTML = '';
        data['text'] = input.value;
        // data = {
        //     text: 'Hello'
        // }
        createPost();
    };
}

function createPost(){
    posts.innerHTML += `
        <div class='post'>
            <p>${data.text}</p>
            <span class='options'>
                <i class="fas fa-edit" onclick="editPost(this)"></i>
                <i class="fa-solid fa-trash" onclick="deletePost(this)"></i>
            </span>
        </div>
    `;

    input.value = '';
}


function editPost(event){
    input.value = event.parentElement.previousElementSibling.innerHTML;
    event.parentElement.parentElement.remove();
}

function deletePost(e){
   e.parentElement.parentElement.remove();
}