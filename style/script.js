function scrollToTeleKartice() {
    const teleKartice = document.getElementById('tele-kartice');
    if (teleKartice) {
        teleKartice.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Ne radi');
    }
}