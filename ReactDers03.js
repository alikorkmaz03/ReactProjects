/*Arrow Function */

function logMyError (errorMesage)
{
    console.error(errorMesage);
}

logMyError("Bir Hata Oluştu :(");

/*Arrow Functions */
const logMyErrorNewVersion=(errorMesage) => console.error(errorMesage)

logMyErrorNewVersion("Bir Hata Oluştu :( Arrow Functions Used");
/*Arrow Functions */


/*Arrow Functions */
const sumUp=(num1,num2)=> num1+num2;

console.log(sumUp(5,6));

/*Arrow Functions */

const person ={
    firstName : "Nurdan",
    lastName  : "Korkmaz",
    sayMyName : function(){
        console.log(this.firstName+ " " +this.lastName);
    },
    /*Html Üzerinde Window Objesinde Kullancağız.*/
    sayMyNameArrow:()=>{
        console.log(this);
    }

}
person.sayMyName();
person.sayMyNameArrow();

