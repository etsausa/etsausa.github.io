import { animateIn } from "./functions/animateIn.js"

const route = (event) =>{
    event = event || window.event; //captures click event into variable
    event.preventDefault(); //override default link behavior
    window.history.pushState({},"", event.target.href); //adds route to URL
    handleLocation(); //render rotue
};

const routes = {
    404: `/404.html`,
    "/": `/views/projects.html`,
    "/about": `/views/about.html`,
    "/projects":`/views/projects.html`,
    
    "/libor":`/views/projects/libor.html`,
    "/hfaou":`/views/projects/hfaou.html`,
    "/cic":`/views/projects/cic.html`,
    "/hangout":`/views/projects/hangout.html`,
    
};

const handleLocation = async () => {
    const path = window.location.pathname; //get path name from URL
    const route = routes[path] || routes[404]; //gets route or 404 if invalid
    const html = await fetch(route).then((data) => data.text()); //load html
    document.getElementById("main").innerHTML = html; //add html to main
    animateIn();
};

window.onpopstate = handleLocation; //adds to history

window.route = route; //global access (route is default route)

handleLocation(); //intial route