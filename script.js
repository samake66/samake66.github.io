(function() {
    emailjs.init("m-HuxdsF0OfObT8Sx");  // Remplace "ton-clé-publique" par ta clé EmailJS
})();

// Fonction de changement d'onglet
function changeTab(tabId) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    let activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    changeTab('projects');
});

// Envoi du formulaire via EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêcher le rechargement de la page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log("Envoi des données à EmailJS : ", name, email, message);

    emailjs.send("service_sk3e6lt", "template_nhvumct", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('Succès : ', response);
        document.getElementById('status-message').innerHTML = "Message envoyé avec succès !";
        document.getElementById('contact-form').reset();
    }, function(error) {
        console.error('Erreur : ', error);
        document.getElementById('status-message').innerHTML = "Une erreur s'est produite, veuillez réessayer.";
    });
});
