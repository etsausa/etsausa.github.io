import { animateIn } from "./functions/animateIn.js"

const route = (event) =>{
    let nav = document.getElementsByTagName("nav")
    nav=nav[0];
    let children = nav.children;
    
    for(let element of children){
        
        element.classList ? element.classList.remove('active'): " "; 
    }

    event = event || window.event; //captures click event into variable
    
    event.target.classList.add('active')
    event.preventDefault(); //override default link behavior
    window.history.pushState({},"", event.target.href); //adds route to URL
    handleLocation(); //render rotue
};

const routes = {
    404: `/404.html`,
    "/": `/views/about.html`,
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