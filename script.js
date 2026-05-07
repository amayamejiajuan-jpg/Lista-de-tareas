const inputTarea = document.getElementById("inputTarea")
const Boton = document.getElementById("btnAgregar")
const contenedor = document.getElementById("contenedor")

function agregar() {
    const valor = inputTarea.value
    const tarea = document.createElement("div")
    contenedor.appendChild(tarea)

    const parrafo = document.createElement("p")
    tarea.appendChild(parrafo)
    parrafo.textContent = valor

    const eliminar = document.createElement("button")
    tarea.appendChild(eliminar)
    eliminar.textContent = "eliminar"

    function eliminarTarea() {
        tarea.remove()
    }
    eliminar.addEventListener("click", eliminarTarea)
}
Boton.addEventListener("click", agregar)