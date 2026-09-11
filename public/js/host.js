function setHost() {
    const element = document.getElementById('host')
    if ( document.URL.includes('nekoweb.org') ) {
        element.href = 'https://nekoweb.org/';
        element.innerText = 'nekoweb'
    }
    else if ( document.URL.includes('neocities.org') ) {
        element.href = 'https://neocities.org/';
        element.innerText = 'neocities'
    }
    else {
        element.innerText = 'Error...'
    }
}
setHost()