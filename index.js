class Country{
    constructor(name,lang,greeting,colors){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let USA =new Country("USA", "English", "Gooooood morning, Vietnam!", ["Red","White","Blue"]);
let France =new Country("France", "French", "Bonjour, je suis Marie-Antoinette. Laissez-les manger du gâteau!",  ["Red","White","Blue"]);
let Italy =new Country("Italy", "Italian", "Marco! Polo!",  ["Green","White","Red"]);
let Germany =new Country("Germany", "German", "Hallo, ich bin Albert Einstein!",  ["Black","Red","Yellow"]);
let Russia =new Country("Russia", "Russian", "Zdravstvuyte, ya Igor Fedorovich Stravinsky!",  ["White","Blue","Red"]);
let Serbia =new Country("Serbia", "Serbian", "Zdravo, ja sam Nikola Tesla!",  ["Red","Blue","White"]);

let Countries = [USA,France,Italy,Germany,Russia,Serbia];

function SwitchCountry(){
    
    let e = document.getElementById("CountryList");
    let value = e.value;
    let country = Countries.find(x => x.name.toLowerCase() === value.toLowerCase());

    document.getElementById("name").innerText = country.name;
    document.getElementById("lang").innerText = country.lang;
    document.getElementById("greeting").innerText = country.greeting;

    document.getElementById("color1").style.backgroundColor = country.colors[0];
    document.getElementById("color2").style.backgroundColor = country.colors[1];
    document.getElementById("color3").style.backgroundColor = country.colors[2];
}