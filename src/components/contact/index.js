import angular from 'angular';
import './contact.less';
import ContactController from './contact.controller';

export default angular.module('contact', [])
  .controller('ContactController', ContactController)
  .name;
