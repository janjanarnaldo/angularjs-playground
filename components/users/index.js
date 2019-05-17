import angular from 'angular';
import users from './users';

import UserService from './users.service';

export default angular
  .module('components.users', [])
  .service('UserService', UserService)
  .component('users', users).name;
