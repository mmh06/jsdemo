
// Get the current HTML file name
const currentFile = window.location.pathname.split("/").pop();

// Only execute code if the user is on "startupplan.html"
if (currentFile === "startupplan.html") {
    console.log("This code only runs on startupplan.html");
 
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
}
if (currentFile === "m.html") {
    console.log("This code only runs on m.html");
// 1. Check if the Geolocation API is supported by the browser
if ("geolocation" in navigator) {
  
  // 2. Request the current position
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // Success callback: extraction of coordinates
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
        
      
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
       // 1. Select the <gmp-map> element by its ID
const mapElement = document.getElementById('dmap');

// 2. Wait for the custom element to be defined, then access its innerMap property
const innerMap = mapElement.innerMap;

// 3. Set the new coordinates using setCenter() or setOptions()
innerMap.setCenter({ lat: latitude, lng: longitude }); 
innerMap.setZoom(12);
        
    },
    (error) => {
      // Error callback: handling issues (e.g., user denied permission)
      console.error("Error retrieving location:", error.message);
    }
  );
  
} else {
  console.error("Geolocation is not supported by this browser.");
}






}
