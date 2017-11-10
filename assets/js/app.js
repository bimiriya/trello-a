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

        //función para cerrar con .fa-times
        icon.addEventListener("click",function() {
            label.style.display = "inline-block";
            container.removeChild(newContainer);
        })

        guardarBtn.addEventListener("click", function() {
            var list = document.getElementById("input").value;
            document.getElementById("input").value = "";
        })

    })


    //1 div
    //2 labes
    // 1 textarea //div que encierre textarea con elementos de abajo para luego darles display none
    //botón añadir
    //llamar icono
    //a

    //funcion de guardar=elementos creados van dentro