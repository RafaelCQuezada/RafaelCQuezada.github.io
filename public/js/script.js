


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')




/* Codigo para moverse en la pagina */


  // Obtener todos los elementos de enlace del navbar
  const navLinks = document.querySelectorAll('.nav-link');

  // Agregar un listener de evento a cada enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Obtener el atributo href del enlace
      const href = link.getAttribute('href');

      // Desplazarse suavemente a la sección correspondiente en la página
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Agregar un listener de evento para el desplazamiento de la página
  window.addEventListener('scroll', () => {
    // Obtener la posición actual de desplazamiento de la página
    const scrollPos = window.scrollY;

    // Iterar a través de todos los elementos de enlace
    navLinks.forEach(link => {
      // Obtener la sección correspondiente vinculada al enlace
      const section = document.querySelector(link.getAttribute('href'));

      // Verificar si la sección está en la parte superior de la página
      if (section.offsetTop <= scrollPos + 200 && section.offsetTop + section.offsetHeight > scrollPos + 200) {
        // Agregar la clase "text-indigo-600" al enlace activo
        link.classList.add('text-indigo-600');
        // Agregar la clase "scroll-margin-top" a la sección activa
        section.classList.add('scroll-margin-top');
      } else {
        // Eliminar la clase "text-indigo-600" del enlace inactivo
        link.classList.remove('text-indigo-600');
        // Eliminar la clase "scroll-margin-top" de la sección inactiva
        section.classList.remove('scroll-margin-top');
      }
    });
  });



