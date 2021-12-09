# Interactive Web Visualizations 

Interactive dashboard that displays charts and text for data entries selected from a dropdown menu. View the final product [here] (https://klbowman.github.io/microbiome-dashboard/).

## Description

This repository uses Leaflet to create two interactive maps of earthquake occurrences across the globe, using GeoJSON data from the [United States Geological Survey] (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). 

The first map shows the location of all earthquakes recorded during the past 30 days on an OpenStreetMap tile layer. Data marker size corresponds to earthquake magnitude and color corresponds to the depth where the earthquake began to rupture. Data marker popups include a description of the earthquake location, date and time of occurrence, magnitude, and depth (kilometers). 

The second map shows the location of all earthquakes recorded during the past 30 days, and the location of tectonic plate boundaries, with three tile layer options. Earthquake data markers and popup information is the same as the first map. Layer control is used to toggle between three map layers (Satellite, Grayscale, Outdoors) and two datasets (Tectonic Plates, Earthquakes).

## Getting Started

### Technologies Used 

* JavaScript
* HTML
* CSS
* Leaflet

### Installing

* Clone this repository to your desktop.
* For the simple map (Earthquake Map 1), navitage to the Leaflet-Step-1 directory and open index.html in your browser.
* For the layerd map (Earthquake Map 2), navigate to the top level of the directory and open index.html in your browser.

### Data Sources

* United States Geological Survey. (2021). All Earthquakes, Past 30 Days. Retrived from [https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php] (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
* Ahlenius, H., Bird, Peter. (2014). World tectonic plates and boundaries. Retrived from [https://github.com/fraxen/tectonicplates] (https://github.com/fraxen/tectonicplates)

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)
