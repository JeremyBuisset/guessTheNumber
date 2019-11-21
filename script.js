//User's number choice
var user;
//Number of tries
var essais = 10;
//Random Number
var random;
var play;
var gameover;
var dejaVu;

//Function for the generation of random numbers
function hasard (){
    random = Math.floor(Math.random() * (101 - 1)) + 1;
}
//Function for remove "alert" window
function display() {
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
        document.getElementById("display").innerHTML = "Votre chiffre est superieur au nombre généré";
        essais = essais - 1;
        console.log(essais);
        document.getElementById("affi").innerHTML = essais;
        dejaVu.innerHTML += user + ", ";

    } else if (user < random && essais > 0) {
        document.getElementById("display").innerHTML = "Votre chiffre est inférieur au nombre généré";
        essais = essais - 1;
        console.log(essais);
        document.getElementById("affi").innerHTML = essais;
        dejaVu.innerHTML += user + ", ";

    } else if (user == random) {
        document.getElementById("display").innerHTML = "C'est gagné !!!";
        document.getElementById("display").style.backgroundColor = "green";
        gameover = true;
    }
    if (essais < 1) {
        document.getElementById("resultat").style.display = "block";
        document.getElementById("contResultat").innerHTML = "C'est perdu !!! Vous pouvez rejouer en utilisant le bouton rejouer";
        gameover = true;
        document.getElementById('replay').style.backgroundColor = 'cornflowerblue';
    }
});

document.getElementById("replay").addEventListener("click",function () {
    if (gameover == true){
        document.getElementById("resultat").style.display = "block";
        document.getElementById("contResultat").innerHTML = "Une nouvelle partie va débuter, bonne chance !";
        document.getElementById("resultat").addEventListener("click", function () {
            document.getElementById("resultat").style.display = "none";
            document.getElementById('replay').style.backgroundColor = 'white';
            essais = 10;
            document.getElementById("affi").innerHTML = essais;
            document.getElementById("display").innerHTML = "";
            document.getElementById('display').style.backgroundColor = 'white';
            document.getElementById("choix").value = "";
            document.getElementById("deja").innerHTML = "Vous avez déjà tenté les valeurs suivantes :";
            hasard();
            gameover = false;
        })
    } else {
        document.getElementById("resultat").style.display = "block";
        document.getElementById("contResultat").innerHTML = "Vous devez avoir terminé une partie pour pouvoir rejouer";
        setTimeout(display,2000);
    }

});


