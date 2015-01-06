/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.css` instead.)
var cssFilesToInject = [
  'styles/**/bootstrap.min.css',
  'styles/**/importer.css',
  'styles/**/jquery-ui.css',
  'styles/**/*.css',
  'styles/*.css'

];
var cssFilesToInjectAdmin = [
  'styles/**/bootstrap.min.css',
  'styles/**/styleAdmin.css',
  'styles/**/jquery-ui.css',
  'styles/**/*.css',
  'styles/*.css'
];

// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInjectAdmin = [
  'js/dependencies/lib/jquery*.js',
  'js/dependencies/lib/underscore*.js',
  'js/dependencies/**/*.js',

  // Templates are included after dependencies and before other js
  'templates.js',
  'js/admin/**/*.js',
  'js/admin/routers/*.js'
];
var jsFilesToInject = [

  // Dependencies like sails.io.js, jQuery, or Angular
  // are brought in here
  "/js/dependencies/sails.io.js",
  'js/dependencies/lib/jquery*.js',
  'js/dependencies/lib/underscore*.js',
  'js/dependencies/lib/modernizr*.js',
  'js/dependencies/lib/classie*.js',
  'js/dependencies/**/*.js',

  // Templates are included after dependencies and before other js
  'templates.js',

  // Backbone models, collections, views, and routers
  'js/app/models/**/*.js',
  'js/app/collections/**/*.js',
  'js/app/views/**/*.js',
  'js/app/**/*.js',
  'js/app/*.js'

  // All of the rest of your client-side js files
  // will be injected here in no particular order.

];

// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses handlebars templates and precompiles them into
// functions for you.  If you want to use , handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html',
  'templates/**/*.hbs',
  'templates/**/*.handlebars'
];

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function (path) {
  return '.tmp/public/' + path;
});
module.exports.cssFilesToInjectAdmin = cssFilesToInjectAdmin.map(function (path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function (path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInjectAdmin = jsFilesToInjectAdmin.map(function (path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function (path) {
  return 'assets/' + path;
});
