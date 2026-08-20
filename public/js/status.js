// provided by social.nekoweb.org and edited to show "... ago" instead of "dd/mm/yyyy 00:00" with snippets from probably stack overflow

const username = "spaghetti";
const posts_url = "https://cafe.frizzbees.dev/get_posts/1?name=";
const profile_url = "https://social.nekoweb.org/profile/?view=";
const post_url = "https://social.nekoweb.org/post/?id=";

function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + "yr";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + "mo";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + "d";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + "hr";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + "min";
    }
    return Math.floor(seconds) + "sec";
}

(async () => {
    try {
        const request = await fetch(posts_url + username,);
        let json = await request.json();
        json = json[0]

        timestamp = json["timestamp"]
        time = timeSince(timestamp * 1000)
    
        div = document.getElementById("nekocafe-status")
        
        div.innerHTML = `
            <div style="display:flex;flex-direction:row;justify-content:space-between;">
                <h2>Status</h2>
                <p style="font-size:0.9rem" id="nekocafe-time">${time} ago</p>
            </div>
            <p id="nekocafe-text"><a href="${post_url + json["id"]}">${json["post"]}</a></p>
        `

    } catch (error) {
        console.error(error)
    }
})();