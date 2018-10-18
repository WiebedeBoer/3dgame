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
                loadOBJModel("Models/Bullet_obj/", "Bullet.obj", "Models/Bullet_obj/", "Bullet.mtl", (bulletmesh) => {
                    bulletmesh.scale.set(0.01, 0.01, 0.01);
                    scene.add(bulletmesh);
                    bulletmesh.position.set(ammoCube.position.x, ammoCube.position.y - 3, ammoCube.position.z);
                    //set rotation to that of the camera (player)
                    bulletmesh.rotation.x = camera.rotation.x;
                    bulletmesh.rotation.y = camera.rotation.y;
                    bulletmesh.rotation.z = camera.rotation.z;
                    bulletmeshes.push(bulletmesh);
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
                    scene.remove(bulletmesh);
                }
            }, 10000);

        }
        else {
            leftOverAmmo = 0;  
        }
        //display ammo in HUD
        eAmmo = leftOverAmmo+"/"+totalAmmo;        
        document.getElementById('ammo').innerHTML = eAmmo;
    
} 

function BulletTravel(){
    bullets.forEach(element => {
        element.translateZ( -2 );
    });
}
function BulletMeshTravel(){
    bulletmeshes.forEach(element => {
        element.translateZ( -2 );
    });
}
