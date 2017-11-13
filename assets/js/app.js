//elementos creados cuando se cargar la pagina
var initialContainer = document.createElement("div");
var inputLista = document.createElement("input");
var saveBtn = document.createElement("button");
var closeIcon = document.createElement("i");

saveBtn.innerHTML = "Guardar";

//atributos
inputLista.setAttribute("placeholder","Añadir una lista...");
inputLista.setAttribute("id","input-lista");
//clases
initialContainer.setAttribute("id","initial-container");

//elementos apendizados
document.body.appendChild(initialContainer);
initialContainer.appendChild(inputLista);

//función para agregar botón guardar
inputLista.onclick = function() {

    //atributos
    initialContainer.setAttribute("id","initial-container-clicked");
    inputLista.setAttribute("id","input-lista-clicked");
    //clases
    saveBtn.className = "save-btn";
    closeIcon.className = "close-icon";
    closeIcon.classList.add("fa","fa-times");

    initialContainer.appendChild(saveBtn);
    initialContainer.appendChild(closeIcon);

    //función para cerrar con fa-times
    closeIcon.onclick = function() {
        inputLista.value = "";
        initialContainer.removeChild(saveBtn);
        initialContainer.removeChild(closeIcon);

        inputLista.setAttribute("id","input-lista");
        initialContainer.setAttribute("id","initial-container");
    }

    //función para guardar el input de lista
    saveBtn.onclick = function() {
        if (inputLista.value != "") {
            //elementos creados
            var container = document.createElement("div");
            var cardTitle = document.createElement("label");
            var anadirTarjeta = document.createElement("span");
            var dotsIcon = document.createElement("i");

            //atributos
            container.setAttribute("id","container");
            cardTitle.setAttribute("id","card-title");
            anadirTarjeta.setAttribute("id","anadir-tarjeta");

            //clases
            dotsIcon.classList.add("fa","fa-ellipsis-h");

            cardTitle.innerHTML = inputLista.value;
            inputLista.value = "";
            anadirTarjeta.innerHTML = "Añadir tarjeta...";

            container.appendChild(dotsIcon);
            container.appendChild(cardTitle);
            container.appendChild(anadirTarjeta);
            document.body.insertBefore(container,initialContainer)

            //elementos creados siguiente función
            var textarea = document.createElement("textarea");
            var anadirBtn = document.createElement("button");
            var closeIcon = document.createElement("i");
            
            //función para agrandar textarea
            textarea.oninput = function() {
                textarea.style.height = textarea.scrollHeight + "px";
              };
              

            //función para añadir textarea + buttons
            anadirTarjeta.onclick = function() {
                anadirTarjeta.style.display = "none";
                
                anadirBtn.innerHTML = "Añadir";

                //atributos
                textarea.setAttribute("id","textarea");
                textarea.setAttribute("cols","18");

                //clases
                anadirBtn.className = "save-btn";
                closeIcon.classList.add("fa","fa-times");

                //styling
                anadirBtn.style.marginLeft = "4px";
                anadirBtn.style.marginBottom = "5px";

                container.appendChild(textarea);
                container.appendChild(anadirBtn);
                container.appendChild(closeIcon);

                 //función para cerrar con fa-times
                closeIcon.onclick = function() {
                    textarea.value = "";
                    container.removeChild(textarea);
                    container.removeChild(closeIcon);
                    container.removeChild(anadirBtn);

                    anadirTarjeta.style.display = "block";
                }

                //función para guardar valor del textarea como label
                anadirBtn.onclick = function () {
                    //elementos creados
                    var card = document.createElement("label");
                    card.innerHTML = textarea.value;

                    textarea.value = "";

                    //atributos
                    card.setAttribute("id","card");

                    container.insertBefore(card,textarea);
                }              
            }
        }
    }
};