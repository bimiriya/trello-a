    //elementos creados first phase
    var container = document.createElement("div");
    var label = document.createElement("label");
    var anadirTarjeta = document.createTextNode("Añadir una lista...");
    
    //atributos añadidos a elementos first phase
    container.setAttribute("id","container");
    label.setAttribute("id","label");

    //elementos apendizados
    document.body.appendChild(container);
    container.appendChild(label);
    label.appendChild(anadirTarjeta);

    //elementos creados para second phase
    var newContainer = document.createElement("div");
    var input = document.createElement("input");
    var guardarBtn = document.createElement("button");
    var icon = document.createElement("i");


    //guardarBtn inner text
    var anadirTarjeta = document.createTextNode("Guardar");

    //second phase of created elements
    label.addEventListener("click", function() {
        label.style.display = "none";

        //atributo newcontainer
        newContainer.setAttribute("id","new-container");

        //atributo de icon
        icon.classList.add("fa","fa-times");

        //atributo guardarBtn
        guardarBtn.setAttribute("id","guardar-btn");

        //atributos del input
        input.setAttribute("placeholder","Añadir una lista...");
        input.setAttribute("id","input");
        input.setAttribute("type","text");
        

        container.appendChild(newContainer);
        newContainer.appendChild(input);
        newContainer.appendChild(guardarBtn);
        guardarBtn.appendChild(anadirTarjeta);
        newContainer.appendChild(icon);

    })

    //función para cerrar con .fa-times
    icon.addEventListener("click",function() {
        document.getElementById("input").value = "";
        label.style.display = "inline-block";
        container.removeChild(newContainer);
    })

    //función para guardar el input e integrar link añadir tarjeta
    guardarBtn.addEventListener("click", function() {
        var list = document.getElementById("input").value;
        document.getElementById("input").value = "";
        var cardContainer = document.createElement("div");
        newContainer.style.cursor = "pointer";

        //input ya ingresado
        var card = document.createElement("label");
        var cardName = document.createTextNode(list);
        //menu a la derecha
        var cardMenu = document.createElement("i");
        //link para tarjeta
        var add = document.createElement("a");
        var textAdd = document.createTextNode("Añadir tarjeta...");

        cardContainer.setAttribute("id","card-container");
        card.setAttribute("id","card-name");
        cardMenu.classList.add("fa","fa-ellipsis-h");
        add.setAttribute("href","#");
        add.setAttribute("id","add-card");
        
        document.body.appendChild(cardContainer);
        card.appendChild(cardName);
        cardContainer.appendChild(card);
        cardContainer.appendChild(cardMenu);
        cardContainer.appendChild(add);
        add.appendChild(textAdd);

        add.addEventListener("click",function() {
            var cardTextArea = document.createElement("textarea");
            var anadirBtn = document.createElement("button");
            var anadirIcon = document.createElement("i");
            var anadirBtnText = document.createTextNode("Añadir");

            add.style.display = "none";

            //atributos
            cardTextArea.setAttribute("id","card-textarea");
            anadirBtn.setAttribute("id","guardar-btn");
            anadirIcon.classList.add("fa","fa-times");

            cardContainer.appendChild(cardTextArea);
            cardContainer.appendChild(anadirBtn);
            anadirBtn.appendChild(anadirBtnText);
            cardContainer.appendChild(anadirIcon);

            anadirBtn.addEventListener("click",function() {
                var cardContent = document.getElementById("card-textarea").value;
                document.getElementById("card-textarea").value = "";

                var cardText = document.createElement("label");
                var cardTextValue = document.createTextNode(cardContent);
                var cardTextIcon = document.createElement("i");

                cardText.setAttribute("id","card-text");
                cardTextIcon.classList.add("fa","fa-pencil")

                cardContainer.insertBefore(cardText,cardTextArea);
                cardText.appendChild(cardTextIcon);
                cardText.appendChild(cardTextValue);

            })
            //función para cerrar con .fa-times
            anadirIcon.addEventListener("click",function() {
                cardContainer.style.display = "none";
            })
        })
    })