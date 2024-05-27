document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');
    const text = "I'm Chukwuma Charleson";
    let index = 0;

    const intervalId = setInterval(() => {
        heroText.innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(intervalId); // Stop the interval when all letters are displayed
        }
    }, 150); // Adjust the interval duration as needed
});



document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.getElementById('profile-img');

    profileImg.addEventListener('mouseenter', () => {
        profileImg.style.transform = 'scale(1.05)';
        profileImg.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
    });

    profileImg.addEventListener('mouseleave', () => {
        profileImg.style.transform = 'scale(1)';
        profileImg.style.boxShadow = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const yOffset = -50; // Adjust this value to offset for fixed header height

            if (targetElement) {
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        });
    });
});




