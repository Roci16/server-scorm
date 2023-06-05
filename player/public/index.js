const course = document.getElementById('course-container')


// Iniciar player con SCORM 1.2
window.API = new Scorm12API({ autocommit: true });

// Obtener el progreso guardado en el localhost
const usersCMI = localStorage.getItem("cmi")
if (usersCMI) window.API.loadFromJSON(JSON.parse(usersCMI).cmi);

// Escuchar todos los cambios del CMI.
window.API.on('LMSSetValue.cmi.*', function (CMIElement, value) {
    window.API.storeData(true);
    localStorage.setItem('cmi', JSON.stringify(API.renderCommitCMI(true)));
});

window.setTimeout(() => {
    // Obtener la URL desde el atributo data-src
    const url = course.getAttribute("data-src"); //esta apunta al otro html
    const url2 = `http://127.0.0.1:3001/courses/curso1/story.html`
    console.log(url);

    // Asignar la URL al atributo data del elemento course
    course.setAttribute("data", url);
}, 500);