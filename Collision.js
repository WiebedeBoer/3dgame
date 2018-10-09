        // collision detection:
        var originPoint = MovingCube.position.clone();

        clearText();

        for (var vertexIndex = 0; vertexIndex < MovingCube.geometry.vertices.length; vertexIndex++)
        {
                var localVertex = MovingCube.geometry.vertices[vertexIndex].clone();
                var globalVertex = localVertex.applyMatrix4( MovingCube.matrix );
                var directionVector = globalVertex.sub( MovingCube.position );

                var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
                var collisionResults = ray.intersectObjects( collidableMeshList );
                if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() )
                        //Hit
        }