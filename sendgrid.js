/* Usage:

  Meteor.startup(function(){
    Meteor.Sendgrid.config({
      username = 'SENDGRID_USERNAME',
      password = 'SENDGRID_PASSWORD'
    });
  });

 * In server directory:

    Meteor.Sendgrid.send({
      to: 'something@something.com',
      from: 'you@yourdomain.com',
      subject: 'A subject',
      text: 'This is the text'
    });
 *
 */

Meteor.Sendgrid = {
  config: function(options){
    username = options['username'];
    password = options['password'];
    host = '@smtp.sendgrid.net';
    port = '465';
    process.env.MAIL_URL = 'smtp://' + username + ':' + password + host + ':' + port + '/';
  },
  // a wrapper for Email just to be consistent.
  send: function(options){
    Email.send(options);
  }
}
