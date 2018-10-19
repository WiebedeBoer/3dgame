class Ammo extends THREE.Group {
    init(){        
        var refAmmo, bulletmesh;
        refAmmo = this;
        //bullet obj
        bulletmesh = new THREE.Group();
        loadOBJModel("Models/Bullet_obj/", "Bullet.obj", "Models/Bullet_obj/", "Bullet.mtl", (mesh) => {
            mesh.scale.set(0.01, 0.01, 0.01);
            bulletmesh.add(mesh);
        });
        this.bulletmesh.rotation.x = camera.rotation.x;
        this.bulletmesh.rotation.y = camera.rotation.y;
        this.bulletmesh.rotation.z = camera.rotation.z;
        this.bulletmesh.position.set(this.position.x, this.position.y, this.position.z);
        refAmmo.add(bulletmesh);  
        //bullet collision cube
        this.ammoCube.rotation.x = camera.rotation.x;
        this.ammoCube.rotation.y = camera.rotation.y;
        this.ammoCube.rotation.z = camera.rotation.z;
        this.ammoCube.position.set(this.position.x, this.position.y, this.position.z);           
        this.ammoCubeGeometry = new THREE.CubeGeometry(3,3,3,1,1,1);
        var ammoCubeMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe:true, visible:true } );
        this.ammoCube = new THREE.Mesh( this.ammoCubeGeometry, ammoCubeMaterial );      
        
    }

    constructor(pX,pY,pZ){
        super();
        this.position.x = pX;
        this.position.y = pY;
        this.position.z = pZ;
        this.init();
        //Creating and locating the HitboxCube of the enemy.        
        scene.add(this.ammoCube);
    }
}