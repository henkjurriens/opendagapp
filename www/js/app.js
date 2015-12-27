// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'ngCordovaBeacon'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  //$cordovaBeacon.createBeaconRegion("estimote", "b9407f30-f5f8-466e-aff9-25556b57fe6d");
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })



  .state('app.schools', {
    url: '/schools',
    views: {
      'menuContent': {
        templateUrl: 'templates/schools.html',
        controller: 'OpleidingenCtrl'
      }
    }
  })

  .state('app.lyceum', {
    url: '/lyceum',
    views: {
      'menuContent': {
        templateUrl: 'templates/schools/lyceum.html'
      }
    }
  })

  .state('app.beroepencollege', {
    url: '/beroepencollege',
    views: {
      'menuContent': {
        templateUrl: 'templates/schools/beroepencollege.html'
      }
    }
  })

  .state('app.praktijkschool', {
    url: '/praktijkschool',
    views: {
      'menuContent': {
        templateUrl: 'templates/schools/praktijkschool.html'
      }
    }
  })

  .state('app.hartvanezinge', {
    url: '/hartvanezinge',
    views: {
      'menuContent': {
        templateUrl: 'templates/schools/hartvanezinge.html'
      }
    }
  })

  .state('app.sportschool', {
    url: '/sportschool',
    views: {
      'menuContent': {
        templateUrl: 'templates/schools/sportschool.html'
      }
    }
  })

  .state('app.gymnasium', {
      url: '/opleidingen/gymnasium',
    views: {
      'menuContent': {
        templateUrl: 'templates/opleidingen/gymnasium.html',
        controller: 'OpleidingenCtrl'
      }
    }
  })

  .state('app.vwoplus', {
    url: '/opleidingen/vwoplus',
    views: {
      'menuContent': {
        templateUrl: 'templates/opleidingen/vwoplus.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.havovwo', {
    url: '/opleidingen/havovwo',
    views: {
      'menuContent': {
        templateUrl: 'templates/opleidingen/havovwo.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.tl', {
    url: '/opleidingen/tl',
    views: {
      'menuContent': {
        templateUrl: 'templates/opleidingen/tl.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html'
      }
    }
  })

  .state('app.stadenesch', {
    url: '/stadenesch',
    views: {
      'menuContent': {
        templateUrl: 'templates/stadenesch.html'
      }
    }
  })

  .state('app.peter', {
    url: '/visies/peter',
    views: {
      'menuContent': {
        templateUrl: 'templates/visies/peter.html'
      }
    }
  })

  .state('app.doro', {
    url: '/visies/doro',
    views: {
      'menuContent': {
        templateUrl: 'templates/visies/doro.html'
      }
    }
  })

  .state('app.hugo', {
    url: '/visies/hugo',
    views: {
      'menuContent': {
        templateUrl: 'templates/visies/hugo.html'
      }
    }
  })

  .state('app.boris', {
    url: '/leerlingen/boris',
    views: {
      'menuContent': {
        templateUrl: 'templates/leerlingen/boris.html'
      }
    }
  })

  .state('app.friso', {
    url: '/leerlingen/friso',
    views: {
      'menuContent': {
        templateUrl: 'templates/leerlingen/friso.html'
      }
    }
  })

  .state('app.maaike', {
    url: '/leerlingen/maaike',
    views: {
      'menuContent': {
        templateUrl: 'templates/leerlingen/maaike.html'
      }
    }
  })

  .state('app.sanne', {
    url: '/leerlingen/sanne',
    views: {
      'menuContent': {
        templateUrl: 'templates/leerlingen/sanne.html'
      }
    }
  })

  .state('app.nieuwestart', {
    url: '/nieuwestart',
    views: {
      'menuContent': {
        templateUrl: 'templates/nieuwestart.html'
      }
    }
  })

  .state('app.medialab', {
    url: '/lokalen/medialab',
    views: {
      'menuContent': {
        templateUrl: 'templates/lokalen/medialab.html'
      }
    }
  })

  .state('app.theater', {
    url: '/lokalen/theater',
    views: {
      'menuContent': {
        templateUrl: 'templates/lokalen/theater.html'
      }
    }
  })

  .state('app.muziek', {
    url: '/lokalen/muziek',
    views: {
      'menuContent': {
        templateUrl: 'templates/lokalen/muziek.html'
      }
    }
  })

  .state('app.update', {
    url: '/update',
    views: {
      'menuContent': {
        templateUrl: 'templates/update.html'
      }
    }
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/schools');
});
