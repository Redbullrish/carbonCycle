angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('carbonCycle', {
    url: '/page2',
    templateUrl: 'templates/carbonCycle.html',
    controller: 'carbonCycleCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('register', {
    url: '/page5',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.profile'
      2) Using $state.go programatically:
        $state.go('tabsController.profile');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab2/page7
  */
  .state('tabsController.profile', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      },
      'tab2': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController.tracker', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/tracker.html',
        controller: 'trackerCtrl'
      }
    }
  })

  .state('tabsController.tracker2', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/tracker2.html',
        controller: 'tracker2Ctrl'
      }
    }
  })

  .state('tabsController.social', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/social.html',
        controller: 'socialCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page11',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('signup2', {
    url: '/page12',
    templateUrl: 'templates/signup2.html',
    controller: 'signup2Ctrl'
  })

$urlRouterProvider.otherwise('/page2')


});