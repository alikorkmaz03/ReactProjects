//Ternary Oparator




///normal yazım
const age =19 ;
let canHaveIt=false;
let canHaveItText="";

if(age>=18)
{
    canHaveIt=true;
}
else{
    canHaveIt=false;
}


console.log(`Kullanıcı ehliyet alabilir mi ? ${canHaveIt}`);

//Ternary Oparator Kullanımı

canHaveIt= age>=18 ? true : false ;

canHaveIt=age>=18 ? "Ehliyet Alabilir" : "Ehliyetalamaz";