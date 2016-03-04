function ContactController() {
  var vm = this;
  this.name = "Steve",
  this.email = "example@example.com",
  this.phone = "123-456-7890"


this.changeName = function() {
  vm.name = "Something else!";
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);