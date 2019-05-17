class HomeCtrl {

  constructor() {
    'ngInject';

    this.name = "AngularJS";

    // this.childComponentNotificationRegistration = this.childComponentNotificationRegistration.bind(
    //   this
    // );
  }

  $onInit() {
    // this.childComponentEventHandler = {
    //   userEventHandler: null,
    // };
  }

  // childComponentNotificationRegistration(handler, handlerType) {
  //   this.childComponentEventHandler[handlerType] = handler;
  // }

  getUsers() {
    // this.childComponentEventHandler.userEventHandler &&
    //   this.childComponentEventHandler.userEventHandler('refreshUsers');
  }

}

export default HomeCtrl;