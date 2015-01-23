Package.describe({
  name: '3stack:prototype-number',
  version: '0.0.1',
  summary: 'Helper functions to extend built-in type Number',
  git: 'https://github.com/3stack-software/meteor-prototype-number',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.addFiles('Number.prototype.js')
});
