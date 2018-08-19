const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 5000);
});

promise.then((data) => {
    console.log(data); // will print '1'
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 5000);
    });
}).then((data) => {
    console.log(data); // will print '2'
}).catch((e) => {
    console.log(e);
});