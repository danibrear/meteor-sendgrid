Sendgrid for Meteor
===============

#### A meteorite package for sending emails easily using Sendgrid.

### Setup Sendgrid (if you haven't done so already)

* Visit [Sendgrid](http://sendgrid.com) and create an account.
* Navigate to *Account Settings* and look at the lower right corner for *Manage Multiple User Credentials* and click it.
* Click *Add New Credential*
* Create a name and a password *(this will be your sendgrid username and password)*
* Select *API* and *Mail* checkboxes
* Click *Create Credential*
* Fill in the usage below.

### Usage

in `server/sendgrid_config.js` add:
```javascript
  Meteor.startup(function(){
    Meteor.Sendgrid.config({
      username: 'YOUR_SENDGRID_USERNAME',
      password: 'YOUR_SENDGRID_PASSWORD'
    });
  });
```

Anywhere you want to send an email:

```javascript

  Meteor.Sendgrid.send({
    to: 'whoItsTo@theDomain.com',
    from: 'no-reply@where-ever.com',
    subject: 'I really like sending emails with Sendgrid!',
    text: 'Sendgrid is totally awesome for sending emails!'
  });
```

## Special Thanks
Thanks go out to [@scottmotte](https://twitter.com/scottmotte) for his help in figuring out how to do this without using the NPM module.
