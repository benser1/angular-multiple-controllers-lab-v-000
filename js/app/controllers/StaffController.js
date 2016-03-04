function StaffController() {
  var vm = this;
  this.name = "John",
  this.email = "test@test.com",
  this.phone = "123-555-5555"


this.changeName = function() {
  vm.name = "Something else!"
  }
}

angular
  .module('app')
  .controller('StaffController', StaffController);