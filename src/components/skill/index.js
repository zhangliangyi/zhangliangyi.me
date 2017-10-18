import angular from 'angular';
import './skill.less';
import SkillController from './skill.controller';

export default angular.module('skill', [])
  .controller('SkillController', SkillController)
  .name;
