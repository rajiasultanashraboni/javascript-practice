

var strType = "";
console.log(typeof strType)
var numType = 25244121232;
console.log(numType)
var boolType = true;
console.log(boolType)

var rochona = "IN A COMPUTER LANGUAGE, “RESERVED WORDS” ARE ALL THOSE WORDS THAT HAVE A STRICTLY PREDEFINED MEANING—THEY ARE RESERVED FOR SPECIAL USE AND CANNOT BE USED FOR ANY OTHER PURPOSE. FOR EXAMPLE, THE WORDS START , END , READ , AND WRITE IN FLOWCHARTS HAVE A PREDEFINED MEANING."
console.log(rochona . toLowerCase())

var rochona = "in a computer language, “reserved words” are all those words that have a strictly predefined meaning—they are reserved for special use and cannot be used for any other purpose. for example, the words start , end , read , and write in flowcharts have a predefined meaning."

console.log(rochona . toUpperCase())

// split use hoi kono kichu ke vag korte or bad dite

var myFd = "eshan shraboni tasfiyah tasnim"
console.log(myFd . split("shraboni"))

// indexof use hoi kono ekta string or letter koto tomo place e ache

console.log(myFd . indexOf('shraboni'))

var num1 = 55;
var num2 = 99;
var total = num1 + num2
console.log(total)

// convert string to number (use parsefloat) .parsefloat count integer plus decimal

var num1 = "55.774";
var num2 = 99;
num1 = parseFloat(num1);
var total = num1+num2;
console.log(total)
//  number1 er typeof ta jante chacchi

// convert string to number use parseint. But parseint only count purnoshongkha 

var num1 = "55.774";
var num2 = 99;
num1 = parseInt(num1);
var total = num1+num2;
console.log(total)

// convert integer to string

var num3 = 55;
var num4 = 99;
num4 = "" + num4;
var total = num3 + num4;
console .log (total)

// javascript operator

var num5 = 50;
var num6 = 50;
var total = num5 + num6;
console.log(total)

var num5 = 50;
var num6 = 60;
var total = num6 - num5;
console.log(total)

var num5 = 50;
var num6 = 60;
var total = num5 * num6;
console.log(total)

var num5 = 50;
var num6 = 60;
var total = num6 / num5;
console.log(total)


// module ba reminder percentage diye vagshesh nirnoy kore

var num5 = 50;
var num6 = 60;
var total = num6 % num5;
console.log(total)

// Math.abs korle - sign + hoye jai 

var num1 = -20;
var sum = Math.abs(num1);
console.log (sum)

// Math.round holo jodi kono shongkha 0.5 thake/upore thake tahole shetake 1 kore dibe but 0.4 thakle shetake 0 kore dibe

var totalvoter = 10;
var voter = 0.4;
var sum = Math.round(voter);
console.log(sum)

// Math.ceil holo jodi kono shongkha 0.1/0.4 thake/niche thake tahole shetake 1 kore dibe 


var voter = 0.1;
var sum = Math.ceil(voter);
console.log(sum)

// Math.floor holo nicher dike tene namiye dewa jodi 0.99 o take tao floor shetake 0 kore dibe 

var voter = 0.99;
var sum = Math.floor(voter);
console.log(sum)

// Math.random mane ek ek shomoy ek ek answer ashbe 0 and 1 er vitore 

var lotary = Math.random();
console.log(lotary)

// chaile custom vabeo kora jai jodi 100 er vitore dekhte chai tahole

var lotary = Math.random() *100;
console.log(lotary)


// if condition // else condition


var a = 20;
var b = 20;

if( a < b) {
    console.log("b boro");
}

else if( a > b){
    console.log("a boro")
}

else{
    console.log("They both are same");
}

// switch condition
var sum = 10;

switch(sum){
    case 10:
        console.log("i ma very happy");
        break
    case 20:
        console.log("i ma very unhappy")
        break
    case 30:
        console.log("case mittha");
        break
    default:
        console.log("ami tumake khuje pelam na")
        break
}


