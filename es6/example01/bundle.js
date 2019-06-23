"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* === CLASS === */
if (false) {
  if (false) {
    var List =
    /*#__PURE__*/
    function () {
      function List() {
        _classCallCheck(this, List);

        this.data = [];
      }

      _createClass(List, [{
        key: "add",
        value: function add(data) {
          this.data.push(data);
          console.log(this.data);
        }
      }]);

      return List;
    }();

    var TodoList =
    /*#__PURE__*/
    function (_List) {
      _inherits(TodoList, _List);

      function TodoList() {
        var _this;

        _classCallCheck(this, TodoList);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this)); //Chama o constructor da class pai, que é List (TodoList extends List)

        _this.usuario = "Diego";
        return _this;
      }

      _createClass(TodoList, [{
        key: "mostraUsuario",
        value: function mostraUsuario() {
          console.log(this.usuario);
        }
      }]);

      return TodoList;
    }(List);

    var MinhaLista = new TodoList();

    document.getElementById("novotodo").onclick = function () {
      MinhaLista.add("Novo todo");
    };

    MinhaLista.mostraUsuario();
  }

  if (false) {
    var _TodoList =
    /*#__PURE__*/
    function () {
      function _TodoList() {
        _classCallCheck(this, _TodoList);

        this.todos = [];
      }

      _createClass(_TodoList, null, [{
        key: "addTodo",
        value: function addTodo() {
          //static serve para passar uma info e retornar outra idependentemente do restante da classe.
          //geralmente nem tem constructor quando tem classe static
          this.todos.push("Novo todo"); //métodos static não vão enxergar o this.todos

          console.log(this.todos);
        }
      }]);

      return _TodoList;
    }(); //TodoList.addTodo();//VAI DAR ERRO POIS STATIC NÃO TEM THIS


    var Matematica =
    /*#__PURE__*/
    function () {
      function Matematica() {
        _classCallCheck(this, Matematica);
      }

      _createClass(Matematica, null, [{
        key: "soma",
        value: function soma(a, b) {
          return a + b;
        }
      }]);

      return Matematica;
    }();

    console.log(Matematica.soma(1, 2));
  }
}
/* === CONSTANTES === */


if (false) {
  var a = 1; //valor não pode reatribuir, mas pode mutar
  //a = 3;//vai dar erro, pois não pode reatribuir

  var usuario = {
    nome: "Diego"
  };
  usuario.nome = "Cleiton"; //isso é mutar, e pode

  console.log(usuario);
}
/* === ESCOPO === */


if (false) {
  var teste = function teste(x) {
    //variável dentro de uma função
    var y = 2;

    if (x > 5) {
      var _y = 4; //pode refazer isso aqui dentro novamente

      console.log(x, _y);
    }
  };

  teste(10); //OU

  var i = 5;

  for (var _i = 0; _i < 10; _i++) {
    // some statements
    console.log("dentro: ", _i);
  } // Here i is 5


  console.log("fora: ", i);
}
/* === OPERAÇÕES EM ARRAY(VETOR) === */


if (false) {
  var arr = [1, 3, 4, 5, 8, 9];
  var newArr = arr.map(function (item, index) {
    return item + index;
  });
  console.log(newArr);
  var sum = arr.reduce(function (total, next) {
    return total + next;
  });
  console.log(sum);
  var filter = arr.filter(function (item) {
    //sempre tem que retornar true or false aqui dentro;
    return item % 2 === 0; //divisiveis por 2, pares
  });
  console.log(filter);
  var find = arr.find(function (item) {
    return item === 4;
  });
  console.log(find);
}
/* === ARROW FUNCTION === */


