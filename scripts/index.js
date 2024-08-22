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
        this.id = 0;
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

    const contenedorTarjeta = document.getElementById("contenedor");
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
    
        tarjeta.appendChild(titleTarjeta)  
        tarjeta.appendChild(imgTarjeta)
        tarjeta.appendChild(descripcionTarjeta)

        return tarjeta
    }) // en esta funcion ponemos la informacion que tomamos de los imput de la pagina
    contenedorTarjeta.appendChild(...htmlActivities)
}

const activityDOM = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const imgUrl = document.getElementById("imgUrl").value;
    
    if(!title || !description || !imgUrl){
        alert('Falta informacion')
        return;
    }
    repository.createActivity(title, description, imgUrl)
    title.value = "";
    return render()

}

const button = document.getElementById("addActivity");

button.addEventListener("click", activityDOM);
