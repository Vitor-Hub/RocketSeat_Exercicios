var body = document.querySelector('body');
var ul = document.createElement('ul');
var button = document.querySelector('button');


body.appendChild(ul);

button.onclick = function(){

    var valorInput = document.getElementsByName('user')[0].value;

    axios.get('http://api.github.com/users/' + valorInput + '/repos')
    .then(function(response) {

        ul.innerHTML = '';

        for ( repos of response.data){
            var text = document.createTextNode(repos.name);
            var li = document.createElement('li');

            ul.appendChild(li);
            li.appendChild(text);
        }
    })

    .catch(function(error) {
        console.warn(error);
    });
}





