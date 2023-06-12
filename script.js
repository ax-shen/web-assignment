const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

function updateVisitorCount() {
    var visitorCountElement = document.getElementById('visitorCount');
    var currentCount = parseInt(visitorCountElement.innerText.split(':')[1].trim());
    visitorCountElement.innerText = 'Visitors: ' + (currentCount + 1);
  }
  
  setInterval(updateVisitorCount, 1000);

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  swiper.on('mouseover', function () {
    swiper.autoplay.stop();
  });
  
  swiper.on('mouseout', function () {
    swiper.autoplay.start();
  });

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();


    if (name === "") {
        nameInput.classList.add("error");
        nameInput.nextElementSibling.textContent = "Please enter your name.";
        return false;
    } else {
        nameInput.classList.remove("error");
        nameInput.nextElementSibling.textContent = "";
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailInput.classList.add("error");
        emailInput.nextElementSibling.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailInput.classList.remove("error");
        emailInput.nextElementSibling.textContent = "";
    }

    if (message === "") {
        messageInput.classList.add("error");
        messageInput.nextElementSibling.textContent = "Please enter a message.";
        return false;
    } else {
        messageInput.classList.remove("error");
        messageInput.nextElementSibling.textContent = "";
    }

    
});

document.addEventListener('DOMContentLoaded', function() {
    var anchorLinks = document.querySelectorAll('.nav-link');

    for (var i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            var targetOffset = targetElement.offsetTop;
            var headerHeight = document.querySelector('.header').offsetHeight;
            var scrollToOffset = targetOffset - headerHeight;

            window.scrollTo({
                top: scrollToOffset,
                behavior: 'smooth'
            });
        }
    }
});
var logo = document.querySelector('.logo');
logo.addEventListener('mouseover', function() {
});

logo.addEventListener('mouseout', function() {
});

var visitorCount = document.getElementById('visitorCount');
visitorCount.addEventListener('click', function() {
});

var contactSection = document.getElementById('contact');
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            contactSection.style.opacity = '1'; 
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 });

observer.observe(contactSection);


