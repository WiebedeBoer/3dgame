//shooting
function Shot(){
    //shoot ammo check
        if (leftOverAmmo >0){
            //less ammo
            leftOverAmmo = leftOverAmmo - 1;
            //create ammo particle
            var ammoGeometry = new THREE.CubeGeometry(3,3,3,1,1,1);
            var ammoMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe:true, visible:true } );
            var ammoCube = new THREE.Mesh( ammoGeometry, ammoMaterial );
            //set particle position
            ammoCube.position.set(camera.position.x, camera.position.y - 3, camera.position.z);


            // set the velocity of the bullet
            ammoCube.velocity = new THREE.Vector3(-Math.sin(camera.position.y),0,Math.cos(camera.position.y));
            
            ammoCube.position.add(ammoCube.velocity);

            //set timeout bullet
            ammoCube.alive = true;
            setTimeout(function(){
                ammoCube.alive = false;
                scene.remove(ammoCube);
            }, 10000);

            //add particle
            scene.add( ammoCube );
            collidableBulletMeshList.push(ammoCube); 
            bullets.push(ammoCube);

        }
        else {
            leftOverAmmo = 0;  
        }
        //display ammo in HUD
        eAmmo = leftOverAmmo+"/"+totalAmmo;        
        document.getElementById('ammo').innerHTML = eAmmo;
    
}            