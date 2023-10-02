
function beoordeelCijfer() 
{
//Haal de waarde uit het invoer element.

const cijfer = document.getElementById("cijferInvoer").value;

//converteer de invoer naar een getal
const mijncijfer = parseInt(cijfer);

const Element = document.querySelector("#resultaat")
const cijferElement = document.createElement("p")

if ( !isNaN(mijncijfer) && mijncijfer >= 0 && mijncijfer <= 11) 
{
    if (mijncijfer >= 8 ) 
    {
        
        cijferElement.innerText = "Uitstekend! Je hebt een geweldig cijfer behaald."
    }
    
    else if (mijncijfer >= 6) 
    {
        cijferElement.innerText = "Goed gedaan! Je hebt een voldoende.";
    }

    else
    {
    cijferElement.innerText = "Helaas, de volgende keer beter.";
    }

} 

else 
{
    cijferElement.innerText = "Ongeldig cijfer. Voer een cijfer in tussen 0 en 10.";
}


Element.appendChild(cijferElement);
}