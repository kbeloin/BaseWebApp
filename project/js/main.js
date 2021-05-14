$(document).ready(function(){
  getSubscriptions();
});

function getSubscriptions(){
  var userurl = 'https://api.hubapi.com/crm/v3/schemas/2-1413617';
  var data = {hapikey: apiKey};
  
  $.ajax({
    method: "GET",
    url: url,
    data: userdata,
    success: function(data) {
      console.log(data);
    }
  });
}


function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}