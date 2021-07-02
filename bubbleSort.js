
var bubble = [5,6,8,7,1,2,4,3];
var aux;
var contador;

do {
    contador = 0;
    for(var i=0; i<bubble.length ; i++){
        if ( bubble[i]>bubble[i+1]){
            aux = bubble [i];
            bubble [i] = bubble [i+1];
            bubble [i+1] = aux;
            contador = 1;
        }
    }
}while (contador === 1);

console.log(bubble)