// this script is under the MIT license (https://maxpixels.moe/resources/license.txt)

let domain = "spaghetti.nekoweb.org";

(async () => {
  try {
    const request = await fetch(`https://nekoweb.org/api/site/info/${domain}`);
    const json = await request.json();

    /*const updated = new Date(json.updated_at).toLocaleDateString();
    const created = new Date(json.created_at).toLocaleDateString();

    if (document.getElementById("created"))
      document.getElementById("created").innerHTML =
        `<em>Created</em>: ${created}`;
    if (document.getElementById("updated"))
      document.getElementById("updated").innerHTML =
        `<em>Updated</em>: ${updated}`;*/
    if (document.getElementById("views"))
      document.getElementById("views").innerHTML = json.views;
    if (document.getElementById("followers"))
      document.getElementById("followers").innerHTML = json.followers;
  } catch (error) {
    console.error(error);
  }
})();