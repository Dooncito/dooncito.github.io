// script.js

// Seleccionar el formulario de contacto
const contactForm = document.querySelector('.contact-form');

// Función para activar la animación de aparición del formulario
const handleContactFormIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contactForm.classList.add('appear-animation');
            observer.unobserve(contactForm);
        }
    });
};

// Configurar IntersectionObserver
const contactFormObserver = new IntersectionObserver(handleContactFormIntersection, { threshold: 0.3 });
contactFormObserver.observe(contactForm);


// Funcionalidad del botón de scroll hacia arriba
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    // Mostrar u ocultar el botón según la posición de la ventana
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animación de carga en las barras de habilidades
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = `${value}%`;
    });
}


// Ejecutar la animación de las habilidades al hacer scroll
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

window.addEventListener('scroll', () => {
    const skillsPosition = skillsSection.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY + window.innerHeight >= skillsPosition && !skillsAnimated) {
        animateSkillBars();
        skillsAnimated = true;
    }
});

// Seleccionar todas las barras de progreso
const progressBars = document.querySelectorAll('.skill-progress');

// Función para activar la animación cuando la barra entra en vista
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const skillLevel = progressBar.getAttribute('data-skill-level'); // Obtener el nivel de habilidad
            progressBar.style.width = skillLevel + '%'; // Llenar la barra hasta el nivel de habilidad
            observer.unobserve(progressBar); // Dejar de observar la barra una vez que se ha animado
        }
    });
};

// Configuración de IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Observar cada barra de progreso
progressBars.forEach(bar => {
    observer.observe(bar);
});

// Seleccionar la imagen que tendrá la animación de aparición
const imageElement = document.querySelector('.about-photo img');

// Función para activar la animación de aparición cuando la imagen entre en vista
const handleImageIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            imageElement.classList.add('appear-animation'); // Añadir la clase para la animación
            observer.unobserve(imageElement); // Dejar de observar después de activar
        }
    });
};

// Configuración de IntersectionObserver para la imagen
const imageObserver = new IntersectionObserver(handleImageIntersection, { threshold: 0.5 });

// Observar la imagen
imageObserver.observe(imageElement);


// script.js

// Efecto parallax en la sección de encabezado
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    document.querySelector('.header-background').style.transform = `translateY(${scrollPosition * 0.5}px)`;
});


// Animación suave de desplazamiento para los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
