let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

let operation = '';  // Contient l'opération complète

// Initialiser l'écran avec '0'
display.value = '0';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

        if (value === '=') {
            // Si le bouton '=' est cliqué
            try {
                if (operation) {
                    let result = eval(operation);  // Calcul de l'opération complète
                    display.value = result;  // Afficher le résultat
                    operation = result.toString();  // Le résultat devient la nouvelle opération
                }
            } catch (error) {
                display.value = 'Erreur';
                operation = '';
            }
        } else if (value === 'C') {
            // Si le bouton 'C' est cliqué
            operation = '';  // Réinitialiser l'opération
            display.value = '0';  // Réinitialiser l'écran à '0'
        } else {
            // Gestion du zéro initial
            if (display.value === '0' || display.value === 'Erreur') {
                display.value = '';
            }

            // Vérifier si la valeur est un opérateur
            if (['+', '-', '*', '/'].includes(value)) {
                // Ajouter l'entrée actuelle et l'opérateur à l'opération
                if (display.value !== '') {
                    operation += display.value + value;
                    display.value = operation;  // Afficher l'opération en cours
                }
            } else {
                // Ajouter le chiffre à l'affichage et à l'opération
                display.value += value;
                operation += value;  // Mettre à jour l'opération
            }
        }
    });
});