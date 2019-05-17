import template from './users.html';
import controller from './users.controller';
import './style.css';

export default {
  template,
  controller,
  bindings: {
    parentToChildNotificationRegistration: '&',
  },
};
