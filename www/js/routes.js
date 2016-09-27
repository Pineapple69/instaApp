angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.camera', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      }
    }
  })

  .state('tabsController.favorites', {
    url: '/page4',
    views: {
      'tab4': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.messages'
      2) Using $state.go programatically:
        $state.go('tabsController.messages');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab5/page5
  */
  .state('tabsController.messages', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      },
      'tab5': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('tabsController.mainPage', {
    url: '/page1',
    views: {
      'tab1': {
        templateUrl: 'templates/mainPage.html',
        controller: 'mainPageCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.textMessage'
      2) Using $state.go programatically:
        $state.go('tabsController.textMessage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab5/page8
  */
  .state('tabsController.textMessage', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/textMessage.html',
        controller: 'textMessageCtrl'
      },
      'tab5': {
        templateUrl: 'templates/textMessage.html',
        controller: 'textMessageCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('page', {
    url: '/page10',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page1/page1')

  

});