<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<!--three.js-->
<script src="three.js"></script>
<!--camera controls-->
<script src="FPControls.js"></script>
<!--open xml-->
<script src="openxml.js"></script>
<!--buildings tenements, commercials, factories-->
<script src="tenements.js"></script>
<script src="commercials.js"></script>
<script src="factories.js"></script>
<!--buildings-->
<script src="dpstore.js"></script>
<script src="lbanks.js"></script>
<script src="lhotels.js"></script>
<script src="npapers.js"></script>
<script src="radios.js"></script>
<script src="stations.js"></script>
<script src="movtheatres.js"></script>
<script src="museums.js"></script>
<script src="schools.js"></script>
<script src="university.js"></script>
<script src="orphanage.js"></script>
<script src="churches.js"></script>
<script src="synagogue.js"></script>
<script src="policedep.js"></script>
<script src="firedep.js"></script>
<script src="fbi.js"></script>
<script src="jail.js"></script>
<script src="hospitals.js"></script>
<script src="court.js"></script>
<script src="cityhall.js"></script>
<script src="postoffices.js"></script>
<script src="warehouses.js"></script>
<style>
.customcanvas {margin-left: auto; margin-right: auto; margin-top: 20px; width: 800px; height: 400px; display: block;
border-style: solid; border-width: 1px; border-color: #000000;}
p.ce {text-align: center;}
.svgmap{margin-left:auto;margin-right:auto;width:743px;height:743px;}
</style>
</head>
<body style="margin: 0px; background-color: #d8e7ff;">
<div height="400" width="800" class="customcanvas" id="customcanvas">
<script>

        //C:\Users\de Boer\Documents\www mijn online games\gangstergame\cityview\city.html

        //renderer
        var updateFcts        = [];
        var scene        = new THREE.Scene();
        scene.fog        = new THREE.FogExp2( 0xd0e0f0, 0.0025 );

        var renderer        = new THREE.WebGLRenderer( { antialias: false } );
        canvasWidth = 800;
        canvasHeight = 400;
        renderer.setSize( canvasWidth, canvasHeight );

        //append object to it
        document.getElementById("customcanvas").appendChild(renderer.domElement);

        //camera
        var camera                = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 0.01, 1000);
        camera.position.y        = 12;
        camera.position.z        = 15;
        camera.position.x        = 15;

        //add an object and make it move
        var light        = new THREE.HemisphereLight( 0xfffff0, 0x101020, 1.25 );
        light.position.set( 0.75, 1, 0.25 );
        scene.add( light );

        //base size = 3630 + 2000
        var material        = new THREE.MeshBasicMaterial({ color:0x808080 })
        var geometry        = new THREE.PlaneGeometry( 7430, 7430 )
        var plane        = new THREE.Mesh( geometry, material );
        plane.rotation.x= - 90 * Math.PI / 180;
        scene.add( plane );

//scene 1, max 3600 tenements
var city = new THREEx.ProceduralCity()
scene.add(city)

//scene 25, commercials
var commercials = new THREEx.ProceduralCommercials()
scene.add(commercials)

//scene 23, factories
var factories = new THREEx.ProceduralFactories()
scene.add(factories)

//scene 2, 8 department stores
var dpstore = new THREEx.ProceduralDepStore()
scene.add(dpstore)

//scene 3, 4 banks
var largbanks = new THREEx.ProceduralLarBanks()
scene.add(largbanks)

//scene 4, 16 hotels
var larghotels = new THREEx.ProceduralLarHotels()
scene.add(larghotels)

//scene 5, 6 newspapers
var npapers = new THREEx.ProceduralNewspapers()
scene.add(npapers)

//scene 6, 2 radios
var radios = new THREEx.ProceduralRadios()
scene.add(radios)

//scene 7, 2 railway stations
var railstations = new THREEx.ProceduralRailStations()
scene.add(railstations)

//scene 8, 4 movie theatres
var movtheatres = new THREEx.ProceduralMovTheatres()
scene.add(movtheatres)

//scene 9, 4 museums, 2 orchestra halls, 1 opera hall, 3 theatres, 4 libraries, 1 public bath
var museums = new THREEx.ProceduralMuseums()
scene.add(museums)

//scene 10, 6 schools
var schools = new THREEx.ProceduralSchools()
scene.add(schools)

//scene 11, 1 university
var universities = new THREEx.ProceduralUniversity()
scene.add(universities)

