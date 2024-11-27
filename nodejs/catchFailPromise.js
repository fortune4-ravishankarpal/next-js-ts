const promises = [Promise.resolve(1), Promise.reject("Error 1"), Promise.resolve(3), Promise.reject("Error 2")];

Promise.allSettled(promises).then((results) => {
    console.log(results);
});
