function ligue1(nom, attaque, milieu, defense, gardien) {
    this.nom = nom;
    this.attaque = attaque;
    this.milieu = milieu;
    this.defense = defense;
    this.gardien = gardien;
};

var teams = [];
teams.push(amiens = new ligue1("Amiens", 52, 36, 47, 45));
teams.push(angers = new ligue1("Angers", 42, 40, 47, 43));
teams.push(bordeaux = new ligue1("Bordeaux", 61, 66, 56, 61));
teams.push(caen = new ligue1("Caen", 36, 49, 32, 39));
teams.push(dijon = new ligue1("Dijon", 50, 46, 51, 49));
teams.push(guingamp = new ligue1("Guingamp", 52, 41, 48, 47));
teams.push(lille = new ligue1("Lille", 44, 36, 31, 37));
teams.push(lyon = new ligue1("Lyon", 67, 66, 77, 70));
teams.push(marseille = new ligue1("Marseille", 75, 66, 57, 66));
teams.push(monaco = new ligue1("Monaco", 70, 80, 72, 74));
teams.push(montpellier = new ligue1("Montpellier", 43, 49, 61, 51));
teams.push(nantes = new ligue1("Nantes", 48, 63, 48, 53));
teams.push(nice = new ligue1("Nice", 51, 52, 62, 55));
teams.push(nimes = new ligue1("Nimes", 24, 33, 36, 31));
teams.push(parissg = new ligue1("Paris SG", 85, 73, 79, 79));
teams.push(reims = new ligue1("Reims", 38, 25, 36, 33));
teams.push(rennes = new ligue1("Rennes", 62, 54, 73, 63));
teams.push(saintetienne = new ligue1("Saint-Etienne", 54, 63, 54, 57));
teams.push(strasbourg = new ligue1("Strasbourg", 40, 47, 36, 41));
teams.push(toulouse = new ligue1("Toulouse", 33, 42, 30 , 35));

function choix() {
    var equipe1 = document.getElementById('dom').value;
    var equipe2 = document.getElementById('ext').value;
    for (var i = 0; i < teams.length; i++) {
        if (equipe1 == teams[i].nom) {
            var attaque1 = teams[i].attaque + 5;
            var milieu1 = teams[i].milieu + 5;
            var defense1 = teams[i].defense + 5;
            var gardien1 = teams[i].gardien + 5;
        }
    }
    for (var i = 0; i < teams.length; i++) {
        if (equipe2 == teams[i].nom) {
            var attaque2 = teams[i].attaque - 5;
            var milieu2 = teams[i].milieu - 5;
            var defense2 = teams[i].defense - 5;
            var gardien2 = teams[i].gardien - 5;
        }
    }
    var but1 = 0;
    var but2 = 0;
    var tir1 = 0;
    var tir2 = 0;
    var possession1 = 0;
    var possession2 = 0;
    console.log(equipe1);
    console.log(attaque1);
    console.log(milieu1);
    console.log(defense1);
    console.log(gardien1);
    console.log(equipe2);
    console.log(attaque2);
    console.log(milieu2);
    console.log(defense2);
    console.log(gardien2);




    match();
    function match() {
        document.getElementById('minuteBut').innerHTML = "";
        document.getElementById("score1").innerHTML = 0;
        document.getElementById("score2").innerHTML = 0;
        document.getElementById('minute1').innerHTML = "";
        document.getElementById('minute2').innerHTML = "";
        document.getElementById("tirs1").innerHTML = 0;
        document.getElementById("tirs2").innerHTML = 0;
        document.getElementById("possessionResult1").innerHTML = 0;
        document.getElementById("possessionResult2").innerHTML = 0;
        var jeu = 1;
        var intervalId = setInterval(function () {
            var nombreMilieu = Math.floor(Math.random() * (milieu1 + milieu2)) + 1;
            if (nombreMilieu <= milieu1) {
                possession1++;
                var nombreAttaque1 = Math.floor(Math.random() * (attaque1 + defense2) * 3.1) + 1;
                if (nombreAttaque1 <= attaque1) {
                    tir1++;
                    document.getElementById("tirs1").innerHTML = tir1;
                    var nombreTir1 = Math.floor(Math.random() * (300)) + 1;
                    if (nombreTir1 < 50) {
                        console.log(jeu + "eme : But pour " + equipe1);
                        but1++;
                        document.getElementById('minuteBut').innerHTML = (jeu + "eme : But pour " + equipe1 + "<br>");
                        document.getElementById("minute1").innerHTML += jeu + "'" + "<br>";
                        document.getElementById("score1").innerHTML = but1;
                    }
                }
            }
            else {
                possession2++;
                var nombreAttaque2 = Math.floor(Math.random() * (attaque2 + defense1) * 3.1) + 1;
                if (nombreAttaque2 <= attaque2) {
                    tir2++;
                    document.getElementById("tirs2").innerHTML = tir2;
                    var nombreTir2 = Math.floor(Math.random() * (300)) + 1;
                    if (nombreTir2 < (50)) {
                        console.log(jeu + "eme : But pour " + equipe2);
                        but2++;
                        document.getElementById('minuteBut').innerHTML = (jeu + "eme : But pour " + equipe2 + "<br>");
                        document.getElementById("minute2").innerHTML += jeu + "'" + "<br>";
                        document.getElementById("score2").innerHTML = but2;
                    }
                }
            }
            document.getElementById('temps').innerHTML = jeu;
            document.getElementById("possessionResult1").innerHTML = ((possession1 / jeu) * 100).toFixed(0) + "% ";
            document.getElementById("possessionResult2").innerHTML = ((possession2 / jeu) * 100).toFixed(0) + "%";

            if (jeu === 93) {
                clearInterval(intervalId);
                console.log("Score final : " + equipe1 + " - " + equipe2 + " : " + " " + but1 + " - " + but2);
                document.getElementById('minuteBut').innerHTML = ("<h1>" + equipe1 + " - " + equipe2 + " : " + " " + but1 + " - " + but2 + "</h1>");
            }
            jeu++;
        }, 100);
    }
}




