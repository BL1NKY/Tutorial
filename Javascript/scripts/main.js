/*function go(name, age){
  if (age <= 20){
    return name + '!';
  } else {
    return name;
  }
}

//alert go('Tobias', 18)

function maths (a, b) {
  var e = a*b;
  var f = a/b;
  var g = a+b;
  var h = a-b;
  return ('Ergebnisse: Multiplikation: ' + e + ' Division: ' + f + ' Addition: ' + g + ' Subtraktion: ' + h);
}

//alert ( maths(4, 34));*/

var myList = ['Äpfel', 'Bananen', 'Bananen', 'Birnen'];

/*myList.forEach(function(value, index){
  console.log(value, index);
});*/
/*var times = 0;
while (times != 0){
  console.log('tried it ' + times);
  times++;
}
do {console.log('tried it ' + times);
times++;
} while (times != 0)*/

for(var a = 0; a<myList.length; a++){
  console.log(myList[a]);
}
