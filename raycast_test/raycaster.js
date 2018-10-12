this.colliders = [];

var loader = new THREE.ObjectLoader();

loader.load('models/school/scene.json', function (obj) {
    me.scene.add(obj);

    player = new THREE.Object3D();
    player.add(me.camera);
    me.scene.add( player );

    obj.traverse(function (child) {
        switch(child.userData.type) {
            case 'BoxCollider':
                var geometry = new THREE.BoxGeometry(child.userData.size[0]*child.parent.scale.x, child.userData.size[1]*child.parent.scale.y, child.userData.size[2]*child.parent.scale.z);

                // Bake the rotations as normals in collision reports are not rotated
                var worldRot = child.parent.getWorldQuaternion();
                _.each(geometry.vertices, function(vertex) {
                    vertex.applyQuaternion(worldRot);
                });

                geometry.computeFaceNormals();

                var colliderMesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial());
                me.colliders.push(colliderMesh);
                me.scene.add(colliderMesh);

                colliderMesh.visible = false;
                colliderMesh.position.copy(child.parent.position.clone().add((new THREE.Vector3()).fromArray(child.userData.center)));
                break;
        }
    });
});

var inputVector = new THREE.Vector3();

// react to changes
if (moveForward) {
    inputVector.z -= 1;
}
if (moveBackward) {
    inputVector.z += 1;
}
if (moveLeft) {
    inputVector.x -= 1;
}
if (moveRight) {
    inputVector.x += 1;
}

inputVector.add(this.touchInputVector);

inputVector.applyQuaternion(this.camera.quaternion);

var velocity = new THREE.Vector3();
velocity.add(inputVector);
velocity.multiplyScalar(2);
velocity.multiplyScalar(delta);
velocity.y = 0;

if (inputVector.lengthSq() > 0) {
    raycaster.set(player.position, velocity);

    var intersects = raycaster.intersectObjects( this.colliders );

    if ( intersects.length > 0 && intersects[0].distance < 0.5) {
        var raycastNormal = intersects[0].face.normal;
        var raycastGroundPosition = intersects[0].point;

        var distanceInside = 0.5-intersects[0].distance;

        var add = raycastNormal.clone().multiplyScalar(-velocity.clone().dot(raycastNormal));
        velocity.add(add);
    }
}

if (Keyboard.getKey(KEYS.SHIFT)) {
    velocity.multiplyScalar(2);
}

player.position.add(velocity);