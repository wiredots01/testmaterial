'use strict'
App = angular.module "Xmigra", [
  "ngResource"
  "ngRoute"
  "ngAnimate"
  "ngMaterial"
]

App.config [ "$routeProvider", "$locationProvider", ( $routeProvider, $locationProvider ) ->
  $locationProvider.html5Mode true

  $routeProvider
  .when "/",
    template: JST["assets/templates/views/home/index.html"]()
    controller: "MainCtrl"

]

App.controller "MainCtrl", [ "$scope", ($scope) ->
  console.log "tae ka"

]