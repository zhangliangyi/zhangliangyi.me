import angular from 'angular';
import './experience.less';
import ExperienceController from './experience.controller';

export default angular.module('experience', [])
  .controller('ExperienceController', ExperienceController)
  .name;