//scene 12, 2 orphanages
var orphanages = new THREEx.ProceduralOrphanages()
scene.add(orphanages)

//scene 13, 6 churches
var churches = new THREEx.ProceduralChurches()
scene.add(churches)

//scene 14, 1 synagogue
var synagogues = new THREEx.ProceduralSynagogues()
scene.add(synagogues)

//scene 15, 1 police department, 4 police precincts
var policedeps = new THREEx.ProceduralPolice()
scene.add(policedeps)

//scene 16, 2 fire departments
var firedeps = new THREEx.ProceduralFire()
scene.add(firedeps)

//scene 17, 1 fbi
var fbihq = new THREEx.ProceduralFBI()
scene.add(fbihq)

//scene 18, 1 jail
var jails = new THREEx.ProceduralJails()
scene.add(jails)

//scene 19, 3 hospitals
var hospitals = new THREEx.ProceduralHospitals()
scene.add(hospitals)

//scene 20, 1 court
var legcourt = new THREEx.ProceduralCourt()
scene.add(legcourt)

//scene 21, 1 city hall
var cityhall = new THREEx.ProceduralCityHall()
scene.add(cityhall)

//scene 22, 5 post offices, 1 telegraph office, 1 stock exchange, 1 labor exchange
var postoffices = new THREEx.ProceduralPostOffice()
scene.add(postoffices)

//scene 24, 10 warehouses
var warehouses = new THREEx.ProceduralWarehouses()
scene.add(warehouses)



        //Camera Controls
        var controls        = new THREE.FirstPersonControls( camera );
        controls.movementSpeed        = 80;
        controls.lookSpeed            = 0.05;
        controls.lookVertical         = false; //if true vertical look on mousemovement
        updateFcts.push(function(delta, now){
                controls.update( delta );
        })

/*


        // collision detection:
        var originPoint = MovingCube.position.clone();

        clearText();

        for (var vertexIndex = 0; vertexIndex < MovingCube.geometry.vertices.length; vertexIndex++)
        {
                var localVertex = MovingCube.geometry.vertices[vertexIndex].clone();
                var globalVertex = localVertex.applyMatrix4( MovingCube.matrix );
                var directionVector = globalVertex.sub( MovingCube.position );

                var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
                var collisionResults = ray.intersectObjects( collidableMeshList );
                if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() )
                        //Hit
        }

*/

        //render the scene

        updateFcts.push(function(){
                renderer.render( scene, camera );
        })

        //loop runner
        var lastTimeMsec= null
        requestAnimationFrame(function animate(nowMsec){
                // keep looping
                requestAnimationFrame( animate );
                // measure time
                lastTimeMsec        = lastTimeMsec || nowMsec-1000/60
                var deltaMsec        = Math.min(200, nowMsec - lastTimeMsec)
                lastTimeMsec        = nowMsec
                // call each update function
                updateFcts.forEach(function(updateFn){
                        updateFn(deltaMsec/1000, nowMsec/1000)
                })
        })
</script>
</div>
<p class="ce">Use Q, E keys to rotate the camera</p>
<p class="ce">Use the W, A, S, D keys to move around</p>
<p class="ce">WebGL renderer is supported in Firefox 4+, Chrome 9+, and Safari 6+</p>
<audio autoplay loop><source src="gangsters2.mp3" type="audio/mp3"></audio>



<div class="svgmap">
<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="743" height="743" viewBox="0 0 743 743" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="map" zoomAndPan="magnify">
<g z-index="1">
<image xlink:href="grid.png" x="0" y="0" width="743" height="743">
</g>


<g z-index="2">
<title id="yout">you (3730,3730)</title>
<circle id="you" cx="373" cy="373" r="3" fill="rgb(255,255,255)" stroke ="rgb(0,0,0)" stroke-width="1" />
</g>

</svg>

<input id="button1" type="button" value="find position"
            onclick="changeDimensions()"/>



<script>
function changeDimensions() {

var horizonpos = (camera.position.z + 3715) / 10;
var verticalpos = (camera.position.x + 3715) / 10;

document.getElementById("you").setAttribute("cx", horizonpos);
document.getElementById("you").setAttribute("cy", verticalpos);

//document.write('<p class=\"ce\">'+horizonpos+','+verticalpos+'</p>');

}
</script>







</div>

</body>
</html>
