import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('angle-completion');
  this.route('definition');
  this.route('test-route');
  this.route('nested', function() {
    this.route('nested-route');
  });
});

export default Router;
