angular.module('alurapic').controller('FotoController', function($scope, cadastroDeFotos, 
                                                                    recursoFoto, $routeParams){

    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId){
        recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto){

            $scope.foto = foto;

        }, function(erro){
            $scope.mensagem = 'Não foi possível obter a foto';
            console.log(erro);
        });

        /*$http.get('v1/fotos/' + $routeParams.fotoId) //o nome do parâmetro é o mesmo passado no edit do main
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(erro){
            $scope.mensagem = 'Não foi possível obter a foto';
            console.log(erro);
        });*/
    }

    $scope.cadastraFoto = function(){
        if ($scope.formulario.$valid) {

            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados){
                $scope.mensagem = dados.mensagem;

                if(dados.inclusao){
                    $scope.foto = {};
                }
            })
            .catch(function(dados){
                $scope.mensagem = dados.mensagem;
            })


            /*if($scope.foto._id){
                
                recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto,
                
                function(){
                    $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' alterada com sucesso';

                }, function(erro){
                    $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
                    console.log(erro);
                });
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function(){
                    $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' alterada com sucesso';
                })
                .error(function(erro){
                    $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
                    console.log(erro);
                });

            } else {
                
                recursoFoto.save($scope.foto, function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso';

                }, function(erro){
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                    console.log(erro);
                });

                /*$http.post('v1/fotos', $scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                })
                .error(function(erro){
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                    console.log(erro);
                });
            }*/   
        }       
    };

});