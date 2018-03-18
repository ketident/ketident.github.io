window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-110808708-1');

function initialize() {
  var position = new google.maps.LatLng(41.330951, 19.828522);
  var myOptions = {
    zoom: 17,
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(
      document.getElementById("map_canvas"),
      myOptions);

  var marker = new google.maps.Marker({
      position: position,
      map: map,
      title:"KETIDENT"
  });  

  var contentString = 'Klinika Dentare KETIDENT';
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  }); 
    	 
  var myIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("slide");
      if(x.length==0)
        x = document.getElementsByClassName("quote");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 3000);    
  }
}