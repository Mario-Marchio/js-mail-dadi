console.log(`JS OK`);

const email =[ `carlo@gmail.com`, `chiara@gmail.com`, `paolo@gmail.com`, `mario@gmail.com` ];
console.log(email);

const userEmail = prompt(`inserisci la tua email`, `mario@gmail.com`)
console.log(userEmail);
for( i = 0 ; i < email.length ; i++){
    if(userEmail===email[i]){
        console.log(`benvenuto`)
    }else {
        console.log(`non puoi accedere`);
    }
}


let dado1 = 0 ;

let dado2 = 0 ;

dado1 = Math.floor(Math.random() * 6) + 1 ;

dado2 = Math.floor(Math.random() * 6) + 1 ;

console.log(dado1);

console.log(dado2);

if( dado1 > dado2 ){
    console.log(`ha vinto l'utente`);
}else if (dado2 > dado1){
    console.log(`ha vinto il computer`);
}else{
    console.log(`pareggio`);
}
