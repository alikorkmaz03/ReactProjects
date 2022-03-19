
function GetAllData()
{
var firstName ="ALi";
console.log(firstName);

var firstName ="NURDAN";
console.log(firstName);

var firstName =("ALPER");
console.log(firstName);

firstName=28;
if (firstName== 28){
    var message ="Doğru Cevap";
}
console.log(message);

}

GetAllData();
/***************Let ve Const Dersi*****************/
//NOT
/*let değişkeni ile değeri birkez kullanabiliriz ancak diğer örnekte 
var kullandığımız için iki değerde yazılıyor*/
let firstName="Güllü";
console.log(firstName);

firstName=false;
console.log(firstName);

/*const özellikleri */
const age  =28;
// javascriipte constant olarak tanımlanan dizi veye değişkeni tekrar atayamayız  age=27;

const person = {
firstanme  : "Mehmet",
Lastname   : "KORKMAZ"

}
console.log(person);

person.firstanme ="Armani";
console.log(person);

const persons =["ALi","Veli","Poyraz"];

console.log(persons);

persons.push("Nuri");

console.log(persons);








