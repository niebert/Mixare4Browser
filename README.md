# Mixare4Browser
Modern browser APIs allow to transfer the concept of [MixARE](http://www.mixare.org) (Mixed Augmented Reality Engine) for Web Browser. [Mixare4Browser](https://niebert.github,io/Mixare4Browser) will be able to read the JSON file exported from [Mixare4JSON](https://niebert.github,io/Mixare4JSON) and display the database in the known MixARE way in the web brower (e.g. Firefox, Chromium, Safari, ...). Mixare4Web will be able to read from the JSON database source from a web URL (e.g. provided from a homepage of Wikiversity) or read a small JSON complete from the URL parameters and parse the JSON. The library for LinkParameter linkparam.js will support that concept. The augmented scene will be handled in the same way as done by AR.js handling the displaced of a scene in the aframe..

[![Mixare Demo Video](img/Mixare4Youtube.png)](https://www.youtube.com/watch?v=AA2LLqb4TSM)

## Read Link Parameter with AR.js
Assume you want to display a specific geolocated number of 3D model (e.g. icons, 3D scans or just primitives boxes, spheres, planes, tubes) in an Augemented Reality scene, then these geolocated set of 3D model are stored in JSON file stored on a web server ___https://www.example.com/mymixare.json___. The parameter call of Mixare4Browser will look like this

:: https://niebert.github.io/Mixare4Browser/index.html?jsonurl=https%3A%2F%2Fwww.example.com%2Fmymixare.json
