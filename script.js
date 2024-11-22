
function toggleMenu() {
    
    const sidebar = document.getElementById('sidebar');

    // Legg til eller fjern klassen "open" for å åpne/lukke menyen
    sidebar.classList.toggle('open');

    // Juster marginen til hovedinnholdet når menyen er åpen
    if (sidebar.classList.contains('open')) {
        document.body.style.marginLeft = '250px'; 
    } else {
        document.body.style.marginLeft = '0'; 
    }
}

// Legg til smooth scroll for meny
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

       
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


