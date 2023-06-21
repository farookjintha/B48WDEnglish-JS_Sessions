// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log('Data:', data);
// }).catch((error) => {
//     console.log('Error: ', error);
// });
// console.log("Todos: ", todos);


async function getUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log('Users: ', users);
    }catch(error){
        console.log('Error: ', error);
    }
}

getUsers();
