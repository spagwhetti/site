var sites = [
    ["https://spaghetti.nekoweb.org/","https://spaghetti.nekoweb.org/img/carbonara-image.png"],
    ["https://7vtia.nekoweb.org/","https://7vtia.nekoweb.org/images/7vtiad.gif"]
]

function setSite() {
    var rand = Math.floor(Math.random() * sites.length);
    
    document.getElementById('image').src = sites[rand][1];
    document.getElementById('link').href = sites[rand][0];
    setInterval(setSite, 30000);
}
setSite();