if (false) {
  var teste01 = function teste01() {
    return "teste";
  };

  var _arr = [1, 3, 4, 5, 6];

  var _newArr = _arr.map(function (item) {
    return item * 2;
  });

  console.log(_newArr); //OU (bem reduzido heim)

  var newArr2 = _arr.map(function (item) {
    return item * 2;
  });

  console.log(newArr2);
  console.log(teste01()); //OU

  var teste02 = function teste02() {
    return "teste";
  }; //mas não é recomendado


  console.log(teste02()); //OU

  var teste03 = function teste03() {
    return "teste";
  };

  console.log(teste03()); //PARA OBJETOS:

  var teste04 = function teste04() {
    return {
      nome: "Diego"
    };
  };

  console.log(teste04());
}
/* === VALORES PADRÃO === */


if (false) {
  var soma01 = function soma01() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    return a + b;
  };

  console.log(soma01(1));
  console.log(soma01()); //OU

  var soma02 = function soma02() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    return a + b;
  };

  console.log(soma02(1));
  console.log(soma02());
}
/* === DESESTRUTURAÇÃO DE OBJETOS === */


if (false) {
  var mostraNome = function mostraNome(usuario) {
    console.log(usuario.nome);
  };

  //OU
  var mostraIdade = function mostraIdade(_ref) {
    var idade = _ref.idade;
    console.log(idade);
  };

  var _usuario = {
    nome: "Diego",
    idade: 23,
    endereco: {
      cidade: "Rio do Sul",
      estado: "SC"
    }
  };

  if (false) {
    var nome = _usuario.nome;
    var idade = _usuario.idade;
    var cidade = _usuario.endereco.cidade;
    console.log(nome);
    console.log(idade);
    console.log(cidade);
  } else if (false) {
    //OU
    var _nome = _usuario.nome,
        _idade = _usuario.idade,
        _cidade = _usuario.endereco.cidade;
    console.log(_nome);
    console.log(_idade);
    console.log(_cidade);
  }

  mostraNome(_usuario);
  mostraIdade(_usuario);
}
/* === REST/SPREAD === */


if (false) {
  //REST
  if (true) {
    var _usuario2 = {
      nome: "Diego",
      idade: 23,
      empresa: "Rocketseat"
    };

    var _nome2 = _usuario2.nome,
        resto = _objectWithoutProperties(_usuario2, ["nome"]);

    console.log(_nome2);
    console.log(resto);
    var _arr2 = [1, 2, 3, 4];

    var _a = _arr2[0],
        b = _arr2[1],
        c = _arr2.slice(2);

    console.log(_a);
    console.log(b);
    console.log(c);

    var _soma = function _soma(a, b) {
      return a + b;
    };

    console.log(_soma(1, 3)); //OU

    var _soma2 = function _soma2() {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      return params.reduce(function (total, next) {
        return total + next;
      });
    };

    console.log(_soma2(1, 3, 4)); //OU

    var soma03 = function soma03(a, b) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }

      return params;
    };

    console.log(soma03(1, 3, 4));
  } //SPREAD


  if (true) {
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];
    var arr3 = [].concat(arr1, arr2);
    console.log(arr3);
    var usuario1 = {
      nome: "Diego",
      idade: 23,
      empresa: "Rocketseat"
    };

    var usuario2 = _objectSpread({}, usuario1, {
      nome: "Gabriel"
    });

    console.log(usuario2);
  }
}
/* === TEMPLATE LITERALS === */


if (false) {
  //Incluir variáveis dentro de strings
  var _nome3 = "Diego";
  var _idade2 = 23;
  console.log("Meu nome é " + _nome3 + " e tenho " + _idade2 + " anos.");
  console.log("Meu nome \xE9 ".concat(_nome3, " e tenho ").concat(_idade2, " anos."));
}
/* === OBJECT SHORT SYNTAX === */


if (true) {
  var _nome4 = "Diego";
  var _idade3 = 23;
  var _usuario3 = {
    nome: _nome4,
    idade: _idade3,
    empresa: "Rocketseat"
  };
  console.log(_usuario3); //OU

  var _usuario4 = {
    nome: _nome4,
    idade: _idade3,
    empresa: "Rocketseat"
  };
  console.log(_usuario4);
}
