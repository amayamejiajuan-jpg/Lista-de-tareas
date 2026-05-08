const inputTarea = document.getElementById("inputTarea")
const Boton = document.getElementById("btnAgregar")
const contenedor = document.getElementById("contenedor")
const tareaParrafo = document.getElementById("tareas")
const completadoParrafo = document.getElementById("completadas")

let total = 0
let completadas = 0

function agregar() {
    const valor = inputTarea.value

    if (valor.trim() == "") {
        alert("Ingrese un valor")
    } else {
        const tarea = document.createElement("div")
        contenedor.appendChild(tarea)

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        tarea.appendChild(checkbox)

        function tareaCompletada() {
            if (checkbox.checked == true) {
                completadas = completadas + 1
            } else {
                completadas = completadas - 1
            }
            completadoParrafo.textContent = "completadas: " + completadas
        }

        checkbox.addEventListener("change", tareaCompletada)

        const parrafo = document.createElement("p")
        tarea.appendChild(parrafo)
        parrafo.textContent = valor

        const eliminar = document.createElement("button")
        tarea.appendChild(eliminar)
        eliminar.className = "eliminar"
        
        const iconoEliminar = document.createElement("img")
        eliminar.appendChild(iconoEliminar)
        iconoEliminar.src = "./trash.png"

        function eliminarTarea() {
            tarea.remove()
            total = total - 1
            tareaParrafo.textContent = "tareas " + total
        }
        eliminar.addEventListener("click", eliminarTarea)

        total = total + 1
        tareaParrafo.textContent = "tareas " + total

        inputTarea.value = ""
    }


}
Boton.addEventListener("click", agregar)