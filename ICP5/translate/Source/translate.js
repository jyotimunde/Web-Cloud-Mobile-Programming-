angular.module('myApp', [])
    .controller('ViewlCtrl', function ($scope, $http) {
        $scope.translate = function () {
            var inputtext = document.getElementById("textInput").value;
            var language = document.getElementById("lang").value;

            if (inputtext != null && inputtext != "" && language != null && language != "") {
                var handler = $http.get("https://translate.yandex.net/api/v1.5/tr.json/translate" +
                    "?key=trnsl.1.1.20180922T065145Z.4cf341d79ece89b6.8051fbccab952c60cea8cc67bfced7dc377c3f5b" + "&text=" + inputtext + "&lang=" + language);

                handler.success(function (data) {
                    if (data != null && data.text.length > 0) {
                        $scope.output = data.text[0];
                    }
                });

                handler.error(function (data) {
                    alert("There was some error processing  your request.Please try after some time.");
                });
            }
        }
    });