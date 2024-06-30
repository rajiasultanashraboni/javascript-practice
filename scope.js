// javascript has 3 types of scope

/*block scope 
function scope
global scope*/


var FdName = "shraboni"; //ei jinish ta amra jekono jaiga theke access nite parbo..etake bole global scope

console.log(FdName);



function me(){
    console.log(FdName);

}
me()



// kono ekta function er vitor jodi variable declare kora hoi tahole shetake bole function scope ba local scope

function he(){
    var num = "ami 99"
    console.log(num);

}
he()