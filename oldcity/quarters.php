<?php

$com_builder =1;
while ($com_builder <5)
  {
if ($com_builder ==1){
/*start build*/
echo "<br>&lt;QUARTER&gt;";
//food_staples
if ($comrand >=$food_staples && $comrand <$gastronomy){
$buildrand = rand(1,11);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;bakery&lt;/NW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;butcher&lt;/NW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NW&gt;cake store&lt;/NW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NW&gt;candy store&lt;/NW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NW&gt;cheese store&lt;/NW&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NW&gt;convenience store&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;numbers racket&lt;/NWFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NW&gt;delicatessen&lt;/NW&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NW&gt;fishmonger&lt;/NW&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;NW&gt;fruit and vegetable store&lt;/NW&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;NW&gt;grocery store&lt;/NW&gt;";}
else {
echo "<br>&lt;NW&gt;local store&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;numbers racket&lt;/NWFRONT&gt;";}
}
//gastronomy
elseif ($comrand >=$gastronomy && $comrand <$health_beauty){
$buildrand = rand(1,8);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;breakfast bar&lt;/NW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;catering supplier&lt;/NW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NW&gt;cafe&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;speakeasy&lt;/NWFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NW&gt;ice cream parlor&lt;/NW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NW&gt;ice store&lt;/NW&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NW&gt;milk bar&lt;/NW&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NW&gt;restaurant&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;speakeasy&lt;/NWFRONT&gt;";}
else {
echo "<br>&lt;NW&gt;soda fountain&lt;/NW&gt;";}
}
//health_beauty
elseif ($comrand >=$health_beauty && $comrand <$clothing_fashion){
$buildrand = rand(1,10);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;barber&lt;/NW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;beauty parlor&lt;/NW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NW&gt;chiropodist&lt;/NW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NW&gt;cosmetics store&lt;/NW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NW&gt;doctor&lt;/NW&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NW&gt;drug store&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;moonshine still&lt;/NWFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NW&gt;hair salon&lt;/NW&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NW&gt;health center&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;whorehouse&lt;/NWFRONT&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;NW&gt;optometrist&lt;/NW&gt;";}
else {
echo "<br>&lt;NW&gt;orthodontist&lt;/NW&gt;";}
}
//clothing_fashion
elseif ($comrand >=$clothing_fashion && $comrand <$services){
$buildrand = rand(1,15);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;bridal parlor&lt;/NW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;clothier&lt;/NW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NW&gt;costume store&lt;/NW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NW&gt;dressmaker&lt;/NW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NW&gt;fur store&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;grifters&lt;/NWFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NW&gt;haberdashery&lt;/NW&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NW&gt;jeweler&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;grifters&lt;/NWFRONT&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NW&gt;ladieswear&lt;/NW&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;NW&gt;lingerie store&lt;/NW&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;NW&gt;milliner&lt;/NW&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;NW&gt;perfume store&lt;/NW&gt;";}
elseif ($buildrand ==12){
echo "<br>&lt;NW&gt;shoe store&lt;/NW&gt;";}
elseif ($buildrand ==13){
echo "<br>&lt;NW&gt;tailor&lt;/NW&gt;";}
elseif ($buildrand ==14){
echo "<br>&lt;NW&gt;watchmaker&lt;/NW&gt;";}
else {
echo "<br>&lt;NW&gt;wig maker&lt;/NW&gt;";}
}
//services
elseif ($comrand >=$services && $comrand <$companies){
$buildrand = rand(1,19);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;blacksmith&lt;/NW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;coffin maker&lt;/NW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NW&gt;detective agency&lt;/NW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NW&gt;electrician&lt;/NW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NW&gt;french polisher&lt;/NW&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NW&gt;funeral director&lt;/NW&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NW&gt;gunsmith&lt;/NW&gt;";
echo "<br>&lt;SUPPLIER&gt;weapons&lt;/SUPPLIER&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NW&gt;laundry&lt;/NW&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;NW&gt;locksmith&lt;/NW&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;NW&gt;pest controller&lt;/NW&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;NW&gt;photographer&lt;/NW&gt;";}
elseif ($buildrand ==12){
echo "<br>&lt;NW&gt;plumber&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;moonshine still&lt;/NWFRONT&gt;";}
elseif ($buildrand ==13){
echo "<br>&lt;NW&gt;shoe repair&lt;/NW&gt;";}
elseif ($buildrand ==14){
echo "<br>&lt;NW&gt;sign writer&lt;/NW&gt;";}
elseif ($buildrand ==15){
echo "<br>&lt;NW&gt;upholsterer&lt;/NW&gt;";}
elseif ($buildrand ==16){
echo "<br>&lt;NW&gt;window cleaner&lt;/NW&gt;";}
elseif ($buildrand ==17){
echo "<br>&lt;NW&gt;tattoo parlor&lt;/NW&gt;";}
elseif ($buildrand ==18){
echo "<br>&lt;NW&gt;saddler&lt;/NW&gt;";}
else {
echo "<br>&lt;NW&gt;trade union&lt;/NW&gt;";}
}
//companies
elseif ($comrand >=$companies && $comrand <$novelty_luxury){
$buildrand = rand(1,3);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;cab company&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;gambling den&lt;/NWFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;removal company&lt;/NW&gt;";}
else {
echo "<br>&lt;NW&gt;auto dealer&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;loan shark&lt;/NWFRONT&gt;";}
}
//finance_luxury
elseif ($comrand >=$novelty_luxury && $comrand <$sports_leisure){
$buildrand = rand(1,5);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;accountant&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;loan shark&lt;/NWFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;bailiff&lt;/NW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NW&gt;finance company&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;loan shark&lt;/NWFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NW&gt;lawyer&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;loan shark&lt;/NWFRONT&gt;";}
else {
echo "<br>&lt;NW&gt;real estate&lt;/NW&gt;";}
}
//novelty_luxury
elseif ($comrand >=$novelty_luxury && $comrand <$sports_leisure){
$buildrand = rand(1,9);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;art gallery&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;grifters&lt;/NWFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;antiques dealer&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;grifters&lt;/NWFRONT&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NW&gt;auction room&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;gambling den&lt;/NWFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NW&gt;diamond merchant&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;grifters&lt;/NWFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NW&gt;gift store&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;grifters&lt;/NWFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NW&gt;gold merchant&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;grifters&lt;/NWFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NW&gt;pawnbroker&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;grifters&lt;/NWFRONT&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NW&gt;stamp and coin dealer&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;grifters&lt;/NWFRONT&gt;";}
else {
echo "<br>&lt;NW&gt;tobacconist&lt;/NW&gt;";}
}
//sports_leisure
elseif ($comrand >=$sports_leisure && $comrand <$home_improvement){
$buildrand = rand(1,6);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;dance studio&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;whorehouse&lt;/NWFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;golf store&lt;/NW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NW&gt;gym&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;prizefight ring&lt;/NWFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NW&gt;massage parlor&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;whorehouse&lt;/NWFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NW&gt;pool hall&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;prizefight ring&lt;/NWFRONT&gt;";}
else {
echo "<br>&lt;NW&gt;sports equipment&lt;/NW&gt;";}
}
//home_improvement
elseif ($comrand >=$home_improvement && $comrand <$media_entertainment){
$buildrand = rand(1,12);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;china store&lt;/NW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;electrical supplier&lt;/NW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NW&gt;florist&lt;/NW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NW&gt;gardening supplier&lt;/NW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NW&gt;glassware&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;moonshine still&lt;/NWFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NW&gt;hardware store&lt;/NW&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NW&gt;lumber merchant&lt;/NW&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NW&gt;nursery store&lt;/NW&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;NW&gt;piano store&lt;/NW&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;NW&gt;pet store&lt;/NW&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;NW&gt;carpet store&lt;/NW&gt;";}
else {
echo "<br>&lt;NW&gt;furniture store&lt;/NW&gt;";}
}
//media_entertainment
elseif ($comrand >=$media_entertainment && $comrand <=$end_businesses) {
$buildrand = rand(1,8);
if ($buildrand ==1){
echo "<br>&lt;NW&gt;book store&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;gambling den&lt;/NWFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NW&gt;gramophone store&lt;/NW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NW&gt;music store&lt;/NW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NW&gt;news agency&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;numbers racket&lt;/NWFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NW&gt;printer&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;counterfeit press&lt;/NWFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NW&gt;record store&lt;/NW&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NW&gt;stationer&lt;/NW&gt;";
echo "<br>&lt;NWFRONT&gt;counterfeit press&lt;/NWFRONT&gt;";}
else {
echo "<br>&lt;NW&gt;toy store&lt;/NW&gt;";}
}
else {
//no build
}
include("ethnic.php");
echo "<br>&lt;/QUARTER&gt;";
/*end build*/
}
elseif ($com_builder ==2){
/*start build*/
echo "<br>&lt;QUARTER&gt;";
//food_staples
if ($comrand >=$food_staples && $comrand <$gastronomy){
$buildrand = rand(1,11);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;bakery&lt;/NE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;butcher&lt;/NE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NE&gt;cake store&lt;/NE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NE&gt;candy store&lt;/NE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NE&gt;cheese store&lt;/NE&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NE&gt;convenience store&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;numbers racket&lt;/NEFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NE&gt;delicatessen&lt;/NE&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NE&gt;fishmonger&lt;/NE&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;NE&gt;fruit and vegetable store&lt;/NE&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;NE&gt;grocery store&lt;/NE&gt;";}
else {
echo "<br>&lt;NE&gt;local store&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;numbers racket&lt;/NEFRONT&gt;";}
}
//gastronomy
elseif ($comrand >=$gastronomy && $comrand <$health_beauty){
$buildrand = rand(1,8);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;breakfast bar&lt;/NE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;catering supplier&lt;/NE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NE&gt;cafe&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;speakeasy&lt;/NEFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NE&gt;ice cream parlor&lt;/NE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NE&gt;ice store&lt;/NE&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NE&gt;milk bar&lt;/NE&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NE&gt;restaurant&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;speakeasy&lt;/NEFRONT&gt;";}
else {
echo "<br>&lt;NE&gt;soda fountain&lt;/NE&gt;";}
}
//health_beauty
elseif ($comrand >=$health_beauty && $comrand <$clothing_fashion){
$buildrand = rand(1,10);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;barber&lt;/NE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;beauty parlor&lt;/NE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NE&gt;chiropodist&lt;/NE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NE&gt;cosmetics store&lt;/NE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NE&gt;doctor&lt;/NE&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NE&gt;drug store&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;moonshine still&lt;/NEFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NE&gt;hair salon&lt;/NE&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NE&gt;health center&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;whorehouse&lt;/NEFRONT&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;NE&gt;optometrist&lt;/NE&gt;";}
else {
echo "<br>&lt;NE&gt;orthodontist&lt;/NE&gt;";}
}
//clothing_fashion
elseif ($comrand >=$clothing_fashion && $comrand <$services){
$buildrand = rand(1,15);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;bridal parlor&lt;/NE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;clothier&lt;/NE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NE&gt;costume store&lt;/NE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NE&gt;dressmaker&lt;/NE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NE&gt;fur store&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;grifters&lt;/NEFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NE&gt;haberdashery&lt;/NE&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NE&gt;jeweler&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;grifters&lt;/NEFRONT&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NE&gt;ladieswear&lt;/NE&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;NE&gt;lingerie store&lt;/NE&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;NE&gt;milliner&lt;/NE&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;NE&gt;perfume store&lt;/NE&gt;";}
elseif ($buildrand ==12){
echo "<br>&lt;NE&gt;shoe store&lt;/NE&gt;";}
elseif ($buildrand ==13){
echo "<br>&lt;NE&gt;tailor&lt;/NE&gt;";}
elseif ($buildrand ==14){
echo "<br>&lt;NE&gt;watchmaker&lt;/NE&gt;";}
else {
echo "<br>&lt;NE&gt;wig maker&lt;/NE&gt;";}
}
//services
elseif ($comrand >=$services && $comrand <$companies){
$buildrand = rand(1,19);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;blacksmith&lt;/NE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;coffin maker&lt;/NE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NE&gt;detective agency&lt;/NE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NE&gt;electrician&lt;/NE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NE&gt;french polisher&lt;/NE&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NE&gt;funeral director&lt;/NE&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NE&gt;gunsmith&lt;/NE&gt;";
echo "<br>&lt;SUPPLIER&gt;weapons&lt;/SUPPLIER&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NE&gt;laundry&lt;/NE&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;NE&gt;locksmith&lt;/NE&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;NE&gt;pest controller&lt;/NE&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;NE&gt;photographer&lt;/NE&gt;";}
elseif ($buildrand ==12){
echo "<br>&lt;NE&gt;plumber&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;moonshine still&lt;/NEFRONT&gt;";}
elseif ($buildrand ==13){
echo "<br>&lt;NE&gt;shoe repair&lt;/NE&gt;";}
elseif ($buildrand ==14){
echo "<br>&lt;NE&gt;sign writer&lt;/NE&gt;";}
elseif ($buildrand ==15){
echo "<br>&lt;NE&gt;upholsterer&lt;/NE&gt;";}
elseif ($buildrand ==16){
echo "<br>&lt;NE&gt;window cleaner&lt;/NE&gt;";}
elseif ($buildrand ==17){
echo "<br>&lt;NE&gt;tattoo parlor&lt;/NE&gt;";}
elseif ($buildrand ==18){
echo "<br>&lt;NE&gt;saddler&lt;/NE&gt;";}
else {
echo "<br>&lt;NE&gt;trade union&lt;/NE&gt;";}
}
//companies
elseif ($comrand >=$companies && $comrand <$novelty_luxury){
$buildrand = rand(1,3);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;cab company&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;gambling den&lt;/NEFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;removal company&lt;/NE&gt;";}
else {
echo "<br>&lt;NE&gt;auto dealer&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;loan shark&lt;/NEFRONT&gt;";}
}
//finance_luxury
elseif ($comrand >=$novelty_luxury && $comrand <$sports_leisure){
$buildrand = rand(1,5);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;accountant&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;loan shark&lt;/NEFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;bailiff&lt;/NE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NE&gt;finance company&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;loan shark&lt;/NEFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NE&gt;lawyer&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;loan shark&lt;/NEFRONT&gt;";}
else {
echo "<br>&lt;NE&gt;real estate&lt;/NE&gt;";}
}
//novelty_luxury
elseif ($comrand >=$novelty_luxury && $comrand <$sports_leisure){
$buildrand = rand(1,9);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;art gallery&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;grifters&lt;/NEFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;antiques dealer&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;grifters&lt;/NEFRONT&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NE&gt;auction room&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;gambling den&lt;/NEFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NE&gt;diamond merchant&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;grifters&lt;/NEFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NE&gt;gift store&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;grifters&lt;/NEFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NE&gt;gold merchant&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;grifters&lt;/NEFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NE&gt;pawnbroker&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;grifters&lt;/NEFRONT&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NE&gt;stamp and coin dealer&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;grifters&lt;/NEFRONT&gt;";}
else {
echo "<br>&lt;NE&gt;tobacconist&lt;/NE&gt;";}
}
//sports_leisure
elseif ($comrand >=$sports_leisure && $comrand <$home_improvement){
$buildrand = rand(1,6);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;dance studio&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;whorehouse&lt;/NEFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;golf store&lt;/NE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NE&gt;gym&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;prizefight ring&lt;/NEFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NE&gt;massage parlor&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;whorehouse&lt;/NEFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NE&gt;pool hall&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;prizefight ring&lt;/NEFRONT&gt;";}
else {
echo "<br>&lt;NE&gt;sports equipment&lt;/NE&gt;";}
}
//home_improvement
elseif ($comrand >=$home_improvement && $comrand <$media_entertainment){
$buildrand = rand(1,12);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;china store&lt;/NE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;electrical supplier&lt;/NE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NE&gt;florist&lt;/NE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NE&gt;gardening supplier&lt;/NE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NE&gt;glassware&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;moonshine still&lt;/NEFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NE&gt;hardware store&lt;/NE&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NE&gt;lumber merchant&lt;/NE&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;NE&gt;nursery store&lt;/NE&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;NE&gt;piano store&lt;/NE&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;NE&gt;pet store&lt;/NE&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;NE&gt;carpet store&lt;/NE&gt;";}
else {
echo "<br>&lt;NE&gt;furniture store&lt;/NE&gt;";}
}
//media_entertainment
elseif ($comrand >=$media_entertainment && $comrand <=$end_businesses) {
$buildrand = rand(1,8);
if ($buildrand ==1){
echo "<br>&lt;NE&gt;book store&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;gambling den&lt;/NEFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;NE&gt;gramophone store&lt;/NE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;NE&gt;music store&lt;/NE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;NE&gt;news agency&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;numbers racket&lt;/NEFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;NE&gt;printer&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;counterfeit press&lt;/NEFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;NE&gt;record store&lt;/NE&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;NE&gt;stationer&lt;/NE&gt;";
echo "<br>&lt;NEFRONT&gt;counterfeit press&lt;/NEFRONT&gt;";}
else {
echo "<br>&lt;NE&gt;toy store&lt;/NE&gt;";}
}
else {
//no build
}
/*end build*/
include("ethnic.php");
echo "<br>&lt;/QUARTER&gt;";
}
elseif ($com_builder ==3){
/*start build*/
echo "<br>&lt;QUARTER&gt;";
//food_staples
if ($comrand >=$food_staples && $comrand <$gastronomy){
$buildrand = rand(1,11);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;bakery&lt;/SW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;butcher&lt;/SW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SW&gt;cake store&lt;/SW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SW&gt;candy store&lt;/SW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SW&gt;cheese store&lt;/SW&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SW&gt;convenience store&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;numbers racket&lt;/SWFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SW&gt;delicatessen&lt;/SW&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SW&gt;fishmonger&lt;/SW&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;SW&gt;fruit and vegetable store&lt;/SW&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;SW&gt;grocery store&lt;/SW&gt;";}
else {
echo "<br>&lt;SW&gt;local store&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;numbers racket&lt;/SWFRONT&gt;";}
}
//gastronomy
elseif ($comrand >=$gastronomy && $comrand <$health_beauty){
$buildrand = rand(1,8);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;breakfast bar&lt;/SW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;catering supplier&lt;/SW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SW&gt;cafe&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;speakeasy&lt;/SWFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SW&gt;ice cream parlor&lt;/SW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SW&gt;ice store&lt;/SW&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SW&gt;milk bar&lt;/SW&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SW&gt;restaurant&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;speakeasy&lt;/SWFRONT&gt;";}
else {
echo "<br>&lt;SW&gt;soda fountain&lt;/SW&gt;";}
}
//health_beauty
elseif ($comrand >=$health_beauty && $comrand <$clothing_fashion){
$buildrand = rand(1,10);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;barber&lt;/SW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;beauty parlor&lt;/SW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SW&gt;chiropodist&lt;/SW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SW&gt;cosmetics store&lt;/SW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SW&gt;doctor&lt;/SW&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SW&gt;drug store&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;moonshine still&lt;/SWFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SW&gt;hair salon&lt;/SW&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SW&gt;health center&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;whorehouse&lt;/SWFRONT&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;SW&gt;optometrist&lt;/SW&gt;";}
else {
echo "<br>&lt;SW&gt;orthodontist&lt;/SW&gt;";}
}
//clothing_fashion
elseif ($comrand >=$clothing_fashion && $comrand <$services){
$buildrand = rand(1,15);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;bridal parlor&lt;/SW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;clothier&lt;/SW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SW&gt;costume store&lt;/SW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SW&gt;dressmaker&lt;/SW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SW&gt;fur store&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;grifters&lt;/SWFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SW&gt;haberdashery&lt;/SW&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SW&gt;jeweler&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;grifters&lt;/SWFRONT&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SW&gt;ladieswear&lt;/SW&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;SW&gt;lingerie store&lt;/SW&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;SW&gt;milliner&lt;/SW&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;SW&gt;perfume store&lt;/SW&gt;";}
elseif ($buildrand ==12){
echo "<br>&lt;SW&gt;shoe store&lt;/SW&gt;";}
elseif ($buildrand ==13){
echo "<br>&lt;SW&gt;tailor&lt;/SW&gt;";}
elseif ($buildrand ==14){
echo "<br>&lt;SW&gt;watchmaker&lt;/SW&gt;";}
else {
echo "<br>&lt;SW&gt;wig maker&lt;/SW&gt;";}
}
//services
elseif ($comrand >=$services && $comrand <$companies){
$buildrand = rand(1,19);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;blacksmith&lt;/SW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;coffin maker&lt;/SW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SW&gt;detective agency&lt;/SW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SW&gt;electrician&lt;/SW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SW&gt;french polisher&lt;/SW&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SW&gt;funeral director&lt;/SW&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SW&gt;gunsmith&lt;/SW&gt;";
echo "<br>&lt;SUPPLIER&gt;weapons&lt;/SUPPLIER&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SW&gt;laundry&lt;/SW&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;SW&gt;locksmith&lt;/SW&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;SW&gt;pest controller&lt;/SW&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;SW&gt;photographer&lt;/SW&gt;";}
elseif ($buildrand ==12){
echo "<br>&lt;SW&gt;plumber&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;moonshine still&lt;/SWFRONT&gt;";}
elseif ($buildrand ==13){
echo "<br>&lt;SW&gt;shoe repair&lt;/SW&gt;";}
elseif ($buildrand ==14){
echo "<br>&lt;SW&gt;sign writer&lt;/SW&gt;";}
elseif ($buildrand ==15){
echo "<br>&lt;SW&gt;upholsterer&lt;/SW&gt;";}
elseif ($buildrand ==16){
echo "<br>&lt;SW&gt;window cleaner&lt;/SW&gt;";}
elseif ($buildrand ==17){
echo "<br>&lt;SW&gt;tattoo parlor&lt;/SW&gt;";}
elseif ($buildrand ==18){
echo "<br>&lt;SW&gt;saddler&lt;/SW&gt;";}
else {
echo "<br>&lt;SW&gt;trade union&lt;/SW&gt;";}
}
//companies
elseif ($comrand >=$companies && $comrand <$novelty_luxury){
$buildrand = rand(1,3);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;cab company&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;gambling den&lt;/SWFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;removal company&lt;/SW&gt;";}
else {
echo "<br>&lt;SW&gt;auto dealer&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;loan shark&lt;/SWFRONT&gt;";}
}
//finance_luxury
elseif ($comrand >=$novelty_luxury && $comrand <$sports_leisure){
$buildrand = rand(1,5);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;accountant&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;loan shark&lt;/SWFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;bailiff&lt;/SW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SW&gt;finance company&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;loan shark&lt;/SWFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SW&gt;lawyer&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;loan shark&lt;/SWFRONT&gt;";}
else {
echo "<br>&lt;SW&gt;real estate&lt;/SW&gt;";}
}
//novelty_luxury
elseif ($comrand >=$novelty_luxury && $comrand <$sports_leisure){
$buildrand = rand(1,9);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;art gallery&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;grifters&lt;/SWFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;antiques dealer&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;grifters&lt;/SWFRONT&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SW&gt;auction room&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;gambling den&lt;/SWFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SW&gt;diamond merchant&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;grifters&lt;/SWFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SW&gt;gift store&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;grifters&lt;/SWFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SW&gt;gold merchant&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;grifters&lt;/SWFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SW&gt;pawnbroker&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;grifters&lt;/SWFRONT&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SW&gt;stamp and coin dealer&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;grifters&lt;/SWFRONT&gt;";}
else {
echo "<br>&lt;SW&gt;tobacconist&lt;/SW&gt;";}
}
//sports_leisure
elseif ($comrand >=$sports_leisure && $comrand <$home_improvement){
$buildrand = rand(1,6);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;dance studio&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;whorehouse&lt;/SWFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;golf store&lt;/SW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SW&gt;gym&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;prizefight ring&lt;/SWFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SW&gt;massage parlor&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;whorehouse&lt;/SWFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SW&gt;pool hall&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;prizefight ring&lt;/SWFRONT&gt;";}
else {
echo "<br>&lt;SW&gt;sports equipment&lt;/SW&gt;";}
}
//home_improvement
elseif ($comrand >=$home_improvement && $comrand <$media_entertainment){
$buildrand = rand(1,12);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;china store&lt;/SW&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;electrical supplier&lt;/SW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SW&gt;florist&lt;/SW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SW&gt;gardening supplier&lt;/SW&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SW&gt;glassware&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;moonshine still&lt;/SWFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SW&gt;hardware store&lt;/SW&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SW&gt;lumber merchant&lt;/SW&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SW&gt;nursery store&lt;/SW&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;SW&gt;piano store&lt;/SW&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;SW&gt;pet store&lt;/SW&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;SW&gt;carpet store&lt;/SW&gt;";}
else {
echo "<br>&lt;SW&gt;furniture store&lt;/SW&gt;";}
}
//media_entertainment
elseif ($comrand >=$media_entertainment && $comrand <=$end_businesses) {
$buildrand = rand(1,8);
if ($buildrand ==1){
echo "<br>&lt;SW&gt;book store&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;gambling den&lt;/SWFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SW&gt;gramophone store&lt;/SW&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SW&gt;music store&lt;/SW&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SW&gt;news agency&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;numbers racket&lt;/SWFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SW&gt;printer&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;counterfeit press&lt;/SWFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SW&gt;record store&lt;/SW&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SW&gt;stationer&lt;/SW&gt;";
echo "<br>&lt;SWFRONT&gt;counterfeit press&lt;/SWFRONT&gt;";}
else {
echo "<br>&lt;SW&gt;toy store&lt;/SW&gt;";}
}
else {
//no build
}
include("ethnic.php");
/*end build*/
echo "<br>&lt;/QUARTER&gt;";
}
elseif ($com_builder ==4){
/*start build*/
echo "<br>&lt;QUARTER&gt;";
//food_staples
if ($comrand >=$food_staples && $comrand <$gastronomy){
$buildrand = rand(1,11);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;bakery&lt;/SE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;butcher&lt;/SE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SE&gt;cake store&lt;/SE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SE&gt;candy store&lt;/SE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SE&gt;cheese store&lt;/SE&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SE&gt;convenience store&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;numbers racket&lt;/SEFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SE&gt;delicatessen&lt;/SE&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SE&gt;fishmonger&lt;/SE&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;SE&gt;fruit and vegetable store&lt;/SE&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;SE&gt;grocery store&lt;/SE&gt;";}
else {
echo "<br>&lt;SE&gt;local store&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;numbers racket&lt;/SEFRONT&gt;";}
}
//gastronomy
elseif ($comrand >=$gastronomy && $comrand <$health_beauty){
$buildrand = rand(1,8);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;breakfast bar&lt;/SE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;catering supplier&lt;/SE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SE&gt;cafe&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;speakeasy&lt;/SEFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SE&gt;ice cream parlor&lt;/SE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SE&gt;ice store&lt;/SE&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SE&gt;milk bar&lt;/SE&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SE&gt;restaurant&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;speakeasy&lt;/SEFRONT&gt;";}
else {
echo "<br>&lt;SE&gt;soda fountain&lt;/SE&gt;";}
}
//health_beauty
elseif ($comrand >=$health_beauty && $comrand <$clothing_fashion){
$buildrand = rand(1,10);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;barber&lt;/SE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;beauty parlor&lt;/SE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SE&gt;chiropodist&lt;/SE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SE&gt;cosmetics store&lt;/SE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SE&gt;doctor&lt;/SE&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SE&gt;drug store&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;moonshine still&lt;/SEFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SE&gt;hair salon&lt;/SE&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SE&gt;health center&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;whorehouse&lt;/SEFRONT&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;SE&gt;optometrist&lt;/SE&gt;";}
else {
echo "<br>&lt;SE&gt;orthodontist&lt;/SE&gt;";}
}
//clothing_fashion
elseif ($comrand >=$clothing_fashion && $comrand <$services){
$buildrand = rand(1,15);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;bridal parlor&lt;/SE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;clothier&lt;/SE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SE&gt;costume store&lt;/SE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SE&gt;dressmaker&lt;/SE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SE&gt;fur store&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;grifters&lt;/SEFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SE&gt;haberdashery&lt;/SE&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SE&gt;jeweler&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;grifters&lt;/SEFRONT&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SE&gt;ladieswear&lt;/SE&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;SE&gt;lingerie store&lt;/SE&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;SE&gt;milliner&lt;/SE&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;SE&gt;perfume store&lt;/SE&gt;";}
elseif ($buildrand ==12){
echo "<br>&lt;SE&gt;shoe store&lt;/SE&gt;";}
elseif ($buildrand ==13){
echo "<br>&lt;SE&gt;tailor&lt;/SE&gt;";}
elseif ($buildrand ==14){
echo "<br>&lt;SE&gt;watchmaker&lt;/SE&gt;";}
else {
echo "<br>&lt;SE&gt;wig maker&lt;/SE&gt;";}
}
//services
elseif ($comrand >=$services && $comrand <$companies){
$buildrand = rand(1,19);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;blacksmith&lt;/SE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;coffin maker&lt;/SE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SE&gt;detective agency&lt;/SE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SE&gt;electrician&lt;/SE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SE&gt;french polisher&lt;/SE&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SE&gt;funeral director&lt;/SE&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SE&gt;gunsmith&lt;/SE&gt;";
echo "<br>&lt;SUPPLIER&gt;weapons&lt;/SUPPLIER&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SE&gt;laundry&lt;/SE&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;SE&gt;locksmith&lt;/SE&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;SE&gt;pest controller&lt;/SE&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;SE&gt;photographer&lt;/SE&gt;";}
elseif ($buildrand ==12){
echo "<br>&lt;SE&gt;plumber&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;moonshine still&lt;/SEFRONT&gt;";}
elseif ($buildrand ==13){
echo "<br>&lt;SE&gt;shoe repair&lt;/SE&gt;";}
elseif ($buildrand ==14){
echo "<br>&lt;SE&gt;sign writer&lt;/SE&gt;";}
elseif ($buildrand ==15){
echo "<br>&lt;SE&gt;upholsterer&lt;/SE&gt;";}
elseif ($buildrand ==16){
echo "<br>&lt;SE&gt;window cleaner&lt;/SE&gt;";}
elseif ($buildrand ==17){
echo "<br>&lt;SE&gt;tattoo parlor&lt;/SE&gt;";}
elseif ($buildrand ==18){
echo "<br>&lt;SE&gt;saddler&lt;/SE&gt;";}
else {
echo "<br>&lt;SE&gt;trade union&lt;/SE&gt;";}
}
//companies
elseif ($comrand >=$companies && $comrand <$novelty_luxury){
$buildrand = rand(1,3);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;cab company&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;gambling den&lt;/SEFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;removal company&lt;/SE&gt;";}
else {
echo "<br>&lt;SE&gt;auto dealer&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;loan shark&lt;/SEFRONT&gt;";}
}
//finance_luxury
elseif ($comrand >=$novelty_luxury && $comrand <$sports_leisure){
$buildrand = rand(1,5);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;accountant&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;loan shark&lt;/SEFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;bailiff&lt;/SE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SE&gt;finance company&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;loan shark&lt;/SEFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SE&gt;lawyer&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;loan shark&lt;/SEFRONT&gt;";}
else {
echo "<br>&lt;SE&gt;real estate&lt;/SE&gt;";}
}
//novelty_luxury
elseif ($comrand >=$novelty_luxury && $comrand <$sports_leisure){
$buildrand = rand(1,9);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;art gallery&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;grifters&lt;/SEFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;antiques dealer&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;grifters&lt;/SEFRONT&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SE&gt;auction room&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;gambling den&lt;/SEFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SE&gt;diamond merchant&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;grifters&lt;/SEFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SE&gt;gift store&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;grifters&lt;/SEFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SE&gt;gold merchant&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;grifters&lt;/SEFRONT&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SE&gt;pawnbroker&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;grifters&lt;/SEFRONT&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SE&gt;stamp and coin dealer&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;grifters&lt;/SEFRONT&gt;";}
else {
echo "<br>&lt;SE&gt;tobacconist&lt;/SE&gt;";}
}
//sports_leisure
elseif ($comrand >=$sports_leisure && $comrand <$home_improvement){
$buildrand = rand(1,6);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;dance studio&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;whorehouse&lt;/SEFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;golf store&lt;/SE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SE&gt;gym&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;prizefight ring&lt;/SEFRONT&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SE&gt;massage parlor&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;whorehouse&lt;/SEFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SE&gt;pool hall&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;prizefight ring&lt;/SEFRONT&gt;";}
else {
echo "<br>&lt;SE&gt;sports equipment&lt;/SE&gt;";}
}
//home_improvement
elseif ($comrand >=$home_improvement && $comrand <$media_entertainment){
$buildrand = rand(1,12);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;china store&lt;/SE&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;electrical supplier&lt;/SE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SE&gt;florist&lt;/SE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SE&gt;gardening supplier&lt;/SE&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SE&gt;glassware&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;moonshine still&lt;/SEFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SE&gt;hardware store&lt;/SE&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SE&gt;lumber merchant&lt;/SE&gt;";}
elseif ($buildrand ==8){
echo "<br>&lt;SE&gt;nursery store&lt;/SE&gt;";}
elseif ($buildrand ==9){
echo "<br>&lt;SE&gt;piano store&lt;/SE&gt;";}
elseif ($buildrand ==10){
echo "<br>&lt;SE&gt;pet store&lt;/SE&gt;";}
elseif ($buildrand ==11){
echo "<br>&lt;SE&gt;carpet store&lt;/SE&gt;";}
else {
echo "<br>&lt;SE&gt;furniture store&lt;/SE&gt;";}
}
//media_entertainment
elseif ($comrand >=$media_entertainment && $comrand <=$end_businesses) {
$buildrand = rand(1,8);
if ($buildrand ==1){
echo "<br>&lt;SE&gt;book store&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;gambling den&lt;/SEFRONT&gt;";}
elseif ($buildrand ==2){
echo "<br>&lt;SE&gt;gramophone store&lt;/SE&gt;";}
elseif ($buildrand ==3){
echo "<br>&lt;SE&gt;music store&lt;/SE&gt;";}
elseif ($buildrand ==4){
echo "<br>&lt;SE&gt;news agency&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;numbers racket&lt;/SEFRONT&gt;";}
elseif ($buildrand ==5){
echo "<br>&lt;SE&gt;printer&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;counterfeit press&lt;/SEFRONT&gt;";}
elseif ($buildrand ==6){
echo "<br>&lt;SE&gt;record store&lt;/SE&gt;";}
elseif ($buildrand ==7){
echo "<br>&lt;SE&gt;stationer&lt;/SE&gt;";
echo "<br>&lt;SEFRONT&gt;counterfeit press&lt;/SEFRONT&gt;";}
else {
echo "<br>&lt;SE&gt;toy store&lt;/SE&gt;";}
}
else {
//no build
}
include("ethnic.php");
/*end build*/
echo "<br>&lt;/QUARTER&gt;";
}
$com_builder++;
  }
  
?>
