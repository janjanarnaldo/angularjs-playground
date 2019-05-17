import template from './users.html';
import controller from './users.controller';

export default {
  template,
  controller,
  bindings: {
    parentToChildNotificationRegistration: '&',
  },
};
