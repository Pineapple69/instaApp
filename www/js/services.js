angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

app.factory('Posts', function() {
  // Post Data
  var posts = [{
    id: 0,
    name: 'ooooo',
    avatar: 'img/oooo.png',
    image: 'img/oooo.png',
    likes: 1,
    caption: 'first caption'
  }];

  return {
    all: function() {
      return posts;
    },
    share: function(newdata) {
      posts.push(newdata);
      return posts;
    }
  };
});