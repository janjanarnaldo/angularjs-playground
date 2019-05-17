class UsersCtrl {

  constructor($scope, UserService) {
    'ngInject';

    this.$Uservice = UserService;
    this.users = [];
    this.$scope = $scope;

    this.processParentNotification = this.processParentNotification.bind(this);
  }

  $onInit() {
    this.parentToChildNotificationRegistration({
      handler: this.processParentNotification,
    });
  }

  processParentNotification(eventHandler) {
    console.log('here');
    if (eventHandler === 'refreshUsers') {
      this.getUsers();
    }
  }

  async getUsers() {
    this.users = await this.$Uservice.getUsers().then(res => res.data);
    this.$scope.$applyAsync();
  }

}

export default UsersCtrl;