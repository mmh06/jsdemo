
const mediaQuery = window.matchMedia('(min-width: 350px)');

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
   const mb = document.getElementById("message-box")
     mb.style.display = "block";
     mb.background-color: #ffcccc;
   mb.color: #cc0000;
   mb.padding: 15px;
   mb.border: 1px solid #cc0000;
   mb.border-radius: 5px;
   mb.text-align: center;
   mb.textContent = "Nice!Not Mobile:Enjoy the cool css.";

}
function messageMobile(){
 document.getElementById("message-box").style.display = "block";
 document.getElementById("message-box").textContent = "Boo!Mobile:Trading cool css for speed and low data usage.";

}
