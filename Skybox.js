class Skybox extends THREE.Group {
	init(){
				var mskyBox = this;
				var imagePrefix = "images/skybox";
	            var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
	            var imageSuffix = ".png";
	            var skyGeometry = new THREE.CubeGeometry( 5500, 5500, 5500 );	
	
	            var materialArray = [];
	            for (var i = 0; i < 6; i++)
		            materialArray.push( new THREE.MeshBasicMaterial({
					map: new THREE.TextureLoader().load( imagePrefix + directions[i] + imageSuffix ),
			        side: THREE.BackSide
					}));
				
	            var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
				var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
				
				mskyBox.add(skyBox);
				collidableMeshList.push(skyBox);
			}

    
			constructor(){
				super();
				this.init();
			}	
        }