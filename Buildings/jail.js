class Jail extends THREE.Group{
    
    init (){
        
        var mJail = this;

        //generate material
        var material22 = new THREE.MeshLambertMaterial({
            color: 0x32344e
        });

        //city mesh
        var townGeometry = new THREE.Geometry();

        var jailGeometry = new THREE.BoxGeometry(60, 50, 60);
        var jailMaterials = [
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //LEFT
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //RIGHT
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground11.jpg"), side: THREE.DoubleSide }), //TOP
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //BOTTOM
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //FRONT
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //BACK
            ];
        var jailMaterial = new THREE.MeshFaceMaterial(jailMaterials);
        var meshJail = new THREE.Mesh(jailGeometry, material22);

        var jailcol =1;
        var jailrow =45;

        // put a position
        meshJail.position.x = (2700 - 5400) + (jailcol * 90) - 30;
        meshJail.position.z = (2700 - 5400) + (jailrow * 90) - 30;
        //put a rotation
        meshJail.rotation.y = 0.5*Math.PI*2;

        //add geometry
        var jailGeometry = meshJail.jailGeometry;

        townGeometry.mergeMesh(meshJail);

        //return mesh
        var mesh6 = new THREE.Mesh(townGeometry, jailMaterial);
        mJail.add(mesh6);
        collidableMeshList.push(mesh6);
    }

    constructor(){
        super();

        this.init();
    }
}