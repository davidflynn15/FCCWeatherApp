$(document).ready(function(){
  var location = getLocation();
  console.log(location());
  
  //getWeather(location.lat, location.long);
  getWeather(location);
  
}); //document ready

function getLocation() {
  var userLocation = {
    long: null,
    lat: null
  };

  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        userLocation.long = position.coords.longitude;
        userLocation.lat = position.coords.latitude;
        console.log(userLocation);
      });
  } else {
    $('#errorMsg').innerhtml("Error getting location");
      console.log("Error Getting location");
  }
  
  return function() {
    userLocation;
  }
} //for getLocation
     
function getWeather(loc) {
  console.log("lat: " + loc.lat + "; longitude: " + loc.long);
  var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + loc.lat + '&lon=' + myLoc.long + '&APPID=7ed66fef841f89651d8b257c5f9852f2';
  console.log(api);
  
  $.getJSON(api, function(data, status) {
    console.log(data);
    console.log(status);
    var fTemp; //fahrenheit
    var cTemp; //celcius
    var kTemp; //kelvin
      var tempSwap = true;
      var weatherType = data.weather[0].description;
      var windSpeed = (2.237*(data.wind.speed)).toFixed(1);
      var city = data.name;

      kTemp = data.main.temp;                   //temp in kelvin
      fTemp = (kTemp*(9/5)-459.67).toFixed(1);  //temp in fahrenheit
      cTemp = (kTemp-273).toFixed(1);           //temp in celcius

      console.log(weatherType);
      console.log(fTemp);
      console.log(windSpeed);
      console.log(city);
      $("#city").html(city);
      $("#weatherType").html(weatherType);
      $("#windSpeed").html(windSpeed + " mph");
      $("#fTemp").html(fTemp + " &#8457;");
      /*$("#fTemp").click(function() {
        if (tempSwap===false) {
          $("#fTemp").html(fTemp + " &#8457;");
          tempSwap=true;
        } else {
          $("#fTemp").html(cTemp + " &#8451;");
          tempSwap=false;
        }
      }); //#fTemp clicked
      */
    }); //.getJson
} //getWeather
          
 /*
  et avar long;
  var lat;
  $.getJSON("http://ip-api.com/json", function(data2){
    lat = data2.lat;
    long = data2.lon;
    console.log(long);
    
          
        if (fTemp > 80) {
          $('body').css('background-image', 'url(https://report.az/storage/news/2d24481fa1ef4a20e1a703f88f8400c4/aee96c6d-d63a-4f9a-897e-3213b477b5fe.jpg)');
        }
        else if(fTemp > 70){
          $('body').css('background-image', 'url(https://images.unsplash.com/photo-1432059964050-d4eba2ef368a?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2-1.0&ixlib=rb-0.3.5&q=80&w=1925)');
        }
        else if(fTemp > 60){
          $('body').css('background-image', 'url(https://images.unsplash.com/photo-1432059964050-d4eba2ef368a?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2-1.0&ixlib=rb-0.3.5&q=80&w=1925)');

        }
        else if(fTemp > 50){
          $('body').css('background-image', 'url(https://2.bp.blogspot.com/-mKf9OkZfN8g/UVhnBwVZ-zI/AAAAAAAACt0/oE7_5xVaAHE/s1600/DSC07049.JPG)');
        }
        else if(fTemp > 40){
          $('body').css('background-image', 'url(https://2.bp.blogspot.com/-mKf9OkZfN8g/UVhnBwVZ-zI/AAAAAAAACt0/oE7_5xVaAHE/s1600/DSC07049.JPG)');
        }
        else if(fTemp > 30){
          $('body').css('background-image', 'url(http://previews.123rf.com/images/welcomia/welcomia1403/welcomia140300074/26623098-Snowy-Hills-Colorado-Wilderness-Covered-by-Fresh-Snow-Sunny-Winter-Weather--Stock-Photo.jpg)');
        }
        else {
          $('body').css('background-image', 'url(https://images.unsplash.com/photo-1432059964050-d4eba2ef368a?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2-1.0&ixlib=rb-0.3.5&q=80&w=1925)');
        }
                
      });
});
  });
*/