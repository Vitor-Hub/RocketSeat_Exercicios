var body = document.querySelector('body');
var ul = document.createElement('ul');
var button = document.querySelector('button');


body.appendChild(ul);

button.onclick = function(){

    var valorInput = document.getElementsByName('user')[0].value;
    var li = document.createElement('li');
    var carregando = document.createTextNode("Carregando...");
    
    ul.appendChild(li);
    
    li.appendChild(carregando);

    axios.get('http://api.github.com/users/' + valorInput + '/repos')
    

    .then(function(response) {

        ul.innerHTML = '';
        li.removeChild(carregando);
        

        setTimeout(function() {

            for ( repos of response.data){
                var text = document.createTextNode(repos.name);
                var li = document.createElement('li');
                ul.appendChild(li);
                li.appendChild(text);
            }
        }, 0);
    })

    .catch(function(error) {
        console.warn(error);
        alert("Esse usuário não existe");
        ul.removeChild(li);
        li.removeChild(carregando);
    });
}





