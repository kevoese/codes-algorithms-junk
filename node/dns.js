const dns = require('dns');

 //dns look up method
dns.lookup('demeter-ah-frontend-staging.herokuapp.com', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

//dns resolve method
dns.resolve('demeter-ah-frontend-staging.herokuapp.com', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });


dns.reverse('34.195.100.73', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });