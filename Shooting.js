//shooting
function Shot(){
    //shoot ammo check
    if ( keyboard.pressed("X")){
        if (leftOverAmmo >0){
            //less ammo
            leftOverAmmo = leftOverAmmo - 1;
            //create ammo particle
            var ammoGeometry = new THREE.CubeGeometry(3,3,3,1,1,1);
            var ammoMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe:true, visible:true } );
            var ammoCube = new THREE.Mesh( ammoGeometry, ammoMaterial );
            ammoCube.position.set(camera.position.x, camera.position.y + 3, camera.position.z);
            scene.add( ammoCube );
            collidableBulletMeshList.push(ammoCube);   
        }
        else {
            leftOverAmmo = 0;  
        }
        //display ammo in HUD
        eAmmo = leftOverAmmo+"/"+totalAmmo;        
        document.getElementById('ammo').innerHTML = eAmmo;
        
    }
    
}
               