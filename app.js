
fetch("./menu.json")
.then(respose => respose.json())
.then (menuOpciones => {
    const selectMenu = document.getElementById("menu");

    menuOpciones.map (opcion => {
        const option = document.createElement("option");
        option.value = opcion.id;
        option.textContent = opcion.materia;
        selectMenu.appendChild(option);
    });
    
})

.catch(error => console.error("Error para cargar las opciones", error));

