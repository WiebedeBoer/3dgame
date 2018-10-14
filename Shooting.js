//shooting
function Shot(){
    //shoot ammo check
    if ( keyboard.pressed("X")){
        if (leftOverAmmo >0){
            //less ammo
            leftOverAmmo = leftOverAmmo - 1;
            //create ammo particle
    
        }
        else {
            leftOverAmmo = 0;  
        }
        //display ammo in HUD
        eAmmo = leftOverAmmo+"/"+totalAmmo;        
        document.getElementById('ammo').innerHTML = eAmmo;
        
    }
    
}
               