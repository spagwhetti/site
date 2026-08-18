document.addEventListener("DOMContentLoaded", function() {
    const DATA_FOR_WEBRING = `https://raw.githubusercontent.com/spagwhetti/spagwhetti.github.io/main/webring.json`;
    const list = document.getElementById("members");

    function convertHTML(str) {
        var regexTable =  {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&apos;'
        };

        let result = str;
        var regexKeys = Object.keys(regexTable);

        for (var i=0; i<regexKeys.length; i++) {
            let regex = new RegExp(regexKeys[i], 'g');
            result = result.replace(regex, regexTable[regexKeys[i]]);
        }
        return result;
    }

    fetch(DATA_FOR_WEBRING)
    .then((response) => response.json())
    .then((sites) => {
        list.innerHTML = ""
        for (var i = 0; i < sites.length; i++){
            list.innerHTML += "<div><p><a href=" + sites[i].url + " target=\"_blank\">" + convertHTML(sites[i].name) + "</a></p></div>";
        }
    });
});