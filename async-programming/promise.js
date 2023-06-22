// const myPromise = new Promise((resolve, reject) =>{
//     setTimeout(()=> {
//         resolve('Hello');
//     }, 10000);
// });
// // function myFunc(){
// //     setTimeout(()=> {
// //         console.log('Hello');
// //     }, 3000);
// // }

// //Callback - .then(() => {

// // })

// // myFunc();
// // console.log('Promise: ', myPromise);

// //Promise chaining

// myPromise.then((data) => {
//     console.log('Then 1: ', data);
//     return data;
// }).then((data) => {
//     console.log('Then 2: ', data);
//     return data
// }).then((data) => {
//     console.log('Then 3: ', data);
//     return data
// }).catch((error) => {
//     console.log('On Error: ', error);
// }).finally(() => {
//     console.log('How are you!');
// })


// Async / Await

const uploadFile = (filePath) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve(`File ${filePath} upload has been successfull.`);
        }, 5000);
    }) 
}

const anotherTimeConsumingJob = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            // reject(`Error has been thrown.`);
            resolve('Executed successfully.')
        }, 10000);
    }) 
}

try{

}catch(error){

}

async function myResume(){
    try{
        const myFile = 'resume.pdf';
        const output = await uploadFile(myFile);
        console.log('Output: ', output);
        const output2 = await anotherTimeConsumingJob(); 
        console.log('Output 2: ', output2);

        console.log('All promises have been handled.');
    }catch(error){
        console.log('Error: ', error);
    }
}


myResume();