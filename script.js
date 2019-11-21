//User's number choice
var user;
//Number of tries
var essais = 10;
//Random Number
var random;
var play;
var dejaVu;
var gameover;

//Function for the generation of random numbers
function hasard (){
    random = Math.floor(Math.random() * (101 - 1)) + 1;
}
//Function for remove "alert" window
function remove() {
    document.getElementById("resultat").style.display = "none";
}

hasard();
document.getElementById('resultat').classList.add('animate');
document.getElementById("affi").innerHTML = essais;
console.log(random);

document.getElementById("game").addEventListener("click",function () {
    gameover = false;
    user = document.getElementById("choix").value;
    dejaVu = document.getElementById("deja");
    if (user > random && essais > 0){
        document.getElementById("display").innerHTML = "C'est moins comparé à votre proposition";
        essais = essais - 1;
        console.log(essais);
        document.getElementById("affi").innerHTML = essais;
        dejaVu.innerHTML += user + ", ";

    } else if (user < random && essais > 0) {
        document.getElementById("display").innerHTML = "C'est plus comparé à votre proposition";
        essais = essais - 1;
        console.log(essais);
        document.getElementById("affi").innerHTML = essais;
        dejaVu.innerHTML += user + ", ";

    } else if (user == random) {
        document.getElementById("display").innerHTML = "C'est gagné !!!";
        document.getElementById("display").style.backgroundColor = "green";
        document.getElementById("replay").style.display = "inline-block";
    }
    if (essais < 1) {
        document.getElementById("resultat").style.display = "block";
        document.getElementById("contResultat").innerHTML = "C'est perdu !!! Vous pouvez rejouer en utilisant le bouton rejouer";
        document.getElementById("replay").style.display = "inline-block";
        setTimeout(remove,2000)
    }
});

document.getElementById("replay").addEventListener("click",function () {
    document.getElementById("resultat").style.display = "block";
    document.getElementById("contResultat").innerHTML = "Une nouvelle partie va débuter, bonne chance !";
    setTimeout(remove,2000);
    document.getElementById('replay').style.backgroundColor = 'white';
    essais = 10;
    document.getElementById("affi").innerHTML = essais;
    document.getElementById("display").innerHTML = "";
    document.getElementById('display').style.backgroundColor = 'white';
    document.getElementById("choix").value = "";
    document.getElementById("deja").innerHTML = "Vous avez déjà tenté les valeurs suivantes :";
    document.getElementById("replay").style.display = "none";
    hasard();
});