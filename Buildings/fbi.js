class FBI extends THREE.Group {

    init (){
      
        var mFBI = this;

        //generate material
        var material21 = new THREE.MeshLambertMaterial({
            color: 0x32344e
        });

        //city mesh
        var townGeometry = new THREE.Geometry();

        var FBIGeometry = new THREE.BoxGeometry(60, 100, 60);
        var FBIMaterials = [
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //LEFT
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //RIGHT
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //TOP
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //BOTTOM
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //FRONT
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //BACK
            ];
        var FBIMaterial = new THREE.MeshFaceMaterial(FBIMaterials);
        var meshFBI = new THREE.Mesh(FBIGeometry, material21);

        var fbicol =35;
        var fbirow =30;

        // put a position
        meshFBI.position.x = (2700 - 5400) + (fbicol * 90) - 30;
        meshFBI.position.z = (2700 - 5400) + (fbirow * 90) - 30;
        //put a rotation
        meshFBI.rotation.y = 0.5*Math.PI*2;

        //add geometry
        var FBIGeometry = meshFBI.FBIGeometry;

        townGeometry.mergeMesh(meshFBI);

        //return mesh
        var mesh5 = new THREE.Mesh(townGeometry, FBIMaterial);
        mFBI.add(mesh5);
        collidableMeshList.push(mesh5);
    }

    constructor(){
        super();

        this.init();
    }
}