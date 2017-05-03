  var app = angular.module('myApp', ['rx']);

app.factory("DataService", function(rx) {
  var subject = new rx.Subject(); 
  var data = "Initial";
  
  return {
      set: function set(d){
        data = d;
        subject.onNext(d);
      },
      get: function get() {
        return data;
      },
      subscribe: function (o) {
         return subject.subscribe(o);
      }
  };
});

app.controller('updateCtrl', function(DataService){
  var $ctrl = this;
  $ctrl.value = "test";
  $ctrl.update = function (v) {
      DataService.set(v);
  };
});

app.controller('displayCtrl', function(DataService) {
  var $ctrl = this;

  $ctrl.data = DataService.get();
  var subscription = DataService.subscribe(function onNext(d) {
      $ctrl.data = d;
  });

  this.$onDestroy = function() {
      subscription.dispose();
  };
});