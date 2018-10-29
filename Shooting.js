//shooting
function Shot(){
    //shoot ammo check
        if (leftOverAmmo >0){
            //less ammo
            leftOverAmmo = leftOverAmmo - 1;
            
            //create ammo particle
            var ammoGeometry = new THREE.CubeGeometry(3,3,3,1,1,1);
            var ammoMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe:true, visible:false } );
            var ammoCube = new THREE.Mesh( ammoGeometry, ammoMaterial );

            //set particle position
            ammoCube.position.set(camera.position.x, camera.position.y - 3, camera.position.z);
            //set rotation to that of the camera (player)
            ammoCube.rotation.x = camera.rotation.x;
            ammoCube.rotation.y = camera.rotation.y;
            ammoCube.rotation.z = camera.rotation.z;
            
            //create bullet mesh
            var bulletmesh;
            bulletmesh = new THREE.Group();
                loadOBJModel("Models/Bullet_obj/", "Bullet.obj", "Models/Bullet_obj/", "Bullet.mtl", (mesh) => {
                    bulletmesh.add(mesh);
                    //scale
                    bulletmesh.scale.set(0.01, 0.01, 0.01);                    
                    //set position
                    bulletmesh.position.set(camera.position.x, camera.position.y - 3, camera.position.z);
                    //set rotation to that of the camera (player)
                    bulletmesh.rotation.x = camera.rotation.x;
                    bulletmesh.rotation.y = camera.rotation.y+1.5708;                                   
                    bulletmesh.rotation.z = -1.5708;
                    //push in list
                    bulletmeshes.push(bulletmesh);
                    //add to scene
                    scene.add(bulletmesh);                            
                });                 

            //add particle
            scene.add( ammoCube );
            collidableBulletMeshList.push(ammoCube); 
            bullets.push(ammoCube);

            //set timeout bullet
            ammoCube.alive = true;
            setTimeout(function(){
                let indexBullet = bullets.map(e => e.uuid).indexOf(ammoCube.uuid);                
                if(indexBullet !== -1){
                    bullets.splice(indexBullet,1);
                    scene.remove(ammoCube);                    
                }
                let indexBulletmesh = bulletmeshes.map(m => m.uuid).indexOf(bulletmesh.uuid);
                if(indexBulletmesh !== -1){
                    bulletmeshes.splice(indexBullet,1);                    
                    scene.remove(bulletmesh);
                }
            }, 3000);

        }
        else {
            leftOverAmmo = 0;  
        }
        //update ammo in HUD
        appendAmmo();
    
} 
//move bullet cube
function BulletTravel(){
    bullets.forEach(element => {
        element.translateZ(-10);
        //element.translateY(10);
    });
    bulletmeshes.forEach(element => {
        //element.translateZ(-10); 
        element.translateY(10);
    });
}

