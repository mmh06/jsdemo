  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
}

google.maps.event.addDomListener(window, 'load', initMap);


const mediaQuery = window.matchMedia('(min-width: 350px)');
function displayMessage(e)  {
  //shows different dialogue for different device types
  if (e.matches)  {
    // display message for non mobile device
    console.log("Most probably not a a mobile device");
    messageNonMobile();
  } else  {
    //dislay code for probable mobile device
    console.log("Most probably a mobie device based on th browser width.");
    messageMobile();
  }
}
// coding for  the listener to detect screen resizing
mediaQuery.addEventListener('change', displayMessage);
// Run the function on page start
displayMessage(mediaQuery);
function messageNonMobile() {
  const mb = document.getElementById("message-box");
  mb.style.display = "block";
  mb.style.textAlign = "center";
  mb.style.backgroundColor = "yellow";
  mb.style.color= "black";
  mb.style.padding= "5px";
  mb.textContent = "Nice!Not Mobile::Enjoy the cool css.";
}
function messageMobile() {
  const mb = document.getElementById("message-box");
  mb.style.display = "block";
  mb.textContent = "Boo!Mobile:Trading cool css for speed and low data usage.";
  mb.style.fontFamily = "Verdana, sans-serif";
}

const mq = window.matchMedia('(min-width: 1025px)');
function dm(e)  {
  //shows different dialogue for different device types
  if (e.matches)  {
    // display message for non mobile device
    console.log("Definitely a desktop");
    messageDesktop();
  } else  {
    /*dislay code for probable mobile device
    console.log("Most probably a mobie device based on th browser width.");
    messageMobile();*/
  }
}
// coding for  the listener to detect screen resizing
mq.addEventListener('change', dm);
// Run the function on page start
dm(mq);
function messageDesktop() {
  const mb = document.getElementById("message-box");
  mb.style.display = "block";
  mb.style.textAlign = "center";
  mb.style.backgroundColor = "yellow";
  mb.style.color= "black";
  mb.style.padding= "5px";
  mb.textContent = "Feel the power of desktop";
}
