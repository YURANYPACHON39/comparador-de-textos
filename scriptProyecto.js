const botonComparar = document.getElementById("botonComparar");
const botonLimpiar = document.getElementById("botonLimpiar");

botonComparar.addEventListener("click", comparar);
botonLimpiar.addEventListener("click", limpiar);


function comparar() {

    let textoOriginal = document.getElementById("textoOriginal").value;
    let textoNuevo = document.getElementById("textoNuevo").value; //lee
    let resultado = document.getElementById("comparacion");

    if (textoOriginal === "" || textoNuevo === "") {
        resultado.innerHTML =
            "Debe ingresar los dos textos.";//

        return;
    }

    let palabrasOriginal = textoOriginal.split(" "); //Arreglo
    let palabrasNuevo = textoNuevo.split(" ");
    let textoResultado = "";
    let i;

    for (i = 0; i < palabrasOriginal.length; i++) {

        if (palabrasOriginal[i] === palabrasNuevo[i]) {

            textoResultado +=
                "<span class='igual'>" +
                palabrasOriginal[i] +
                "</span> ";

        } else {

            textoResultado +=
                "<span class='eliminado'>" +
                palabrasOriginal[i] +
                "</span> ";
        }
    } //Envolver palabra si no son iguales

    if (palabrasNuevo.length > palabrasOriginal.length) {

        for (
            i = palabrasOriginal.length;
            i < palabrasNuevo.length;
            i++
        ) {

            textoResultado +=
                "<span class='agregado'>" +
                palabrasNuevo[i] +
                "</span> ";
        }
    }

    resultado.innerHTML = textoResultado; 
}


function limpiar() {

    document.getElementById("textoOriginal").value = "";
    document.getElementById("textoNuevo").value = "";
    document.getElementById("comparacion").innerHTML = "";

}