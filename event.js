document.querySelectorAll('.dog').forEach(function (dog) {
    dog.addEventListener('click', function () {
        alert('You are a dog person!')
    });
})

document.querySelectorAll('.cat').forEach(function (cat) {
    cat.addEventListener('click', function () {
        alert('You are a cat person!')
    });
})