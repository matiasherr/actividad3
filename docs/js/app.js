var pname;
function escribe() {
    event.preventDefault();
    escribir = document.getElementById("saludo");
    pname = document.completar.name.value;
    miNombre = "<h3> Bienvenido   " + pname + " ahora te hare una pregunta y tendrás 4 oportunidades para responder correctamente</h3";
    escribir.innerHTML = miNombre;
    document.getElementById("answer").className = "vs1";
    return
}
/*window.onload = function () {
    document.completar.saludo.onclick = escribe;
}*/
var oport = 3;
var correct = "EEVEE";
function adivina() {
    switch (oport) {
        case 0:
            event.preventDefault();
            var pknoms = document.getElementsByName("pknames");
            for (var i = 0; i < pknoms.length; i++) {
                if (pknoms[i].checked == true)
                    var pknom = pknoms[i].value;
            }
            var pkname1 = pknom.toUpperCase();
            if (pkname1 == correct) {
                document.getElementById("saludo").classList.add('alert');
                document.getElementById("saludo").classList.add('alert-warning');
                document.getElementById("fail").classList.remove('vs0');
                document.getElementById("answer").innerHTML="<br>";
                document.getElementById("saludo").innerHTML = "<h2>Felicitaciones " + pname + ":</h2>";
                document.getElementById("fail").classList.remove('alert-danger');
                document.getElementById("fail").classList.add('alert-success');
                document.getElementById("fail").innerHTML = "<h2>El Pokémon con más evoluciones es " + correct + "</h2>";
            }
            else {
                document.getElementById("saludo").classList.add('alert');
                document.getElementById("saludo").classList.add('alert-warning');
                document.getElementById("fail").classList.remove('vs0');
                document.getElementById("saludo").innerHTML = "<h2>Lo lamento mucho " + pname + ":</h2>";
                document.getElementById("fail").innerHTML = "Se te terminaron los intentos y no has tenido suerte";
                document.getElementById("answer").innerHTML = "<h3>Quieres intentarlo Nuevamente: <form name='completar' action='#'><input class='vs0' type='text' id='name' value='" + pname + "'><button id='saludos' name='saludos' onclick='volverAdivinar()'>Probar suerte otra vez</button></form></h3>";
                document.getElementById("intent").classList.add('vs0');

                return
            }
            break;
        case 1:
            event.preventDefault();
            var pknom = document.getElementById("pkname").value;
            if (pknom == "")
                alert("debe colocar un nombre de pokemon");
            else {
                var pkname1 = pknom.toUpperCase();
                if (pkname1 == correct) {
                    document.getElementById("saludo").classList.add('alert');
                    document.getElementById("saludo").classList.add('alert-warning');
                    document.getElementById("fail").classList.remove('vs0');
                    document.getElementById("answer").innerHTML="<br>";
                    document.getElementById("saludo").innerHTML = "<h2>Felicitaciones " + pname + ":</h2>";
                    document.getElementById("fail").classList.remove('alert-danger');
                    document.getElementById("fail").classList.add('alert-success');
                    document.getElementById("fail").innerHTML = "<h2>El Pokémon con más evoluciones es " + correct + "</h2>";
                }
                else {
                    document.getElementById("fail").classList.add('vs0');
                    document.getElementById("intent").innerHTML = "No acertaste: Tienes la última oportunidad para acertar";
                    document.getElementById("preg1").innerHTML = "<form name='adiv' action='#'><div class='form-check'> <input class='form-check-input' type='radio' name='pknames' value='Pikachu'> <label class='form-check-label'> Pikachu </label> </div> <div class='form-check'> <input class='form-check-input' type='radio' name='pknames' value='Eevee'> <label class='form-check-label'> Eevee </label> </div> <div class='form-check'> <input class='form-check-input' type='radio' name='pknames' value='Tyrogue'> <label class='form-check-label'> Tyrogue </label>  </div> <button id='pknamer' name='pknamer' onclick='adivina()'>Enviar</button></form>";
                    oport--;
                }
            }
            return
            break;
        case 2:
            event.preventDefault();
            var pknom = document.getElementById("pkname").value;
            if (pknom == "")
                alert("debe colocar un nombre de pokemon");
            else {
                var pkname1 = pknom.toUpperCase();
                if (pkname1 == correct) {
                    document.getElementById("saludo").classList.add('alert');
                    document.getElementById("saludo").classList.add('alert-warning');
                    document.getElementById("fail").classList.remove('vs0');
                    document.getElementById("answer").innerHTML="<br>";
                    document.getElementById("saludo").innerHTML = "<h2>Felicitaciones " + pname + ":</h2>";
                    document.getElementById("fail").classList.remove('alert-danger');
                    document.getElementById("fail").classList.add('alert-success');
                    document.getElementById("fail").innerHTML = "<h2>El Pokémon con más evoluciones es " + correct + "</h2>";
                }
                else {
                    document.getElementById("fail").classList.remove('vs0');
                    document.getElementById("intent").innerHTML = "Tienes sólo " + (oport) + " chances para responder:<br><h5>Ten en cuenta que se trata de un Pokémon de tipo normal</h5>";
                    oport--;
                }
            }
            return
            break;
        default:
            event.preventDefault();
            var pknom = document.getElementById("pkname").value;
            if (pknom == "")
                alert("debe colocar un nombre de pokemon");
            else {
                var pkname1 = pknom.toUpperCase();
                if (pkname1 == correct) {
                    document.getElementById("saludo").classList.add('alert');
                    document.getElementById("saludo").classList.add('alert-warning');
                    document.getElementById("fail").classList.remove('vs0');
                    document.getElementById("answer").innerHTML="<br>";
                    document.getElementById("saludo").innerHTML = "<h2>Felicitaciones " + pname + ":</h2>";
                    document.getElementById("fail").classList.remove('alert-danger');
                    document.getElementById("fail").classList.add('alert-success');
                    document.getElementById("fail").innerHTML = "<h2>El Pokémon con más evoluciones es " + correct + "</h2>";
                }
                else {
                    0
                    document.getElementById("fail").classList.remove('vs0');
                    document.getElementById("intent").innerHTML = "Tienes " + (oport) + " opciones para responder:";
                    pknom = "";
                    oport--;
                }
            }
            return

    }


}
function volverAdivinar() {
    event.preventDefault();
    oport = 3;
    document.getElementById("saludo").innerHTML = "<h3> Bienvenido nuevamente  " + pname + " te volveré a realizar la misma pregunta y tendrás 4 nuevas chances para responder correctamente</h3";
    document.getElementById("answer").innerHTML = "<div id='answer' class='vs1'><div id='intent' class='alert alert-warning' role='alert'>Tienes 4 intentos para responder:</div><h4>¿Cuál es el Pokémon con mas evoluciones?</h4><div id='preg1'>  <form name='adiv' action='#'>    <label>Ingresa el nombre:</label>    <input type='text' id='pkname' placeholder='Pokémon'>    <button id='pknamer' name='pknamer' onclick='adivina()'>Enviar</button>  </form></div></div>";
    document.getElementById("fail").classList.add('vs0');
    document.getElementById("fail").innerHTML = "<p class='falla'>Has cometido un error.</p><p>¿Estás seguro que es el Pokémon correcto? ¿Su nombre está bien escrito?</p>";
    return
}
