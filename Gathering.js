//prop gathering: health packs, ammo packs
function propGathering(){

    //check collision props
        //check particle hit
        if (propHit >0){
            //gather prop
    
            //amend economy
            leftOverAmmo = 99;
            totalAmmo = 100;
            eAmmo = leftOverAmmo+"/"+totalAmmo;
            eWeapon ="Tommygun";
            //display economy
            document.getElementById('weapon').innerHTML = eWeapon;
            document.getElementById('ammo').innerHTML = eAmmo;
        }
}