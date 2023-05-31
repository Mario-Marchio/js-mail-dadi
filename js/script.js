console.log(`JS OK`);

const email =[ `carlo@gmail.com`, `chiara@gmail.com`, `paolo@gmail.com`, `mario@gmail.com` ];
console.log(email);

const userEmail = prompt(`inserisci la tua email`, `mario@gmail.com`)
console.log(userEmail);
for( i = 0 ; i = email.length ; i++){
    if(userEmail===email[i]){
        allert(`benvenuto`)
    }else {
        console.log(`non puoi accedere`);
    }
}
