// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers'])

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

  .state('app.lyceum', {
    url: '/lyceum',
    views: {
      'menuContent': {
        templateUrl: 'templates/schools/lyceum.html'
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

  .state('app.update', {
    url: '/update',
    views: {
      'menuContent': {
        templateUrl: 'templates/update.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/schools');
});
