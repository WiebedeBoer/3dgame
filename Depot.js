
class Depot extends THREE.Group {

    init(){
        var mdepot = this;
        //var dgeometry = new THREE.BoxGeometry(30, 60, 30);
        var dgeometry = new THREE.CubeGeometry(30, 60, 30,1,1,1);
        var dcubeMaterials = [
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //LEFT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //RIGHT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //TOP
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //BOTTOM
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //FRONT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //BACK
            ];
        var dmaterial = new THREE.MeshFaceMaterial(dcubeMaterials);
        var ddepot = new THREE.Mesh(dgeometry, dmaterial);
        ddepot.position.x = 47;
        ddepot.position.y = 0;
        ddepot.position.z = 47;
        mdepot.add(ddepot); 
        collidableMeshList.push(ddepot);
    }

    
    constructor(){
        super();
        this.init();
    }
    
    
}
