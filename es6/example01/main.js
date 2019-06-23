/* === WEBPACK === */
import { sombra as somaFunction, sub } from "./funcoes";
import * as funcoes from "./sapinho";
import somarFunction from "./soma";
import memei, { totolis } from "./functions";
console.log(somaFunction(1, 2));
console.log(sub(4, 2));
console.log(somarFunction(1, 2));
console.log(memei(1000, 2));
console.log(totolis(1000, 2));
console.log(funcoes);
console.log(funcoes.sombra(1, 6));
/* === CLASS === */
if (false) {
  if (false) {
    class List {
      constructor() {
        this.data = [];
      }

      add(data) {
        this.data.push(data);
        console.log(this.data);
      }
    }

    class TodoList extends List {
      constructor() {
        super(); //Chama o constructor da class pai, que é List (TodoList extends List)

        this.usuario = "Diego";
      }
      mostraUsuario() {
        console.log(this.usuario);
      }
    }

    var MinhaLista = new TodoList();

    document.getElementById("novotodo").onclick = function() {
      MinhaLista.add("Novo todo");
    };

    MinhaLista.mostraUsuario();
  }
  if (false) {
    class TodoList {
      constructor() {
        this.todos = [];
      }
      static addTodo() {
        //static serve para passar uma info e retornar outra idependentemente do restante da classe.
        //geralmente nem tem constructor quando tem classe static
        this.todos.push("Novo todo"); //métodos static não vão enxergar o this.todos
        console.log(this.todos);
      }
    }
    //TodoList.addTodo();//VAI DAR ERRO POIS STATIC NÃO TEM THIS

    class Matematica {
      static soma(a, b) {
        return a + b;
      }
    }
    console.log(Matematica.soma(1, 2));
  }
}
/* === CONSTANTES === */
if (false) {
  const a = 1; //valor não pode reatribuir, mas pode mutar
  //a = 3;//vai dar erro, pois não pode reatribuir
  const usuario = { nome: "Diego" };
  usuario.nome = "Cleiton"; //isso é mutar, e pode
  console.log(usuario);
}
/* === ESCOPO === */
if (false) {
  function teste(x) {
    //variável dentro de uma função
    let y = 2;
    if (x > 5) {
      let y = 4;
      //pode refazer isso aqui dentro novamente
      console.log(x, y);
    }
  }
  teste(10);
  //OU
  let i = 5;
  for (let i = 0; i < 10; i++) {
    // some statements
    console.log("dentro: ", i);
  }
  // Here i is 5
  console.log("fora: ", i);
}
/* === OPERAÇÕES EM ARRAY(VETOR) === */
if (false) {
  const arr = [1, 3, 4, 5, 8, 9];
  const newArr = arr.map(function(item, index) {
    return item + index;
  });
  console.log(newArr);

  const sum = arr.reduce(function(total, next) {
    return total + next;
  });
  console.log(sum);

  const filter = arr.filter(function(item) {
    //sempre tem que retornar true or false aqui dentro;
    return item % 2 === 0; //divisiveis por 2, pares
  });
  console.log(filter);

  const find = arr.find(function(item) {
    return item === 4;
  });
  console.log(find);
}
/* === ARROW FUNCTION === */
if (false) {
  const arr = [1, 3, 4, 5, 6];
  const newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log(newArr);
  //OU (bem reduzido heim)
  const newArr2 = arr.map(item => item * 2);
  console.log(newArr2);

  function teste01() {
    return "teste";
  }
  console.log(teste01());
  //OU
  const teste02 = () => {
    return "teste";
  }; //mas não é recomendado
  console.log(teste02());
  //OU
  const teste03 = () => "teste";
  console.log(teste03());
  //PARA OBJETOS:
  const teste04 = () => ({ nome: "Diego" });
  console.log(teste04());
}
/* === VALORES PADRÃO === */
if (false) {
  function soma01(a = 3, b = 6) {
    return a + b;
  }
  console.log(soma01(1));
  console.log(soma01());
  //OU
  const soma02 = (a = 3, b = 6) => a + b;
  console.log(soma02(1));
  console.log(soma02());
}
/* === DESESTRUTURAÇÃO DE OBJETOS === */
if (false) {
  const usuario = {
    nome: "Diego",
    idade: 23,
    endereco: {
      cidade: "Rio do Sul",
      estado: "SC"
    }
  };
  if (false) {
    const nome = usuario.nome;
    const idade = usuario.idade;
    const cidade = usuario.endereco.cidade;
    console.log(nome);
    console.log(idade);
    console.log(cidade);
  } else if (false) {
    //OU
    const {
      nome,
      idade,
      endereco: { cidade }
    } = usuario;
    console.log(nome);
    console.log(idade);
    console.log(cidade);
  }
  function mostraNome(usuario) {
    console.log(usuario.nome);
  }
  mostraNome(usuario);
  //OU
  function mostraIdade({ idade }) {
    console.log(idade);
  }
  mostraIdade(usuario);
}
/* === REST/SPREAD === */
if (false) {
  //REST
  if (true) {
    const usuario = {
      nome: "Diego",
      idade: 23,
      empresa: "Rocketseat"
    };
    const { nome, ...resto } = usuario;
    console.log(nome);
    console.log(resto);

    const arr = [1, 2, 3, 4];
    const [a, b, ...c] = arr;
    console.log(a);
    console.log(b);
    console.log(c);

    const soma01 = (a, b) => a + b;
    console.log(soma01(1, 3));
    //OU
    const soma02 = (...params) => params.reduce((total, next) => total + next);
    console.log(soma02(1, 3, 4));
    //OU
    const soma03 = (a, b, ...params) => params;
    console.log(soma03(1, 3, 4));
  }
  //SPREAD
  if (true) {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);

    const usuario1 = {
      nome: "Diego",
      idade: 23,
      empresa: "Rocketseat"
    };
    const usuario2 = { ...usuario1, nome: "Gabriel" };
    console.log(usuario2);
  }
}
/* === TEMPLATE LITERALS === */
if (false) {
  //Incluir variáveis dentro de strings
  const nome = "Diego";
  const idade = 23;

  console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
  console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
}
/* === OBJECT SHORT SYNTAX === */
if (false) {
  const nome = "Diego";
  const idade = 23;
  const usuario1 = {
    nome: nome,
    idade: idade,
    empresa: "Rocketseat"
  };
  console.log(usuario1);
  //OU
  const usuario2 = {
    nome,
    idade,
    empresa: "Rocketseat"
  };
  console.log(usuario2);
}
