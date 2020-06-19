class List {
    constructor (){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Diego';
    }

    mostraUsuario() {
        console.log(data);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function (){
    MinhaLista.add('Classe');
}



//  Método Static
class Matematica {
    static soma(a,b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,2));




// Operações com Array
const arr = [1, 3, 4 , 5, 8, 9 ];

const newArr = arr.map(function(item , index) {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0 ;
});

console.log(filter);

const find = arr.find(function(item) {
    return item === 4;
});





// Arrow Functions

const newArr2 = arr.map(item => item *2);

const teste = () => {
    return 'teste';
}

const teste2 = () => 'teste';

const teste3 = () => ({nome : 'Vitor'});





// Valores padrão

const soma = (a , b=6) => a + b;

console.log(soma(2));






// Desestruturação

const usuario = {
    nome: 'Vitor',
    idade: 24,
    endereco:{
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
    },
};

const { nome, idade, endereco: {cidade} } = usuario;

console.log(cidade);

function mostraNome( {nome , endereco: {estado} } ) {
    console.log(nome, estado);
}

mostraNome(usuario);





// REST

const arr3 = [1,2,3,4];

const [a,b, ...c] = arr3;

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);


// SPREAD

const usuario1 = {
    nome: 'Vitor',
    idade: 24,
    cidade: 'Rio de Janeiro'
};

const usuario2 = {... usuario1, nome: 'Gabriel'};

console.log(usuario2);



// Template Literals

const nome2 = 'Vitor';
const idade2 = 24;

    //console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' idade ');
console.log(`Meu nome é ${nome2} e tenho ${idade2} anos.`);