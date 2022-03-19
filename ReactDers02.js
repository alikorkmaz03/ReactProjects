//Template Literals

const firstName ="ALi";
const lastName ="KORKMAZ";

function concatenateStrings(firstString,lastString)
{
    return `${firstString}.... ${lastString}`;
}

console.log("Hoşgeldin"+" "+ firstName +" "+ lastName);

console.log(`HoşGeldin ${firstName} ${lastName}`); // >Template Literals

console.log(`HoşGeldin ..... ${concatenateStrings(firstName,lastName)}`);