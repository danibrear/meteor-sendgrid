Package.describe({
  summary: 'Easily send emails using Sendgrid your email provider.'
});

Package.on_use(function(api){
  api.add_files('sendgrid.js', 'server');
  api.export('Sendgrid', 'client');
});
