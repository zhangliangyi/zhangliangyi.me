import angular from 'angular';
import './avatar.less';
import AvatarController from './avatar.controller';

export default angular.module('avatar', [])
  .controller('AvatarController', AvatarController)
  .name;
