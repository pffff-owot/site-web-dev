function ModifierLeTitre(){
    let titre=prompt("Quel nom portera la page ?")
    if(titre !=     ""){
        alert("Le nom sera réinitialisé après un rechargement de la page.")
        document.getElementById("titre").innerHTML = titre
        console.log("Le titre de la page a bien été changé en " + titre + ".")
        document.getElementById("RTLT").innerHTML = "<br>Rétablir le titre."
    }
/*    let blabla = 0
    let textblabla = titre

    const timer = () => {
    document.getElementById("titre").innerHTML = textblabla
    if(blabla == 0 ){
        textblabla = titre + "&nbsp;|"
        blabla = 1
    }
    else{
        textblabla = titre
        blabla = 0
    }
    }
    
    setInterval(timer, 500)

    }
    else{
        alert("Merci d'entrer un nom.")
    }*/
}
function RLT(){
    document.getElementById("titre").innerHTML = "Page cachée : &quot;jeux&quot;"
    console.log("titre de la page rétabli.")
    alert("Titre de la page rétabli.")
    document.getElementById("RTLT").innerHTML = ""
}
function changerlimage(){
    cheminverslimage = document.getElementById("param_img").innerHTML
    if(cheminverslimage=='<img src="data/Favicons/gif-manette.gif" onclick="changerlimage()" title="Appuies sur moi !">'){
        document.getElementById("param_img").innerHTML = '<img src="data/Favicons/favicon.png" onclick="changerlimage()" title="Et essaies de rappuyer !">'
        document.getElementById("head").innerHTML = '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title id="titre">Page cachée : "jeux"</title><link rel="stylesheet" href="style.css"><link rel="icon" href="data/favicons/favicon.png "type="image/png"><script src="Jeux.js"></script>'
    }
    else {
        document.getElementById("param_img").innerHTML = '<img src="data/Favicons/gif-manette.gif" onclick="changerlimage()" title="Appuies sur moi !">'
        document.getElementById("head").innerHTML = '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title id="titre">Page cachée : "jeux"</title><link rel="stylesheet" href="style.css"><link rel="icon" href="data/favicons/gif-manette.gif "type="image/gif"><script src="Jeux.js"></script>'
    }
}
function the_new(){
    TextDeBase = document.getElementById("body").innerHTML
    let les_news = '<nav class="text" ><h1 class="tit"><span class="hover-3">Nouvautés de la page jeux.html :</span></h1><br><br><p class="explication-2"><span class="surl">==&gt;Création du &quot;jeu du gif&quot;</span><br><span class="surl" title="Il y a aussi eu une correction de faute de frape ici : &quot;&nbsp;==>Création&nbsp;de&nbsp;cette&nbsp;pertie&nbsp;de&nbsp;la&nbsp;page&nbsp;&quot;">==&gt;Création de cette partie de la page</span><br><br><span>Les prochaines mises &agrave; jour de la page &quot; jeux.html &quot, appara&icirc;tront ici ...<br><br><br><span class="link hover-4" onclick="retour()" ondblclick="retour" oncontextmenu="ctxmnuretour()" title="essaies de faire un clic droit.">&lt;==&nbsp;Retour<span></p>'
    //dans la variable précédante, nous avons définit ce par quoi allait être remplacé l'élément body du html.
    document.getElementById("body").innerHTML = les_news
    console.log("Nouvautés affichés.")
}
function retour(){
    document.getElementById("body").innerHTML = TextDeBase
    console.log("Nouvautés masqués.")
}
function ctxmnuretour(){
    alert("hihi...AHHHHHHHHHHH")
    retour()
    alert("THOUM !")
    alert("THOUM !THOUM")
    alert("THOUM !THOUM        ET RE...              THOUUUUUUUUUUUUUUUUUUUUUUUUM !")
    console.log("...avec un clique droit.")
}