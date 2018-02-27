angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

	var ddo = {}; //ddo = directive definition object, ou seja, a diretiva configurada apropriadamente


	ddo.restrict = "AE"; //AE = Atribute Element, ou seja, diretiva podendo ser usada como atributo ou como elemento

	ddo.scope = {
		titulo: '@' //o valor passado pelo atributo do elemento de nome Titulo será passado como string
	};

	ddo.transclude = true; //diretiva mantem os elementos filhos qnd o angular processa o html

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})

.directive('minhaFoto', function() {

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo: '@',
		url: '@'
	};

	ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
	
	return ddo;
})

.directive("meuBotaoPerigo", function(){

	var ddo = {};

	ddo.restrict = "E"
	ddo.scope = {
		nome: '@',
		acao: '&' //@ é uso pra passar uma string, & é usado pra passar uma expressão a ser avaliada no escopo do controller
	};
	ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{nome}}</button>';

	return ddo;
});