
var media;
var notas = [10,10,5]
var x = 0;

for( var i=0; i<notas.length ; i++){ 
    x = notas[i] + x;
}

media = x/notas.length;
console.log("Média: " + media);
