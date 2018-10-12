/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author paulirish / http://paulirish.com/
 */

THREE.FirstPersonControls = function ( object, domElement ) {

        this.object = object;
        this.target = new THREE.Vector3( 0, 0, 0 );  //0,0,0

        this.domElement = ( domElement !== undefined ) ? domElement : document;

        this.movementSpeed = 1.0;
        this.lookSpeed = 0.005;

        this.autoForward = false;

        this.activeLook = true; //true = rotate left right

        this.heightSpeed = false;
        this.heightCoef = 1.0; //1.0
        this.heightMin = 0.0;
        this.heightMax = 1.0;  //1.0

        this.autoSpeedFactor = 0.0;

        this.mouseX = 0;
        this.mouseY = 0;

        this.lat = 0;
        this.lon = 0;
        this.phi = 0;
        this.theta = 0;

        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        
        this.roLeft = false;
        this.roRight = false;

        this.viewHalfX = 0;
        this.viewHalfY = 0;

        //functions
        this.handleResize = function () {

                if ( this.domElement === document ) {

                        this.viewHalfX = window.innerWidth / 2;
                        this.viewHalfY = window.innerHeight / 2;

                } else {

                        this.viewHalfX = this.domElement.offsetWidth / 2;
                        this.viewHalfY = this.domElement.offsetHeight / 2;

                }

        };

        this.onMouseMove = function ( event ) {


		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

		this.mouseX = movementX * 150;
                this.mouseY = movementY * 150;

	}


        this.onKeyDown = function ( event ) {

                switch ( event.keyCode ) {

                        case 104: /*up*/
                        case 87: /*W*/ this.moveForward = true; break;

                        case 100: /*left*/
                        case 65: /*A*/ this.moveLeft = true; break;

                        case 98: /*down*/
                        case 83: /*S*/ this.moveBackward = true; break;

                        case 102: /*right*/
                        case 68: /*D*/ this.moveRight = true; break;

                        case 81: this.mouseX = 1500 - 3000; break; /*q rotate left*/
                        case 103: this.mouseX = 1500 - 3000; break;
                        case 69: this.mouseX = 1500; break;  /*e rotate right*/
                        case 105: this.mouseX = 1500; break;
                        
                }
        };

        this.onKeyUp = function ( event ) {

                switch( event.keyCode ) {

                        case 104: /*up*/
                        case 87: /*W*/ this.moveForward = false; break;

                        case 100: /*left*/
                        case 65: /*A*/ this.moveLeft = false; break;

                        case 98: /*down*/
                        case 83: /*S*/ this.moveBackward = false; break;

                        case 102: /*right*/
                        case 68: /*D*/ this.moveRight = false; break;

                        case 81: this.mouseX = 0; break; /*q rotate left*/
                        case 103: this.mouseX = 0; break;
                        case 69: this.mouseX = 0; break; /*e rotate right*/
                        case 105: this.mouseX = 0; break;
                }

        };

        this.update = function( delta ) {

                var actualMoveSpeed = delta * this.movementSpeed;

                if ( this.moveForward || ( this.autoForward && !this.moveBackward ) ) this.object.translateZ( - ( actualMoveSpeed + this.autoSpeedFactor ) );
                if ( this.moveBackward ) this.object.translateZ( actualMoveSpeed );

                if ( this.moveLeft ) this.object.translateX( - actualMoveSpeed );
                if ( this.moveRight ) this.object.translateX( actualMoveSpeed );

                var actualLookSpeed = delta * this.lookSpeed;

                if ( !this.activeLook ) {

                        actualLookSpeed = 0;

                }
                
                this.lon += this.mouseX * actualLookSpeed;

                this.lat = Math.max( - 85, Math.min( 85, this.lat ) );
                this.phi = THREE.Math.degToRad( 90 - this.lat );

                this.theta = THREE.Math.degToRad( this.lon );

                var targetPosition = this.target,
                        position = this.object.position;

                targetPosition.x = position.x + 100 * Math.sin( this.phi ) * Math.cos( this.theta );
                targetPosition.y = position.y + 100 * Math.cos( this.phi );
                targetPosition.z = position.z + 100 * Math.sin( this.phi ) * Math.sin( this.theta );

                this.object.lookAt( targetPosition );

        };


        this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
        this.domElement.addEventListener( 'mousemove', bind( this, this.onMouseMove ), false );
        this.domElement.addEventListener( 'keydown', bind( this, this.onKeyDown ), false );
        this.domElement.addEventListener( 'keyup', bind( this, this.onKeyUp ), false );

        function bind( scope, fn ) {

                return function () {

                        fn.apply( scope, arguments );

                };

        };

        this.handleResize();

};
