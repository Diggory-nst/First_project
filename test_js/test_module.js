fetch('http://localhost:3000/product')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })