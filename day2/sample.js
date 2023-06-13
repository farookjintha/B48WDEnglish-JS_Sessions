function runAfterTimeout(){
    setTimeout(() => {
        console.log('Execute after this timeout')
    }, 10000);
}


function runAtAnInterval(){
    setInterval(() => {
        console.log('Execute after this interval')
    }, 4000);
}

function runImmediately(){
    setImmediate(() => {
        console.log('Execute immediately...')
    });
}

runAfterTimeout();
runAtAnInterval();
runImmediately();