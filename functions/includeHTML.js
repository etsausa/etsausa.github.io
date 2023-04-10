window.onload = (event) => {
    //creates container for view
    // sets default view to projects
    
    let element = document.createElement("section");
    element.classList.add('view-container');
    document.getElementById("main").insertAdjacentElement("beforeend", element);
    includeHTML('./views/projects.html');
}

function loadFile(htmlDATA){
    let data = htmlDATA.getAttribute('data');
    let file = `./views/${data}.html`

    window.history.pushState(file, 'Title', data);

    clearHTML();
    includeHTML(file);
}

function includeHTML(file){
    //makes an xhttp request
    let xhttp;

    let elements = document.getElementsByClassName('view-container');
    let element = elements[0];

    element.id=file

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4){
            if (this.status == 200) {element.innerHTML = this.responseText;}
            if (this.status == 404) {element.innerHTML = "Page not found.";}                
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
}

function clearHTML(){
    let elements = document.getElementsByClassName('view-container');
    let element = elements[0];
    element.innerHTML = '';
}

