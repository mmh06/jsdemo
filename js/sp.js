
const mediaQuery = window.matchMedia('(min-width: 500px)');

function displayMessage(e) {
  //shows different dialogue for different device types 
  if (e.matches) {
    // display message for non mobile device
    console.log("Most probably not a a mobile device");
    messageNonMobile();
  } else {
    //dislay code for probable mobile device
    console.log("Most probably a mobie device based on th browser width.");
    messageMobile();
  }
}

// coding for  the listener to detect screen resizing
mediaQuery.addEventListener('change', displayMessage);

// Run the function on page start
displayMessage(mediaQuery);



function messageNonMobile(){
   document.getElementById("message-box").style.display = "block";
  document.getElementById("message-box").textContent = "Hello! This is probably not a mobile device .";

}
function messageMobile()
 document.getElementById("message-box").style.display = "block";
 document.getElementById("message-box").textContent = "Hello! This is probably a mobile device .";

}
