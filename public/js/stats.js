// this script is under the MIT license (https://maxpixels.moe/resources/license.txt)

let domain = "spaghetti.nekoweb.org";

(async () => {
  try {
    const request = await fetch(`https://nekoweb.org/api/site/info/${domain}`);
    const json = await request.json();

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const now = Date.now();
    const then = 1742495320565;
    const diff = (now - then);
    const days = Math.floor(diff / day);

    if (document.getElementById("views"))
      document.getElementById("views").innerHTML = json.views;
    if (document.getElementById("followers"))
      document.getElementById("followers").innerHTML = json.followers;
    if (document.getElementById("uptime"))
      document.getElementById("uptime").innerHTML = days
  } catch (error) {
    console.error(error);
  }
})();










    /*const updated = new Date(json.updated_at).toLocaleDateString();
    const created = new Date(json.created_at).toLocaleDateString();

    if (document.getElementById("created"))
      document.getElementById("created").innerHTML =
        `<em>Created</em>: ${created}`;
    if (document.getElementById("updated"))
      document.getElementById("updated").innerHTML =
        `<em>Updated</em>: ${updated}`;*/