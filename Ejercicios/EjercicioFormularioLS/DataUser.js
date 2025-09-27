
function subirDatos() {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const diaFavorito = document.getElementById("diaFavorito").value;

    const userInfo = {
        nombre: nombre,
        edad: edad,
        diaFavorito: diaFavorito
    };

    localStorage.setItem("User", JSON.stringify(userInfo));
}

document.getElementById("DataUser").addEventListener("submit", subirDatos);

window.onload = function() {
    const dataUser = localStorage.getItem("User");

    if (dataUser) {
        const userData = JSON.parse(dataUser);

        document.getElementById("Mensaje").textContent = 
        "Hola " + userData.nombre + ", tienes " + userData.edad + " años, tu día de la semana favorito es " + userData.diaFavorito;
    }
};