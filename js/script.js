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

document.addEventListener('DOMContentLoaded', () => {
    // Radar chart data
    const data = {
        labels: ['Python', 'Machine Learning', 'Data Analysis', 'TensorFlow', 'PyTorch'],
        datasets: [{
            label: 'Skill Level',
            data: [90, 80, 85, 75, 70], // Example skill levels (out of 100)
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        }]
    };

    // Radar chart options
    const options = {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                stepSize: 20
            }
        }
    };

    // Get the canvas element
    const ctx = document.getElementById('radarChart').getContext('2d');

    // Create the radar chart
    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOpen = document.querySelector('.menu-open');

    menuToggle.addEventListener('click', () => {
        menuOpen.classList.toggle('open');
    });
});

