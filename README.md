# Map X

Integrating Google Maps API and Restcountries API to display geolocations with markers, enabling users to search and identify the exact geographic locations of all registered countries in the world.


## Screenshots
![solarized palette](https://github.com/leejhjake/markdown-test/raw/master/fullmap.jpg)
![solarized palette](https://github.com/leejhjake/markdown-test/raw/master/infobox.jpg)
<br>
[DEMO](https://serene-fjord-53739.herokuapp.com/ "Map X")

## Technologies used

  - HTML
  - CSS
  - Javascript
  - Google Maps API
  - RESTcountires API
  - Wikipedia API


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites
```
- Google Maps API: get Google API key from console.developers.google.com
- Firebase database: get Firebase code from firebase.google.com
- Ajax cdn
- Bootstrap cdn
````


## Built With

  - Sublime
  - Firebase
  - Google Maps API
  - RESTcountries API
  - Wikipedia API


## Walk throughs of code

The code below is what is required to have the full Google Maps showing on the browser. The variable map holds the visual of the Google Map and has properties that control the zoom distance and centering propety. 
```
var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
```


## Authors

  - [Tsion Asmamaw](https://github.com/mimi6464)
  - [Jason Chan](https://github.com/JasonDeving)
  - [Jake Lee](https://github.com/leejhjake)

  
  

## License

This project is licensed under the MIT License - see the [LICENSE.md]() file for details


## Acknowledgements

  - All UCLAX Coding Bootcamp students
  - All UCLAX Coding Bootcamp staff
  - Inspiration










