// douceurs-gourmandises/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mise à jour du compteur de panier global
    const updateGlobalCount = () => {
        const panierCountElement = document.getElementById('panier-count');
        if (panierCountElement) {
            const panier = JSON.parse(localStorage.getItem('panier')) || [];
            const count = panier.reduce((acc, item) => acc + item.quantite, 0);
            panierCountElement.textContent = count;
        }
    };

    updateGlobalCount();

    // Gestion de la soumission des formulaires (Contact, etc.)
    const contactForm = document.querySelector('section form:not(#form-commande)');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci ! Votre demande a été reçue. Nous vous contacterons très prochainement.');
            contactForm.reset();
        });
    }
});
