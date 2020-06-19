function checaIdade(age){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(age >= 18){
                resolve()
            } else {
                reject()
            }
        }, 2000)
    })
}

checaIdade(10)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });
   