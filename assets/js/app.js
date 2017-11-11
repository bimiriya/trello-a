//1: elementos creados para div "añadir una lista"
    var container = document.createElement("div");
    var label = document.createElement("label");
    var anadirTarjeta = document.createTextNode("Añadir una lista...");
    
    //atributos
    container.setAttribute("id","container");
    label.setAttribute("id","label");

    //elementos apendizados
    document.body.appendChild(container);
    container.appendChild(label);
    label.appendChild(anadirTarjeta);

//2: elementos creados para nuevo contenedor-formulario con input + botones
    var newContainer = document.createElement("form");
    var input = document.createElement("input");
    var guardarBtn = document.createElement("button");
    var icon = document.createElement("i");


    //guardarBtn inner text
    var anadirTarjeta = document.createTextNode("Guardar");

    //función para elementos creados nuevo contenedor-formulario
    label.addEventListener("click", function() {
        label.style.display = "none";

        //atributos
        newContainer.setAttribute("id","new-container");
        icon.classList.add("fa","fa-times");
        guardarBtn.setAttribute("id","guardar-btn");
        //atributos del input
        input.setAttribute("placeholder","Añadir una lista...");
        input.setAttribute("id","input");
        input.setAttribute("type","text");
        
        //elementos apendizados
        container.appendChild(newContainer);
        newContainer.appendChild(input);
        newContainer.appendChild(guardarBtn);
        guardarBtn.appendChild(anadirTarjeta);
        newContainer.appendChild(icon);

    })

    //función para cerrar con .fa-times --> X icon
    icon.addEventListener("click",function() {
        document.getElementById("input").value = "";
        label.style.display = "inline-block";
        container.removeChild(newContainer);
    })

    //3: función para guardar el input e integrar link añadir tarjeta
    guardarBtn.addEventListener("click", function() {
        //valor recuperado del input
        var list = document.getElementById("input").value;
        document.getElementById("input").value = "";

      //elementos creados
        //nuevo formulario creado para que el anterior se mueva hacia la derecha
        //y el usuario pueda agregar más tarjetas
        var cardContainer = document.createElement("form");
        newContainer.style.cursor = "pointer";
        //label para ingresar el input como texto
        var card = document.createElement("label");
        var cardName = document.createTextNode(list);
        //menu a la derecha
        var cardMenu = document.createElement("i");
        //link para tarjeta
        var add = document.createElement("a");
        var textAdd = document.createTextNode("Añadir tarjeta...");

        //atributos
        cardContainer.setAttribute("id","card-container");
        card.setAttribute("id","card-name");
        cardMenu.classList.add("fa","fa-ellipsis-h");
        add.setAttribute("href","#");
        add.setAttribute("id","add-card");
        
        //elementos apendizados
        document.body.appendChild(cardContainer);
        card.appendChild(cardName);
        cardContainer.appendChild(card);
        cardContainer.appendChild(cardMenu);
        cardContainer.appendChild(add);
        add.appendChild(textAdd);

//4: función para crar textarea sobre botones
        add.addEventListener("click",function() {

            //elementos creados
            var cardTextArea = document.createElement("textarea");
            var anadirBtn = document.createElement("button");
            var anadirIcon = document.createElement("i");
            var anadirBtnText = document.createTextNode("Añadir");

            //para ocultar link "añadir tarjeta"
            add.style.display = "none";

            //atributos
            cardTextArea.setAttribute("id","card-textarea");
            anadirBtn.setAttribute("id","guardar-btn");
            anadirIcon.classList.add("fa","fa-times");

            //elementos apendizados
            cardContainer.appendChild(cardTextArea);
            cardContainer.appendChild(anadirBtn);
            anadirBtn.appendChild(anadirBtnText);
            cardContainer.appendChild(anadirIcon);

        //función para agrandar textarea
           var growingTextarea = document.getElementById("card-textarea");

           growingTextarea.oninput = function() {
               growingTextarea.style.height = growingTextarea.scrollHeight + "px";
           }; //el tamaño de card-textarea es = a su tamaño en pixeles


//5: función para guardar tarjeta con añadir
            anadirBtn.addEventListener("click",function() {
                //valor del textarea recuperado
                var cardContent = document.getElementById("card-textarea").value;
                document.getElementById("card-textarea").value = "";

                //elementos creados
                var cardText = document.createElement("label");
                var cardTextValue = document.createTextNode(cardContent);
                var cardTextIcon = document.createElement("i");

                //atributos
                cardText.setAttribute("id","card-text");
                cardTextIcon.classList.add("fa","fa-pencil")

                //elementos apendizados
                cardContainer.insertBefore(cardText,cardTextArea); //apendizado antes del textarea
                cardText.appendChild(cardTextIcon);
                cardText.appendChild(cardTextValue);

            })
            //función para cerrar con .fa-times
            anadirIcon.addEventListener("click",function() {
                cardContainer.style.display = "none";
            })
        })
    })