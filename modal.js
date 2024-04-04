function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
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

  // Catch Data

  // ====================== First Name //  One element
  // Select element
  let first = document.getElementById('first');
  // Take value
  first.addEventListener('input', () => {
    // Display value
    console.log(first.value);
    // checker champs de formulaire
    if (first.value < 2) {
      // j'affiche une erreur
    }
  });

  // ====================== Last Name // One element
   //Select element
  let last = document.getElementById('last');
  // Take value
  last.addEventListener('input', () => {
    //Display value
    console.log(last.value);
    if (last.value < 2) {
      // j'affiche une erreur
    }
  });

  // ====================== Email // One element
   //Select element
  let email = document.getElementById('email');
  // Take value
  email.addEventListener('input', () => {
    //Display value
    console.log(email.value);
    // verif avec regex ou email natif
    isValidEmail = true;
    if (!isValidEmail) {
      // j'affiche une erreur
    }
  });

  // ====================== Bithday
  //Select element
  let birthdateInput = document.getElementById('birthdate');
  birthdateInput.addEventListener('input', () => {
    // Take value
    let birthdate = birthdateInput.value;
    //Display value
    console.log(birthdate);
    if (!birthdate) {
      // j'affiche une erreur
    }
  });

  // ====================== Participation Number
   //Select element
   let participationInput = document.getElementById('quantity');
   // Take value live
   participationInput.addEventListener('input', () => {
     let participation = participationInput.value;
     //Display value
     console.log(participation);
   });

  // ====================== City
  //Select element
  let cityInputs = document.querySelectorAll('input[name="location"]');
   // Take value live
  cityInputs.forEach(input => {
    input.addEventListener('change', () => {
      //Display value
      if (input.checked) {
        console.log(input.value);
      }
    });
  });

  // ====================== Condition
  //Select element
  let termsCheckbox = document.getElementById('checkbox1');
  // Take value live
  termsCheckbox.addEventListener('change', () => {
    //Display value
    console.log(termsCheckbox.checked);
    if (!termsCheckbox.checked) {
      // j'affiche un message d'erreur
    }
  });

  // ====================== Newsletter
  //Select element
  let newsletterCheckbox = document.getElementById('checkbox2');
  // Take value live
  newsletterCheckbox.addEventListener('change', () => {
    //Display value
    console.log(newsletterCheckbox.checked);
  });
}


const form = document.querySelector('form[name="reserve"]');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('form submit!')
  // checker les champs
  // si erreur
    // affiche erreur et return false
  //si ok
    // afiche le message de confirmation et console.log des données
})