$(document).ready(function(){
  var lat;
  var long;
  var fTemp; //fahrenheit
  var cTemp; //celcius
  var kTemp; //kelvin
  
  //get your location
  //$.getJSON("http://ip-api.com/json", function(data2) {
  //  lat = data2.lat;
  //  long = data2.lon;
    //console.log(lat);
    //console.log(long);
  //if (navigator.geolocation) {  
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
      
    //var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID=7ed66fef841f89651d8b257c5f9852f2';
    var api = 'https://fcc-weather-api.glitch.me/api/current?lon=' + long + '&lat=' + lat;
    //console.log(api);
  
    $.getJSON(api, function(data) {
      console.log(data);
      var tempSwap = true;
      var weatherType = data.weather[0].description;
      var windSpeed = (2.237*(data.wind.speed)).toFixed(1);
      var city = data.name;
      var weatherIcon = data.weather[0].icon;
      //kTemp = data.main.temp;                   //temp in kelvin
      //cTemp = (kTemp-273).toFixed(1);           //temp in celcius
      cTemp = (data.main.temp).toFixed(1);        //temp in celcius
      fTemp = ((cTemp * 9)/5 + 32).toFixed(1);    //temp in fahrenheit
       
      //console.log(weatherType);
      //console.log(fTemp);
      //console.log(windSpeed);
      //console.log(city);
      $("#city").html(city);
      $("#icon").html('<img src=' + weatherIcon + "'>");
      $("#weatherType").html(weatherType);
      $("#windSpeed").html(windSpeed + " mph");
      $("#fTemp").html(fTemp + " &#8457;");
      $("#swapTempScale").html("Display in Celcius");
 
      //set background picture
      if (fTemp >= 80){
        $('body').css('background-image', 
                      'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlO1zBCV3pP2TiROH3_BHgMqOI26xd8Uf2LOiVSbVN-Ym-pwr)');
        
      } else if (fTemp >= 60 && fTemp < 80) {
        $('body').css('background-image',
                      'url(https://www.publicdomainpictures.net/pictures/10000/velka/colorful-autumn-in-park-11288099337f3SA.jpg)');
      } else if (fTemp >= 40 && fTemp < 60) {
        $('body').css('background-image',
                      'url(http://www.publicdomainpictures.net/pictures/200000/velka/fall-in-new-england-1476453786mBF.jpg)');
      } else if (fTemp < 40) {
        $('body').css('background-image',
                      'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeLjkIqRBPEQSkyaWskJNZieZvKgYRdZ3wqtlFvkb6mTy-2nu)');
      }
      
      $("#swapTempScale").click(function() {
        if (tempSwap===false) {
            $("#fTemp").html(fTemp + " &#8457;"); //add degree F symbol
            $("#swapTempScale").html("Display in Celcius");
            tempSwap=true;
        } else {
            $("#fTemp").html(cTemp + " &#8451;"); //add degree C symbol
            $("#swapTempScale").html("Display in Fahrenheit");
            tempSwap=false;
        }
      }); //#fTemp clicked
    }); //getJSON openWeather
    
  }); //.getJSON ip-api.com
}); //document ready
