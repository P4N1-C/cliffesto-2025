// -----togle menu-----

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.right = (menu.style.right === '-100%' || menu.style.right === '') ? '0%' : '-100%';

  gsap.from('.menu-socials', {
    x: '-100%',
    duration: 1
  })
}


// landing animations
function animateElements() {
  // Animation for the header
  gsap.fromTo('.header', { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' });

  baffle('.header nav a')
    .reveal(1000)
    .set({
        characters: '▒░░░░█░░▒█▓▓░█/░░>▒/▒/▓▒░',
        speed: 150
    });
  
    elemAnimation();
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(animateElements);
});

function elemAnimation() {
  gsap.from('.container-left', {
    x: '-100%',
    opacity: 0,
    duration:1
  })

  gsap.from('.wrapper', {
    y: '100%',
    opacity: 0,
    duration:1
  })
}



// ---------------checkbox---------------


function showOptions() {
  var checkbox = document.getElementById("participate");
  var optionsDiv = document.getElementById("teamOptions");

  if (checkbox.checked) {
      optionsDiv.style.display = "block";
      generateInputBoxes();
  } else {
      optionsDiv.style.display = "none";
      clearInputBoxes();
  }
}

function clearInputBoxes() {
  var form = document.getElementById('myForm');
  var existingInputBoxes = form.querySelectorAll('.team-member-input');
  existingInputBoxes.forEach(function (inputBox) {
      inputBox.remove();
  });
}

function generateInputBoxes() {
  var teamSize = document.getElementById("teamSize").value;
  var form = document.querySelector('form');

  // Remove previous input boxes
  clearInputBoxes();

  // Generate new input boxes based on team size
  for (var i = 1; i <= teamSize; i++) {
      var inputBox = document.createElement("div");
      inputBox.className = "input-box team-member-input";

      var input = document.createElement("input");
      input.type = "text";
      input.name = "memberName" + i;
      input.placeholder = "Member " + i + " Name";
      inputBox.appendChild(input);

      var uidInput = document.createElement("input");
      uidInput.type = "text";
      uidInput.name = "memberUID" + i;
      uidInput.placeholder = "Member " + i + " Email";
      inputBox.appendChild(uidInput);

      form.insertBefore(inputBox, form.lastElementChild);
  }
}


// ---------------toggle qrCode--------------------

function toggleQr() {
  var qrContainer = document.getElementById('qr-container');
  qrContainer.classList.toggle('show');
  var qrArrow = document.getElementById('qr-arrow');
  if (qrContainer.classList.contains('show')) {
    qrArrow.style.transform = 'rotate(90deg)';
  } else {
    qrArrow.style.transform = 'rotate(0deg)';
  }
}



// ---------------- nit ? ----------------------

function toggleCollegeForm() {
  var generalForm = document.querySelector('.general-form');
  var collegeForm = document.querySelector('.college-form');
  var wrapper = document.querySelector('.wrapper');
  var checkbox = document.getElementById('nit-uk-checkbox');

  if (checkbox.checked) {
    generalForm.style.display = 'none';
    collegeForm.style.display = 'block';

    wrapper.scrollTop = 0;
  } else {
    generalForm.style.display = 'block';
    collegeForm.style.display = 'none';

    wrapper.scrollTop = 0;
  }
}

// ------------------------for NIT Students---------------------------



function showOptionsNit() {
  var checkbox = document.getElementById("participateNit");
  var optionsDiv = document.getElementById("teamOptionsNit");

  if (checkbox.checked) {
      optionsDiv.style.display = "block";
      generateInputBoxesNit();
  } else {
      optionsDiv.style.display = "none";
      clearInputBoxesNit();
  }
}

function clearInputBoxesNit() {
  var form = document.getElementById('myForm-nit');
  var existingInputBoxes = form.querySelectorAll('.team-member-input-nit');
  existingInputBoxes.forEach(function (inputBox) {
      inputBox.remove();
  });
}

function generateInputBoxesNit() {
  var teamSize = document.getElementById("teamSizeNit").value;
  var form = document.getElementById('myForm-nit');

  // Remove previous input boxes
  clearInputBoxesNit();

  // Generate new input boxes based on team size
  for (var i = 1; i <= teamSize; i++) {
      var inputBox = document.createElement("div");
      inputBox.className = "input-box team-member-input-nit";

      var input = document.createElement("input");
      input.type = "text";
      input.name = "memberName" + i;
      input.placeholder = "Member " + i + " Name";
      inputBox.appendChild(input);

      var uidInput = document.createElement("input");
      uidInput.type = "text";
      uidInput.name = "memberUID" + i;
      uidInput.placeholder = "Member " + i + " Email";
      inputBox.appendChild(uidInput);

      form.insertBefore(inputBox, form.lastElementChild);
  }
}
