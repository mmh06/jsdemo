// Get the current HTML file name
const currentFile = window.location.pathname.split("/").pop();
// Only execute code if the user is on "startupplan.html"
if (currentFile === "startupplan.html")  {
  console.log("This code only runs on startupplan.html");
  const mediaQuery = window.matchMedia('(min-width: 350px)');
  function displayMessage(e)   {
    //shows different dialogue for different device types
    if (e.matches)   {
      // display message for non mobile device
      console.log("Most probably not a a mobile device");
      messageNonMobile();
    } else   {
      //dislay code for probable mobile device
      console.log("Most probably a mobie device based on th browser width.");
      messageMobile();
    }
  }
  // coding for  the listener to detect screen resizing
  mediaQuery.addEventListener('change', displayMessage);
  // Run the function on page start
  displayMessage(mediaQuery);
  function messageNonMobile()  {
    const mb = document.getElementById("message-box");
    mb.style.display = "block";
    mb.style.textAlign = "center";
    mb.style.backgroundColor = "yellow";
    mb.style.color= "black";
    mb.style.padding= "5px";
    mb.textContent = "Nice!Not Mobile::Enjoy the cool css.";
  }
  function messageMobile()  {
    const mb = document.getElementById("message-box");
    mb.style.display = "block";
    mb.textContent = "Boo!Mobile:Trading cool css for speed and low data usage.";
    mb.style.fontFamily = "Verdana, sans-serif";
  }
  const mq = window.matchMedia('(min-width: 1025px)');
  function dm(e)   {
    //shows different dialogue for different device types
    if (e.matches)   {
      // display message for non mobile device
      console.log("Definitely a desktop");
      messageDesktop();
    } else   {
      /*dislay code for probable mobile device
      console.log("Most probably a mobie device based on th browser width.");
      messageMobile();*/
    }
  }
  // coding for  the listener to detect screen resizing
  mq.addEventListener('change', dm);
  // Run the function on page start
  dm(mq);
  function messageDesktop()  {
    const mb = document.getElementById("message-box");
    mb.style.display = "block";
    mb.style.textAlign = "center";
    mb.style.backgroundColor = "yellow";
    mb.style.color= "black";
    mb.style.padding= "5px";
    mb.textContent = "Feel the power of desktop";
  }
}
if (currentFile === "m.html")  {
  console.log("This code only runs on m.html");
  
  // 1. Check if the Geolocation API is supported by the browser
  if ("geolocation" in navigator)  {
    // 2. Request the current position
    navigator.geolocation.getCurrentPosition(
    (position) =>  {
      // Success callback: extraction of coordinates
      const latitude = parseFloat(position.coords.latitude.toFixed(4));
      
      const longitude = parseFloat(position.coords.longitude.toFixed(4)) ;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      // 1. Select the <gmp-map> element by its ID
      const mapElement = document.getElementById('dmap');
      // 2. Wait for the custom element to be defined, then access its innerMap property
      const innerMap = mapElement.innerMap;
      // 3. Set the new coordinates using setCenter() or setOptions()
      innerMap.setCenter( {
        lat: latitude, lng: longitude
      }
      );
      innerMap.setZoom(08);
    getHighestEarthquake(latitude,longitude, 500).then(result => console.log(result));
        
    }
    ,
    (error) =>  {
      // Error callback: handling issues (e.g., user denied permission)
      console.error("Error retrieving location:", error.message);
    }
    );
  } else  {
    console.error("Geolocation is not supported by this browser.");
  }

//display eartquake info 
    async function getHighestEarthquake(latitude, longitude, maxRadiusKm = 100) {
  // USGS API endpoint for querying events
  const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query';
  
  // Define query parameters to filter by location and get the maximum magnitude first
  const params = new URLSearchParams({
    format: 'geojson',
    latitude: latitude,
    longitude: longitude,
    maxradiuskm: maxRadiusKm, // Distance window around your coordinates
    orderby: 'magnitude',     // Sort highest magnitude first
    limit: 1                  // Only return the top 1 result
  });

  try {
    const response = await fetch(`${baseUrl}?${params}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.features && data.features.length > 0) {
      const highestQuake = data.features[0].geometry.coordinates;
      lati = highestQuake[0];
      lang =  highestQuake[1];
      console.table(highestQuake);
       addMarkerToMap(lati,lang)
      return {
        magnitude: highestQuake.mag,
        place: highestQuake.place,
        cord: highestQuake.longitude,
        time: new Date(highestQuake.time).toLocaleString()
      };
    } else {
      return "No earthquakes recorded in this radius.";
    }
  } catch (error) {
    console.error("Failed to fetch earthquake data:", error);
    return null;
  }
}

// Example usage: Searching a 500km radius around Los Angeles (34.05, -118.24)




async function addMarkerToMap(lati,lang) {
  // 1. Select the gmp-map element by ID
  const mapElement = document.getElementById('dmap');

  // 2. Load the marker library
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // 3. Create the advanced marker instance
  const marker = new AdvancedMarkerElement({
    position: { lat: lati, lng: lang },
    title: "My Marker Location"
  });

  // 4. Append the marker to the <gmp-map> element
  mapElement.append(marker);
}
    
}
