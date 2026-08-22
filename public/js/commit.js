// moosyu.nekoweb.org

fetch('https://api.github.com/repos/spagwhetti/site/commits?per_page=1')
    .then(res => res.json())
    .then(res => {
        let sha = res[0].sha;
        document.getElementById('commitMessage').innerText = res[0].commit.message;
        document.getElementById('shortHash').innerText = sha.substring(0, 7);
        document.getElementById('commitLink').href = "https://github.com/spagwhetti/site/commit/" + sha
    });