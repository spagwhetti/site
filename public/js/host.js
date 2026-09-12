function setHost() {
    const host = document.getElementById('host');
    const follow = document.getElementById('follow');
    const status = document.getElementById('nekocafe-status');
    const members = document.getElementById('members-container');
    const commit = document.getElementById('latest-commit');
    if ( document.URL.includes('nekoweb.org') ) {
        host.href = 'https://nekoweb.org/';
        host.innerText = 'nekoweb'
        if ( follow ) {
            follow.href = "https://nekoweb.org/follow/spaghetti.nekoweb.org"
        }
    }
    else if ( document.URL.includes('neocities.org') ) {
        host.href = 'https://neocities.org/';
        host.innerText = 'neocities'
        if ( follow ) {
            follow.href = "https://nekoweb.org/follow/spaghetti.nekoweb.org"
        }

        showNeocitiesWarning();

        if ( status ) {
            status.style.display = 'none'
        }
        if ( members ) {
            members.style.display = 'none'
        }
        if ( commit ) {
            commit.style.display = 'none'
        }
    }
    else {
        element.innerText = 'Error...'
    }
}

function showNeocitiesWarning() {
    const warning = document.createElement('div');
    warning.id = 'neocities-warning';
    warning.innerText = 'You are viewing the site on a backup host, some things may not work as intended or be displayed.'
    document.body.appendChild(warning)
}

setHost()