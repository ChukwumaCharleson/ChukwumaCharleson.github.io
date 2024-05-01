document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                    card.style.transitionDelay = `${index * 100}ms`;
                    card.classList.add('show');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu-open');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');
    const text = "I am Chukwuma Charleson";
    let index = 0;

    const intervalId = setInterval(() => {
        heroText.innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(intervalId); // Stop the interval when all letters are displayed
        }
    }, 100); // Adjust the interval duration as needed
});




document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
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



