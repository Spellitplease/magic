document.addEventListener("DOMContentLoaded", function () {
let isInvalid = false;


  //nom
  const name = document.querySelector("#nom");

  function validation() {
    if (name.value.length < 3) {
      name.style.borderColor = "red";
      return isInvalid = true;
    } else {
      name.style.borderColor = "green";
      return isInvalid = false;
    }
  }

  if (name) {
    name.addEventListener("input", validation);
  }

  //prenom
const firstname = document.querySelector("#prenom");

  function validation2() {
    if (firstname.value.length < 3) {
      firstname.style.borderColor = "red";
      return isInvalid = true;
    } else {
      firstname.style.borderColor = "green";
      return isInvalid = false;
    }
  }
  if (firstname) {
    firstname.addEventListener("input", validation2);
  }

  //AGE----------------------------------------------------------------------------------------------------------------------------------

  const birthdateInput = document.querySelector("#age");
  const ageMessage = document.querySelector("#age-message");
  
  function calculateAge(birthdate) {
    const today = new Date();
    const birthdateObj = new Date(birthdate);
    let age = today.getFullYear() - birthdateObj.getFullYear();
    const monthDiff = today.getMonth() - birthdateObj.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateObj.getDate())
    ) {
      age--;
    }
    return age;
  }
  
  function validateAge() {
    const birthdate = birthdateInput.value;
    const age = calculateAge(birthdate);
    if (age < 18) {
      ageMessage.textContent =
        "Vous devez avoir au moins 18 ans pour vous inscrire.";
        return isInvalid = true;
    } else {
      ageMessage.textContent = "";
      return isInvalid = false;
    }
  }
  
  birthdateInput.addEventListener("input", validateAge);
  //email
const emailInput = document.querySelector("#email");
function validateEmail(email) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}
function validation3() {
  if (validateEmail(emailInput.value)) {
    emailInput.style.borderColor = "green";
    return isInvalid = false;
  } else {
    emailInput.style.borderColor = "red";
    return isInvalid = true;
  }
}
if (emailInput) {
  emailInput.addEventListener("input", validation3);
}
});
//Validation formulaire entier-------------------------------------------------------------------------------------------------------------------------*-----

// let envoiOk = document.querySelector('#envoi');

// function finalValid (event) {
//   if (isInvalid === true){
//     event.preventDefault();
//   }
// };

// envoiOk.addEventListener("submit",finalValid);

const select = document.querySelector("#cartes");
const imageCarte = document.querySelector("#imageCarte");

fetch(`https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+mv%3D3`)
    .then(response => response.json())
 .then(data => {
      const select = document.querySelector("#cartes"); 
      console.log(data)
        data.data.forEach((cards) => {
          const option = document.createElement("option");
          option.innerHTML = cards.name;
          option.value = cards.image_uris.png;
          select.appendChild(option);
        })
        });
// fetch("https://api.magicthegathering.io/v1/cards")
//     .then(response => response.json())
//     .then(data => {
  
//         data.cards.forEach(card => {
//             const option = document.createElement("option");
//             option.text = card.name;
//             option.value = card.imageUrl;
//             select.add(option);
//         });
//     })
//     .catch(error => console.error(error));


select.addEventListener("change", event => {
    const imageUrl = event.target.value;
    imageCarte.src = imageUrl;
    imageCarte.style.width = '300px';
    imageCarte.style.height = '400px';
});

//page2---------------------------------------------------------------------------------------------------------------------------------------------------------

// fetch("https://api.magicthegathering.io/v1/cards")
//   .then((data) => {
//     console.table(data);
//     return data.json();
//   })
 
//   .then((objectData) => {
//     console.log(objectData.cards);
//     let tableData = "";
//     if (Array.isArray(objectData.cards)) {
//       objectData.cards.map((values) => {
//         tableData += ` <tr>
//       <td>${values.colorIdentity}</td>
//       <td>${values.types}</td>
//       <td>${values.cmc} $</td>
//       <td>${values.colors} %</td>
//       <td>${values.type}</td>
//       <td>${values.rarity} restants</td>
//       <td><img id="img" src="${values.imageUrl}"/></td>
//       </tr>`;
//       });
//     }

//     const tableBody = document.querySelector("#tableBody");
//     if (tableBody !== null) {
//       tableBody.innerHTML = tableData;
//     } else {
//       console.error("#tableBody not found");
//     }
//   });
 


