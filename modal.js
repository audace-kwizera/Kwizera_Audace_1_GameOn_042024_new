function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let citySelected = false;
let formSubmitted = false;

// Fonction de validation de l'email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


/// launch modal form
function launchModal() {
  modalbg.style.display = "block";

// Validation du formulaire
  const form = document.querySelector('form[name="reserve"]');
  form.addEventListener('submit', function(e) {
    // Empêcher le comportement par défault
    e.preventDefault();
    // Vérification des champs
    let isValidForm = true;

    /////////////////// Prénom
    // verification du prénom
    let first = document.getElementById('first');
    // si erreur
    // affiche erreur et return false
    first.closest('.formData').dataset.errorVisible = false;
    if (first.value.length < 2) {
      isValidForm = false;
      first.closest('.formData').dataset.errorVisible = true;
    } 
    
    /////////////////// Nom de Famille
    // vérification du Nom de Famille
    let last = document.getElementById('last');
    // si erreur
    // affiche erreur et return false
    last.closest('.formData').dataset.errorVisible = false;
    if (last.value.length < 2) {
      last.closest('.formData').dataset.errorVisible = true;
      isValidForm = false
    } 

    /////////////////// Email
    // vérification de l'email
    let email = document.getElementById('email');
    // affiche erreur et return false
    if (!validateEmail(email.value)) {
      console.log("L'email est incorrect");
      isValidForm = false;
    }

    /////////////////// Bithday
    // vérification de la date de naissance
    let birthdateInput = document.getElementById('birthdate');
    // affiche erreur et return false
    if (!birthdateInput.value) {
      console.log("La date de naissance est incorrect");
      isValidForm = false;
    } 

    /////////////////// City
    // Voir si la ville a été selectionné
    let cityInputs = document.querySelectorAll("input[name='location']");
    let selectedCity = Array.from(cityInputs).find(input => input.checked);
    if (!selectedCity) {
      console.log('Veuillez sélectionner une ville');
      isValidForm = false;
    }

    /////////////////// Conditions d'utilisation
    // Conditions d'utilisations checked
    let termsCheckbox = document.getElementById('checkbox1');
    // affiche erreur et return false
    if (!termsCheckbox.checked) {
      console.log("Vous devez accepter nos conditions d'utilisations pour continuer");
      isValidForm = false;
    } 

    // ============== Validation Formulaire =============//
    // Affichage du message de confirmation si formulaire valide et submit
    if (isValidForm) {
      form.style.display = 'none';
      document.querySelector('.confirm').style.display = 'block'
    }
    return false;
  });

  // Ecouteurs d'evênement à chaque champs pour lire en direct à la saisi 
  const formFields = document.querySelectorAll('.formData input, .formData textarea');

  formFields.forEach(field => {
    field.addEventListener('input', () => {
      console.log(field.id + ':', field.value);
    });
  });
}

  