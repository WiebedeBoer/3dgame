<?php

$im_ce = imagecreatefrompng("colorfetch.png");
$im_we = imagecreatefrompng("wealthfetch.png");
$im_ca = imagecreatefrompng("catfetch.png");
$im_et = imagecreatefrompng("ethnicfetch.png");

$id =0;
$yr =0;

while ($id <1600){

$xr = $id % 40;

if ($xr ==0 && $id >2){
$yr++;
}

//business color
$rgb_ce = imagecolorat($im_ce, $xr, $yr);
$r_ce = ($rgb_ce >> 16) & 0xFF;
$g_ce = ($rgb_ce >> 8) & 0xFF;
$b_ce = $rgb_ce & 0xFF;
$rgb_cereal = $r_ce.",".$g_ce.",".$b_ce;

//wealth color
$rgb_we = imagecolorat($im_we, $xr, $yr);
$r_we = ($rgb_we >> 16) & 0xFF;
$g_we = ($rgb_we >> 8) & 0xFF;
$b_we = $rgb_we & 0xFF;
$rgb_wealth = $r_we.",".$g_we.",".$b_we;

//category color
$rgb_ca = imagecolorat($im_ca, $xr, $yr);
$r_ca = ($rgb_ca >> 16) & 0xFF;
$g_ca = ($rgb_ca >> 8) & 0xFF;
$b_ca = $rgb_ca & 0xFF;
$rgb_cat = $r_ca.",".$g_ca.",".$b_ca;

//ethnicity color
$rgb_et = imagecolorat($im_et, $xr, $yr);
$r_et = ($rgb_et >> 16) & 0xFF;
$g_et = ($rgb_et >> 8) & 0xFF;
$b_et = $rgb_et & 0xFF;
$rgb_ethnic = $r_et.",".$g_et.",".$b_et;

$idview = $id + 1;
$xview = $xr + 1;
$yview = $yr + 1;

//start grid
echo "<br>&lt;GRID&gt;";
//residential
if ($rgb_cereal =="255,255,255"){
echo "<br>&lt;BUSINESS&gt;tenement&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
if ($rgb_wealth =="0,0,128"){
echo "<br>&lt;WEALTH&gt;dilapidated&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,0,255"){
echo "<br>&lt;WEALTH&gt;impoverished&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,255,255"){
echo "<br>&lt;WEALTH&gt;mediocre&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,0,0"){
echo "<br>&lt;WEALTH&gt;upscale&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,128,0"){
echo "<br>&lt;WEALTH&gt;rich&lt;/WEALTH&gt;";
}
else {
echo "<br>&lt;WEALTH&gt;opulent&lt;/WEALTH&gt;";
}
if ($rgb_cat =="255,0,255"){
echo "<br>&lt;CATEGORY&gt;elite&lt;/CATEGORY&gt;";
}
elseif ($rgb_cat =="255,128,255"){
echo "<br>&lt;CATEGORY&gt;gentry&lt;/CATEGORY&gt;";
}
elseif ($rgb_cat =="128,0,255"){
echo "<br>&lt;CATEGORY&gt;bourgeois&lt;/CATEGORY&gt;";
}
elseif ($rgb_cat =="0,255,255"){
echo "<br>&lt;CATEGORY&gt;blue collar&lt;/CATEGORY&gt;";
}
else {
echo "<br>&lt;CATEGORY&gt;dilapidated&lt;/CATEGORY&gt;";
}
echo "<br>&lt;FRONT&gt;office&lt;/FRONT&gt;";
include("ethnic.php");
}
//commercial
elseif ($rgb_cereal =="255,0,0"){
echo "<br>&lt;BUSINESS&gt;commercial&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
if ($rgb_wealth =="0,0,128"){
echo "<br>&lt;WEALTH&gt;dilapidated&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,0,255"){
echo "<br>&lt;WEALTH&gt;impoverished&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,255,255"){
echo "<br>&lt;WEALTH&gt;mediocre&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,0,0"){
echo "<br>&lt;WEALTH&gt;upscale&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,128,0"){
echo "<br>&lt;WEALTH&gt;rich&lt;/WEALTH&gt;";
}
else {
echo "<br>&lt;WEALTH&gt;opulent&lt;/WEALTH&gt;";
}

/*
food_staples 11
gastronomy 8
health_beauty 10
clothing_fashion 15
services 19
companies 3
finance_luxury 5
novelty_luxury 9
sports_leisure 6
home_improvement 12
media_entertainment 8
*/
if ($rgb_cat =="128,0,0"){
echo "<br>&lt;CATEGORY&gt;downtown&lt;/CATEGORY&gt;";
$food_staples =1;
$gastronomy = $food_staples + 13;
$health_beauty = $gastronomy + 10;
$clothing_fashion = $health_beauty + 15;
$services = $clothing_fashion + 18;
$companies = $services + 19;
$finance_luxury = $companies + 5;
$novelty_luxury = $finance_luxury + 8;
$sports_leisure = $novelty_luxury + 12;
$home_improvement = $sports_leisure + 12;
$media_entertainment = $home_improvement + 6;
$end_businesses = $media_entertainment + 12;
$comrand = rand($food_staples,$end_businesses);
}
/*
food_staples 11
gastronomy 8
health_beauty 10
clothing_fashion 15
services 19
companies 3
finance_luxury 5
novelty_luxury 9
sports_leisure 6
home_improvement 12
media_entertainment 8
*/
elseif ($rgb_cat =="0,255,0"){
echo "<br>&lt;CATEGORY&gt;financial&lt;/CATEGORY&gt;";
$food_staples =1;
$gastronomy = $food_staples + 11;
$health_beauty = $gastronomy + 12;
$clothing_fashion = $health_beauty + 10;
$services = $clothing_fashion + 15;
$companies = $services + 19;
$finance_luxury = $companies + 6;
$novelty_luxury = $finance_luxury + 20;
$sports_leisure = $novelty_luxury + 18;
$home_improvement = $sports_leisure + 6;
$media_entertainment = $home_improvement + 9;
$end_businesses = $media_entertainment + 10;
$comrand = rand($food_staples,$end_businesses);
}
/*
food_staples 11
gastronomy 8
health_beauty 10
clothing_fashion 15
services 19
companies 3
finance_luxury 5
novelty_luxury 9
sports_leisure 6
home_improvement 12
media_entertainment 8
*/
elseif ($rgb_cat =="255,128,0"){
echo "<br>&lt;CATEGORY&gt;publishing&lt;/CATEGORY&gt;";
$food_staples =1;
$gastronomy = $food_staples + 5;
$health_beauty = $gastronomy + 8;
$clothing_fashion = $health_beauty + 8;
$services = $clothing_fashion + 12;
$companies = $services + 19;
$finance_luxury = $companies + 6;
$novelty_luxury = $finance_luxury + 5;
$sports_leisure = $novelty_luxury + 9;
$home_improvement = $sports_leisure + 6;
$media_entertainment = $home_improvement + 10;
$end_businesses = $media_entertainment + 24;
$comrand = rand($food_staples,$end_businesses);
}
/*
food_staples 11
gastronomy 8
health_beauty 10
clothing_fashion 15
services 19
companies 3
finance_luxury 5
novelty_luxury 9
sports_leisure 6
home_improvement 12
media_entertainment 8
*/
elseif ($rgb_cat =="255,255,0"){
echo "<br>&lt;CATEGORY&gt;commercial&lt;/CATEGORY&gt;";
$food_staples =1;
$gastronomy = $food_staples + 10;
$health_beauty = $gastronomy + 8;
$clothing_fashion = $health_beauty + 8;
$services = $clothing_fashion + 17;
$companies = $services + 20;
$finance_luxury = $companies + 4;
$novelty_luxury = $finance_luxury + 8;
$sports_leisure = $novelty_luxury + 18;
$home_improvement = $sports_leisure + 9;
$media_entertainment = $home_improvement + 12;
$end_businesses = $media_entertainment + 8;
$comrand = rand($food_staples,$end_businesses);
}
/*
food_staples 11
gastronomy 8
health_beauty 10
clothing_fashion 15
services 19
companies 3
finance_luxury 5
novelty_luxury 9
sports_leisure 6
home_improvement 12
media_entertainment 8
*/
elseif ($rgb_cat =="0,255,128"){
echo "<br>&lt;CATEGORY&gt;garment&lt;/CATEGORY&gt;";
$food_staples =1;
$gastronomy = $food_staples + 11;
$health_beauty = $gastronomy + 8;
$clothing_fashion = $health_beauty + 15;
$services = $clothing_fashion + 45;
$companies = $services + 24;
$finance_luxury = $companies + 3;
$novelty_luxury = $finance_luxury + 5;
$sports_leisure = $novelty_luxury + 12;
$home_improvement = $sports_leisure + 6;
$media_entertainment = $home_improvement + 12;
$end_businesses = $media_entertainment + 8;
$comrand = rand($food_staples,$end_businesses);
}
/*
food_staples 11
gastronomy 8
health_beauty 10
clothing_fashion 15
services 19
companies 3
finance_luxury 5
novelty_luxury 9
sports_leisure 6
home_improvement 12
media_entertainment 8
*/
elseif ($rgb_cat =="128,255,0"){
echo "<br>&lt;CATEGORY&gt;nightlife&lt;/CATEGORY&gt;";
$food_staples =1;
$gastronomy = $food_staples + 10;
$health_beauty = $gastronomy + 16;
$clothing_fashion = $health_beauty + 10;
$services = $clothing_fashion + 15;
$companies = $services + 11;
$finance_luxury = $companies + 3;
$novelty_luxury = $finance_luxury + 3;
$sports_leisure = $novelty_luxury + 10;
$home_improvement = $sports_leisure + 12;
$media_entertainment = $home_improvement + 8;
$end_businesses = $media_entertainment + 10;
$comrand = rand($food_staples,$end_businesses);
}
/*
food_staples 11
gastronomy 8
health_beauty 10
clothing_fashion 15
services 19
companies 3
finance_luxury 5
novelty_luxury 9
sports_leisure 6
home_improvement 12
media_entertainment 8
*/
elseif ($rgb_cat =="0,128,0"){
echo "<br>&lt;CATEGORY&gt;gentry&lt;/CATEGORY&gt;";
$food_staples =1;
$gastronomy = $food_staples + 15;
$health_beauty = $gastronomy + 10;
$clothing_fashion = $health_beauty + 14;
$services = $clothing_fashion + 20;
$companies = $services + 16;
$finance_luxury = $companies + 3;
$novelty_luxury = $finance_luxury + 10;
$sports_leisure = $novelty_luxury + 9;
$home_improvement = $sports_leisure + 3;
$media_entertainment = $home_improvement + 4;
$end_businesses = $media_entertainment + 4;
$comrand = rand($food_staples,$end_businesses);
}
/*
food_staples 11
gastronomy 8
health_beauty 10
clothing_fashion 15
services 19
companies 3
finance_luxury 5
novelty_luxury 9
sports_leisure 6
home_improvement 12
media_entertainment 8
*/
elseif ($rgb_cat =="128,128,64"){
echo "<br>&lt;CATEGORY&gt;bohemian&lt;/CATEGORY&gt;";
$food_staples =1;
$gastronomy = $food_staples + 11;
$health_beauty = $gastronomy + 16;
$clothing_fashion = $health_beauty + 15;
$services = $clothing_fashion + 15;
$companies = $services + 25;
$finance_luxury = $companies + 5;
$novelty_luxury = $finance_luxury + 4;
$sports_leisure = $novelty_luxury + 12;
$home_improvement = $sports_leisure + 6;
$media_entertainment = $home_improvement + 15;
$end_businesses = $media_entertainment + 11;
$comrand = rand($food_staples,$end_businesses);
}
/*
food_staples 11
gastronomy 8
health_beauty 10
clothing_fashion 15
services 19
companies 3
finance_luxury 5
novelty_luxury 9
sports_leisure 6
home_improvement 12
media_entertainment 8
*/
else {
echo "<br>&lt;CATEGORY&gt;peripheral&lt;/CATEGORY&gt;";
$food_staples =1;
$gastronomy = $food_staples + 22;
$health_beauty = $gastronomy + 16;
$clothing_fashion = $health_beauty + 20;
$services = $clothing_fashion + 8;
$companies = $services + 38;
$finance_luxury = $companies + 3;
$novelty_luxury = $finance_luxury + 3;
$sports_leisure = $novelty_luxury + 5;
$home_improvement = $sports_leisure + 6;
$media_entertainment = $home_improvement + 24;
$end_businesses = $media_entertainment + 8;
$comrand = rand($food_staples,$end_businesses);
}
//end commercial categories

//com builder quarters
include("quarters.php");

}
//industrial
elseif ($rgb_cereal =="0,255,255"){
echo "<br>&lt;BUSINESS&gt;industrial&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
if ($rgb_wealth =="0,0,128"){
echo "<br>&lt;WEALTH&gt;dilapidated&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,0,255"){
echo "<br>&lt;WEALTH&gt;impoverished&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,255,255"){
echo "<br>&lt;WEALTH&gt;mediocre&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,0,0"){
echo "<br>&lt;WEALTH&gt;upscale&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,128,0"){
echo "<br>&lt;WEALTH&gt;rich&lt;/WEALTH&gt;";
}
else {
echo "<br>&lt;WEALTH&gt;opulent&lt;/WEALTH&gt;";
}
$randcat = rand(1,10);
if ($randcat ==1 || $randcat ==2){
echo "<br>&lt;CATEGORY&gt;food&lt;/CATEGORY&gt;";
$randbuild = rand(1,7);
if ($randbuild ==1){
echo "<br>&lt;BUILD&gt;abatoir&lt;/BUILD&gt;";}
elseif ($randbuild ==2 || $randbuild ==3){
echo "<br>&lt;BUILD&gt;cannery&lt;/BUILD&gt;";}
elseif ($randbuild ==4 || $randbuild ==5){
echo "<br>&lt;BUILD&gt;food processors&lt;/BUILD&gt;";}
elseif ($randbuild ==6){
echo "<br>&lt;BUILD&gt;ice house&lt;/BUILD&gt;";}
else {
echo "<br>&lt;BUILD&gt;milk yard&lt;/BUILD&gt;";}
}
elseif ($randcat ==3 || $randcat ==4){
echo "<br>&lt;CATEGORY&gt;textile&lt;/CATEGORY&gt;";
$randbuild = rand(1,7);
if ($randbuild ==1){
echo "<br>&lt;BUILD&gt;furriers&lt;/BUILD&gt;";}
elseif ($randbuild ==2){
echo "<br>&lt;BUILD&gt;leather curers&lt;/BUILD&gt;";}
elseif ($randbuild ==3){
echo "<br>&lt;BUILD&gt;tanners&lt;/BUILD&gt;";}
elseif ($randbuild ==4 || $randbuild ==5){
echo "<br>&lt;BUILD&gt;textiles&lt;/BUILD&gt;";}
else {
echo "<br>&lt;BUILD&gt;weavers&lt;/BUILD&gt;";}
}
elseif ($randcat ==5 || $randcat ==6){
echo "<br>&lt;CATEGORY&gt;construction&lt;/CATEGORY&gt;";
$randbuild = rand(1,8);
if ($randbuild ==1){
echo "<br>&lt;BUILD&gt;builders&lt;/BUILD&gt;";}
elseif ($randbuild ==2){
echo "<br>&lt;BUILD&gt;cement factory&lt;/BUILD&gt;";}
elseif ($randbuild ==3){
echo "<br>&lt;BUILD&gt;engineers&lt;/BUILD&gt;";}
elseif ($randbuild ==4){
echo "<br>&lt;BUILD&gt;excavators&lt;/BUILD&gt;";}
elseif ($randbuild ==5){
echo "<br>&lt;BUILD&gt;glaziers&lt;/BUILD&gt;";}
elseif ($randbuild ==6){
echo "<br>&lt;BUILD&gt;joiners&lt;/BUILD&gt;";}
elseif ($randbuild ==7){
echo "<br>&lt;BUILD&gt;lumber yard&lt;/BUILD&gt;";}
else {
echo "<br>&lt;BUILD&gt;stone masons&lt;/BUILD&gt;";}
}
elseif ($randcat ==7){
echo "<br>&lt;CATEGORY&gt;iron&lt;/CATEGORY&gt;";
$randbuild = rand(1,4);
if ($randbuild ==1){
echo "<br>&lt;BUILD&gt;iron mongers&lt;/BUILD&gt;";}
elseif ($randbuild ==2){
echo "<br>&lt;BUILD&gt;sheet workers&lt;/BUILD&gt;";}
else {
echo "<br>&lt;BUILD&gt;steel mill&lt;/BUILD&gt;";}
}
elseif ($randcat ==8 || $randcat ==9) {
echo "<br>&lt;CATEGORY&gt;common&lt;/CATEGORY&gt;";
$randbuild = rand(1,7);
if ($randbuild ==1){
echo "<br>&lt;BUILD&gt;ceramics&lt;/BUILD&gt;";}
elseif ($randbuild ==2){
echo "<br>&lt;BUILD&gt;chandler&lt;/BUILD&gt;";}
elseif ($randbuild ==3){
echo "<br>&lt;BUILD&gt;fabricators&lt;/BUILD&gt;";}
elseif ($randbuild ==4){
echo "<br>&lt;BUILD&gt;factory&lt;/BUILD&gt;";}
elseif ($randbuild ==5){
echo "<br>&lt;BUILD&gt;packaging plant&lt;/BUILD&gt;";}
elseif ($randbuild ==6){
echo "<br>&lt;BUILD&gt;paper mill&lt;/BUILD&gt;";}
else {
echo "<br>&lt;BUILD&gt;wheelwrights&lt;/BUILD&gt;";}
}
else {
echo "<br>&lt;CATEGORY&gt;freight&lt;/CATEGORY&gt;";
echo "<br>&lt;BUILD&gt;freight forwarding&lt;/BUILD&gt;";
echo "<br>&lt;FRONT&gt;teamsters&lt;/FRONT&gt;";
}
include("ethnic.php");
}
//large business
elseif ($rgb_cereal =="255,128,0"){
echo "<br>&lt;BUSINESS&gt;bank&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
if ($rgb_wealth =="0,0,128"){
echo "<br>&lt;WEALTH&gt;dilapidated&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,0,255"){
echo "<br>&lt;WEALTH&gt;impoverished&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,255,255"){
echo "<br>&lt;WEALTH&gt;mediocre&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,0,0"){
echo "<br>&lt;WEALTH&gt;upscale&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,128,0"){
echo "<br>&lt;WEALTH&gt;rich&lt;/WEALTH&gt;";
}
else {
echo "<br>&lt;WEALTH&gt;opulent&lt;/WEALTH&gt;";
}
echo "<br>&lt;CATEGORY&gt;normal&lt;/CATEGORY&gt;";
echo "<br>&lt;FRONT&gt;casino&lt;/FRONT&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="255,0,255"){
echo "<br>&lt;BUSINESS&gt;hotel&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
if ($rgb_wealth =="0,0,128"){
echo "<br>&lt;WEALTH&gt;dilapidated&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,0,255"){
echo "<br>&lt;WEALTH&gt;impoverished&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,255,255"){
echo "<br>&lt;WEALTH&gt;mediocre&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,0,0"){
echo "<br>&lt;WEALTH&gt;upscale&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,128,0"){
echo "<br>&lt;WEALTH&gt;rich&lt;/WEALTH&gt;";
}
else {
echo "<br>&lt;WEALTH&gt;opulent&lt;/WEALTH&gt;";
}
echo "<br>&lt;CATEGORY&gt;normal&lt;/CATEGORY&gt;";
echo "<br>&lt;FRONT&gt;whorehouse&lt;/FRONT&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="255,255,0"){
echo "<br>&lt;BUSINESS&gt;department store&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
if ($rgb_wealth =="0,0,128"){
echo "<br>&lt;WEALTH&gt;dilapidated&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,0,255"){
echo "<br>&lt;WEALTH&gt;impoverished&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,255,255"){
echo "<br>&lt;WEALTH&gt;mediocre&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,0,0"){
echo "<br>&lt;WEALTH&gt;upscale&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,128,0"){
echo "<br>&lt;WEALTH&gt;rich&lt;/WEALTH&gt;";
}
else {
echo "<br>&lt;WEALTH&gt;opulent&lt;/WEALTH&gt;";
}
echo "<br>&lt;CATEGORY&gt;normal&lt;/CATEGORY&gt;";
echo "<br>&lt;FRONT&gt;casino&lt;/FRONT&gt;";
include("ethnic.php");
}
//media
elseif ($rgb_cereal =="128,128,128"){
echo "<br>&lt;BUSINESS&gt;newspaper&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
if ($rgb_wealth =="0,0,128"){
echo "<br>&lt;WEALTH&gt;dilapidated&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,0,255"){
echo "<br>&lt;WEALTH&gt;impoverished&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,255,255"){
echo "<br>&lt;WEALTH&gt;mediocre&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,0,0"){
echo "<br>&lt;WEALTH&gt;upscale&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,128,0"){
echo "<br>&lt;WEALTH&gt;rich&lt;/WEALTH&gt;";
}
else {
echo "<br>&lt;WEALTH&gt;opulent&lt;/WEALTH&gt;";
}
echo "<br>&lt;CATEGORY&gt;normal&lt;/CATEGORY&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="128,128,64"){
echo "<br>&lt;BUSINESS&gt;radio&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
echo "<br>&lt;WEALTH&gt;medium&lt;/WEALTH&gt;";
echo "<br>&lt;CATEGORY&gt;normal&lt;/CATEGORY&gt;";
include("ethnic.php");
}
//warehouses
elseif ($rgb_cereal =="128,64,0"){
echo "<br>&lt;BUSINESS&gt;warehouse&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
if ($rgb_wealth =="0,0,128"){
echo "<br>&lt;WEALTH&gt;dilapidated&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,0,255"){
echo "<br>&lt;WEALTH&gt;impoverished&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,255,255"){
echo "<br>&lt;WEALTH&gt;mediocre&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,0,0"){
echo "<br>&lt;WEALTH&gt;upscale&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,128,0"){
echo "<br>&lt;WEALTH&gt;rich&lt;/WEALTH&gt;";
}
else {
echo "<br>&lt;WEALTH&gt;opulent&lt;/WEALTH&gt;";
}
echo "<br>&lt;CATEGORY&gt;normal&lt;/CATEGORY&gt;";
echo "<br>&lt;FRONT&gt;warehouse&lt;/FRONT&gt;";
include("ethnic.php");
}
//municipal
elseif ($rgb_cereal =="0,0,255"){
echo "<br>&lt;BUSINESS&gt;police&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="0,0,128"){
echo "<br>&lt;BUSINESS&gt;FBI&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="128,0,128"){
echo "<br>&lt;BUSINESS&gt;court&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="255,0,128"){
echo "<br>&lt;BUSINESS&gt;city hall&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="0,0,64"){
echo "<br>&lt;BUSINESS&gt;jail&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="0,128,0"){
echo "<br>&lt;BUSINESS&gt;church&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
echo "<br>&lt;TITEL&gt;noname&lt;/TITEL&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="64,32,0"){
echo "<br>&lt;BUSINESS&gt;railway station&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
echo "<br>&lt;TITEL&gt;noname&lt;/TITEL&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="0,128,255"){
echo "<br>&lt;BUSINESS&gt;post office&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
echo "<br>&lt;TITEL&gt;noname&lt;/TITEL&gt;";
if ($rgb_wealth =="0,0,128"){
echo "<br>&lt;WEALTH&gt;dilapidated&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,0,255"){
echo "<br>&lt;WEALTH&gt;impoverished&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,255,255"){
echo "<br>&lt;WEALTH&gt;mediocre&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,0,0"){
echo "<br>&lt;WEALTH&gt;upscale&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,128,0"){
echo "<br>&lt;WEALTH&gt;rich&lt;/WEALTH&gt;";
}
else {
echo "<br>&lt;WEALTH&gt;opulent&lt;/WEALTH&gt;";
}
echo "<br>&lt;CATEGORY&gt;normal&lt;/CATEGORY&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="128,255,0"){
echo "<br>&lt;BUSINESS&gt;museum&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
echo "<br>&lt;TITEL&gt;noname&lt;/TITEL&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="128,128,0"){
echo "<br>&lt;BUSINESS&gt;movie theatre&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
if ($rgb_wealth =="0,0,128"){
echo "<br>&lt;WEALTH&gt;dilapidated&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,0,255"){
echo "<br>&lt;WEALTH&gt;impoverished&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="0,255,255"){
echo "<br>&lt;WEALTH&gt;mediocre&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,0,0"){
echo "<br>&lt;WEALTH&gt;upscale&lt;/WEALTH&gt;";
}
elseif ($rgb_wealth =="255,128,0"){
echo "<br>&lt;WEALTH&gt;rich&lt;/WEALTH&gt;";
}
else {
echo "<br>&lt;WEALTH&gt;opulent&lt;/WEALTH&gt;";
}
echo "<br>&lt;CATEGORY&gt;normal&lt;/CATEGORY&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="64,0,64"){
echo "<br>&lt;BUSINESS&gt;school&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
echo "<br>&lt;TITEL&gt;noname&lt;/TITEL&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="0,64,64"){
echo "<br>&lt;BUSINESS&gt;hospital&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
echo "<br>&lt;TITEL&gt;noname&lt;/TITEL&gt;";
include("ethnic.php");
}
elseif ($rgb_cereal =="64,0,0"){
echo "<br>&lt;BUSINESS&gt;fire department&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
include("ethnic.php");
}
else {
echo "<br>&lt;BUSINESS&gt;municipal&lt;/BUSINESS&gt;";
echo "<br>&lt;ID&gt;".$idview."&lt;/ID&gt;";
echo "<br>&lt;TITEL&gt;noname&lt;/TITEL&gt;";
include("ethnic.php");
}


//end grid
echo "<br>&lt;XCO&gt;".$xview."&lt;/XCO&gt;";
echo "<br>&lt;YCO&gt;".$yview."&lt;/YCO&gt;";
echo "<br>&lt;/GRID&gt;";
$id++;
}


/*
//charity
echo "<GRID>";
echo "<BUSINESS>orphanage</BUSINESS>";
echo "</GRID>";

echo "<GRID>";
echo "<BUSINESS>church</BUSINESS>";
echo "<TITEL>church</TITEL>";
echo "</GRID>";

echo "<GRID>";
echo "<BUSINESS>synagogue</BUSINESS>";
echo "</GRID>";

//utilities
echo "<GRID>";
echo "<BUSINESS>railway_station</BUSINESS>";
echo "</GRID>";

post office
telegraph office
stock exchange
labor exchange

museum
theatre
orchestra hall
opera hall
library
public bath

movie theatre

school

hospital

*/


?>
