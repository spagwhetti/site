function setHost() {
    const element = document.getElementById('host')
    if ( document.URL.includes('nekoweb.org') ) {
        element.href = 'https://nekoweb.org/';
        element.innerText = 'nekoweb'
    }
    else if ( document.URL.includes('neocities.org') ) {
        element.href = 'https://neocities.org/';
        element.innerText = 'neocities'
        if ( document.getElementById('nekocafe-status') ) {
            document.getElementById('nekocafe-status').style.display = 'none'
        }
        if ( document.getElementById('members-container') ) {
            document.getElementById('members-container').style.display = 'none'
        }
        if ( document.getElementById('latest-commit') ) {
            document.getElementById('latest-commit').style.display = 'none'
        }
    }
    else {
        element.innerText = 'Error...'
    }
}
setHost()