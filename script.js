function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

const slaBtn = document.getElementById('sla-btn');
const slaBtnTxt = slaBtn.innerHTML;
const twfnoBtn = document.getElementById('twfno-btn');

slaBtn.addEventListener('mouseover', changeTextOver);
slaBtn.addEventListener('mouseleave', changeTextLeave);
slaBtn.addEventListener('click', gotoSLAPage);
twfnoBtn.addEventListener('click',gotoTWFNOPage);

function changeTextOver() {
  console.log('hi');
  document.getElementById('sla-btn').innerHTML = 'SEE MORE PHOTOS';
}

function changeTextLeave() {
  console.log('bye');
  document.getElementById('sla-btn').innerHTML = slaBtnTxt;
}

function gotoSLAPage() {
  console.log('Welcome to SLA Page');
  window.location.href='./sla.html';
}

function gotoTWFNOPage() {
  console.log('Welcome to TWFNO Page');
  window.location.href='./twfno.html';
}

