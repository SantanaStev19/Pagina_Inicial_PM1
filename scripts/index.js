class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 1;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const activity = new Activity(this.id, title, description, imgUrl);
        this.id++;
        this.activities.push(activity);
    }

    deleteActivity(id) {
        this.activities = this.activities.filter((activity) => activity.id !== id);
        return this.activities;//retorna las otras actividades a execcion del id eliminado
    }
}

const repository = new Repository();

const render = () => {

    const contenedorTarjeta = document.getElementById("encapsular");
    contenedorTarjeta.innerHTML = "";//se crea la tarjeta vacia

    const activities = repository.getAllActivities();
    //informacion de la clase
    const htmlActivities = activities.map(activity =>{
    
        const tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"// se crea la tarjeta en el div
    
        const titleTarjeta = document.createElement("h3")
        titleTarjeta.className = "titleTarjeta"
        titleTarjeta.innerHTML = activity.title
    
        const imgTarjeta = document.createElement("img")
        imgTarjeta.src = activity.imgUrl
    
        const descripcionTarjeta = document.createElement("p")
        descripcionTarjeta.innerHTML = activity.description   

        const delateTarjeta = document.createElement("button")
        delateTarjeta.innerHTML = activity.id
        delateTarjeta.textContent = "Eliminar Tarjeta"

        delateTarjeta.addEventListener("click",() => {
            repository.deleteActivity(activity.id);
            render();
        })
    
        tarjeta.appendChild(titleTarjeta)  
        tarjeta.appendChild(imgTarjeta)
        tarjeta.appendChild(descripcionTarjeta)
        tarjeta.appendChild(delateTarjeta)


        contenedorTarjeta.appendChild(tarjeta);
    }) // en esta funcion ponemos la informacion que tomamos de los imput de la pagina
    

}
const activityDOM = () => {
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const imgUrlInput = document.getElementById("imgUrl");

    const title = titleInput.value; // Toma los valores de los inputs
    const description = descriptionInput.value;
    const imgUrl = imgUrlInput.value;

    if(!title || !description || !imgUrl){
        alert('Falta informacion')
        return;
    }

    repository.createActivity(title, description, imgUrl);

    titleInput.value = "";
    descriptionInput.value = "";
    imgUrlInput.value = "";

    render();
}




const button = document.getElementById("addActivity");

button.addEventListener("click", activityDOM);





