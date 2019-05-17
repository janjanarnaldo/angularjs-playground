class UsersCtrl {

  constructor($scope, $timeout, UserService) {
    'ngInject';

    this.$Uservice = UserService;
    this.users = [];
    this.$scope = $scope;
    this.$timeout = $timeout;

    // this.processParentNotification = this.processParentNotification.bind(this);
  }

  $onInit() {
    // this.parentToChildNotificationRegistration({
    //   handler: this.processParentNotification,
    // });
    this.getUsers();
  }

  // processParentNotification(eventHandler) {
  //   console.log('notification received');
  //   if (eventHandler === 'refreshUsers') {
  //     this.getUsers();
  //   }
  // }

  getUsers() {
    this.isLoading = true;
    this.users = [];
    this.$timeout(async () => {
      this.users = await this.$Uservice.getUsers().then(res => res.data);
      this.$scope.$applyAsync();
      this.isLoading = false;
    }, 2000);
  }

}

export default UsersCtrl;