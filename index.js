var num = 20;
var now = "5:12 pm 10/16/2017";
var names = ["Daniel", "Abdul", "Ryan", "Nia", "Jordan", "Jackie"];
var teachers = '[{"fName": "Peter", "lName": "Jablonski"}, {"fName": "Marcos", "lName": "LaraReinhold"}, {"fName": "Edwin", "lName": "Fuquen"}, {"fName": "Devraj", "lName": "Mehta"}, {"fName": "Joe", "lName": "Tessler"}]';
var b = JSON.parse( teachers );

function print(a, b){
    document.getElementById(a).innerHTML += b;
}

b.forEach(function(a){
   
   print("teachers", '<li onclick=run("' + a.lName + '")>' + a.fName + '</li>');
    
});

function run(i){
    alert(i);
}

for(var i = 0; i < names.length; i++){
    print("names", "<li>" + names[i] + "</li>");
    console.log(names[i]);
}

function log(x){
    console.log(x);
}

log("Hello World!");

function readInt(min, max){
    return Math.random() (min - max) + min;
}

function numberWords(x){
    var a;
    
    switch(x){
        case 1:
            a = "one";
            break;
        case 2:
            a = "two";
            break;
        default:
            a = "";
    }
    
    console.log(a);
}