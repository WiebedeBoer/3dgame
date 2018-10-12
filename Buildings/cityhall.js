class Cityhall extends THREE.Group {

    init (){

        var mHall = this;

        //generate material
        var material19 = new THREE.MeshLambertMaterial({
            color: 0xf0f0f0
        });

        //city mesh
        var townGeometry = new THREE.Geometry();

        var hallGeometry = new THREE.BoxGeometry(60, 100, 60);
        var hallMaterials = [
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //LEFT
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //RIGHT
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground11.jpg"), side: THREE.DoubleSide }), //TOP
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //BOTTOM
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //FRONT
                new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //BACK
            ];
        var hallMaterial = new THREE.MeshFaceMaterial(hallMaterials);
        var meshCityhall = new THREE.Mesh(hallGeometry, material19);

        var chcol =32;
        var chrow =30;

        // put a position
        meshCityhall.position.x = (2700 - 5400) + (chcol * 90) - 30;
        meshCityhall.position.z = (2700 - 5400) + (chrow * 90) - 30;
        //put a rotation
        meshCityhall.rotation.y = 0.5*Math.PI*2;

        //add geometry
        var hallGeometry = meshCityhall.hallGeometry;

        townGeometry.mergeMesh(meshCityhall);

        //return mesh
        var mesh4 = new THREE.Mesh(townGeometry, hallMaterial);
        mHall.add(mesh4);
        collidableMeshList.push(mesh4);
    }

    constructor(){
        super();

        this.init();
    }
}