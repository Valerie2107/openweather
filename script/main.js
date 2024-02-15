/*Afficher la liste de tous les pays
et quand on a sélectionné un pays
afficher la capitale du pays, ainsi que sa météo
et une petite icône pour représenter cette météo
http://cepegra-labs.be/webdesign/fed2022/oli/js/openweathermap/
API https://openweathermap.org/current */


let select = document.querySelector("select");
let resultat = document.querySelector(".resultat")
let temperature 
select.addEventListener('change', function (){

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=573c0d77ff7827b04de8ff37ae4f05bc&lang=fr`)
        .then(response => response.json())
        .then(data => {  
            console.log(data);

            
            // THE VALLEY
            // La situation météo à The Valley est : peu nuageux
            // 🌡️ La température actuelle est de 26 degrés
            // 💧 Le taux d'humidité est de 89%
            // une icone pour dire comment il fait 


            resultat.innerHTML += `
            <h1>${data.name}</h1>
            <p>La situation météo à ${data.name} est: ${data.weather[0].description
            }</p>
            <p>🌡️ La température actuelle est de ${((data.main.temp -32) / 9.5).toFixed(1)} °C</p>
            <p>💧 Le taux d'humidité est de ${data.main.humidity
            }%</p>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="icon">
            `
        })
        .catch(error => {console.log("Erreur lors de la récup des données :", error);
        })


})