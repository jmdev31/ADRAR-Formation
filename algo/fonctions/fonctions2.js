/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
function syracuse (n) {
    if (n%2==0 ) { // Inversion : là tu as écrit "si n est pair". Il faudrait soit inverser les deux return, soit inverser la condition : "n%2 == 1".
        return ((3*n)+1);
    } else {
        return  n/2;
    }

}

syracuse (3);






/*
Écrire une fonction countDown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countDown(3)` devra afficher
3
2
1
0
*/
function countDown(n){
    if(n>0){
        for(let i=n; i>=0; i--){
            console.log(i);
        }
    }
}
countDown(3);


/*
Écrire une fonction fastCountDown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountDown(3)` devra afficher
3
1.5
0.75
0.375
0.1875 */

function fastCountDown(n){
    for(let i=n; i>=0.1; i = i/2){
        console.log(i);
    }
}

// Ok
// Et la version avec la boucle while
function fastCountDown2(n) {
    let i = n;              // Le "A" de la boucle for. On le fait une fois seulement, au début du for, avant de commencer les tours de boucle.
    while(i >= 0.1) {       // Le "B" de la boucle for. La condition pour savoir si on fait un tour ou si on a fini.
        console.log(i);     // Le "D" de la boucle for. Le corps de la boucle ; ce qu'on veut répéter plusieurs fois.
        i = i/2;            // Le "C" de la boucle for. L'instruction "bonus" qu'on rajoute à la fin d'un tour de boucle, avant de repartir sur la condition.
    }
}

fastCountDown(3);




/*Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12 */

 function evenNumber (n,m) {
    if(n<m) {
    for (i=n ; i<m ; i++) { // Attention : il manque le let à "i = n"
            if (i%2==0) {
                console.log(i);
            }
        }
    }
}
  
evenNumber (2,8);



/*Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction. */


function euclide (a,b) {
    if (b==0){
        return a;
    }else {
        return euclide (b, a%b)
    } 
}

console.log(euclide ( 8,5));



// À la main, calculer `euclide(6,10)`.
