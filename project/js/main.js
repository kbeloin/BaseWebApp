$(document).ready(function(){
  getSubscriptions();
})

function getSubscriptions(){
  var request = require("request");

  var options = {
    method: 'GET',
    url: 'https://api.hubapi.com/crm/v3/schemas/2-1413617',
    qs: {hapikey: apiKey},
    headers: {accept: 'application/json'}
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });
}


function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}