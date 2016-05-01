import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions', function() {
    this.route('1', {path: '/why-learn'});
    this.route('2', {path: '/how-experienced'});
    this.route('3', {path: '/tutorials'});
    this.route('4', {path: '/features'});
    this.route('5', {path: '/demographic'});
  });
  this.route('admin');
});

export default Router;
