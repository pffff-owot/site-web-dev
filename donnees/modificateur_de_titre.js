let section_du_site
function modifier_le_titre (section_du_site){

    let titre="Le métier de développeur";

    if(titre=="Le métier de développeur"){
        titre=section_du_site;
    }
    else{
        titre="Le métier de développeur"
    }
    document.getElementById("titre").innerHTML=titre;
}

setInterval(modifier_le_titre, 3500);

//Ce script NE fonctionne PAS encore.