function reset() {
    document.getElementById('temps').innerHTML = "";
    document.getElementById('minuteBut').innerHTML = "";
    document.getElementById('dom').value = "";
    document.getElementById('ext').value = "";
    document.getElementById('rowscore') = "";
    document.getElementById('score1') = 0;
    document.getElementById('score2') = 0;
}


$(document).ready(function () {
    $("#selectionDom").selectable({
        stop: function () {
            var result = $("#select-result").empty();
            $(".ui-selected", this).each(function () {
                result.append($(this).text());
                var affich = RemoveAccents($(this).text());
                $("#dom").val(affich);
            });
        }
    });
    $("#selectionExt").selectable({
        stop: function () {
            var result = $("#select-result").empty();
            $(".ui-selected", this).each(function () {
                result.append($(this).text());
                var affich = RemoveAccents($(this).text());
                $("#ext").val(affich);


            });
        }
    });
})

$( function() {
    $( "#accordion" ).accordion();
  } );


function RemoveAccents(strAccents) {
    var strAccents = strAccents.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    for (var y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        } else
            strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');
    return strAccentsOut;
}

var ajaxhttp = new XMLHttpRequest();
//console.log(ajaxhttp);
var url = "jeu.json";
ajaxhttp.open("GET", url, true);
//console.log(ajaxhttp);
ajaxhttp.setRequestHeader("content-type", "application/json");
ajaxhttp.onreadystatechange = function () {
  if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
    console.log(ajaxhttp)
    var content = JSON.parse(ajaxhttp.responseText);
    console.log(content);
    var team1 = document.querySelector("#team1");
    //output.innerHTML = content.joueurs[0].firstName + " " + content.joueurs[0].lastName;
    for (var i = 0; i < 11; i++){
      team1.innerHTML += content.joueurs[i].position + " - " +content.joueurs[i].firstName + " " + content.joueurs[i].lastName+ "<br>";
      console.log(content.joueurs[i].firstName + " " + content.joueurs[i].lastName); 
    } 
  }
}
ajaxhttp.send(null);


