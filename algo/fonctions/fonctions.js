"use strict";


// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.

function f1 (){
    console.log(17);
}



// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();


// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
function f2 () {
    return 18;
}

// Utiliser la fonction f2 pour afficher 18 dans la console.
console.log(f2());            // ecrire dans la console : le resultat de f2
17+1

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
//contrairement a la function 1 qui affiche un chiffre , la fonction 2 return un resultat, variable ?


// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.

function f3(n) {
    console.log(2*n);
}
// Utiliser la fonction f3 pour écrire dans la console le double de 97.
f3(97);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.

function f4(n) {
return (2*n) ;
}
// Utiliser la fonction f4 pour écrire dans la console le double de 98.
console.log(f4(98));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a= f4(99);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(m,n) {
    console.log(m+n);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 40 et 75.

f5(40,75);


// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(i,j) {
return (i+j);
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 41 et 76.
console.log (f6(41,76))
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a+= f6(42,77);
// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(k,l) { 
if (k<l) {
    return l;
} else { 
    return k;
}
}

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(n1,n2,n3){
    if(n1>n2){
        if(n1>n3){
            return n1;
        }else{
            return n3;
        }

    }else if(n2>n3){
        return n2;

    }else{
        return n3
    }
}

function f8bis(n1,n2,n3){
    return f7(f7(n1,n2),n3);
}

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.

//function f9(n, nom) {
 //for (let a=0 ; a<n ; a++) {
   // console.log(nom);
 //}
//}
//f9(3,"jerome");
//console.log(a);

//Écrire une fonction récursive "allWords" qui prend en entrée un nombre n et retourne un tableau de toutes les chaînes de caractères de taille n composées uniquement de A ou B.
//Exemple :
//`allWords(3)` retourne `["AAA","AAB","ABA","ABB","BAA","BAB","BBA","BBB"]` (pas forcément dans cet ordre)

//function allwords (n) {
 //for(let A = 1 ; A < n ; A++) {
   // for(let B = 1 ; B < n ; B++) {
     //   for (B=A; B<A ; B++) {
       // console.log( A, B);
    