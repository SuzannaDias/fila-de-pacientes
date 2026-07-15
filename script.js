const pacientes = []
const frm = document.querySelector("form")
const inPaciente = document.getElementById("inPaciente")
const btAtender = document.getElementById("btAtender")
const btPrioridade = document.getElementById("btPrioridade")
const outAtendimento = document.getElementById("outAtendimento")
const outFila = document.getElementById("outFila")

function mostrarFila(){
    let lista= ""
    for (let i = 0; i < pacientes.length; i++){
        lista += `${i+1}. ${pacientes[i]}\n`
    }
    outFila.innerText= lista
}
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
   const nome = inPaciente.value.trim()
    if(nome==="") {
        alert("Informe o nome do paciente.")
        inPaciente.focus()
        return
    }
    pacientes.push(nome)
    mostrarFila()
    inPaciente.value=""
    inPaciente.focus()

})
btPrioridade.addEventListener("click", () =>{
    const nome = inPaciente.value.trim()
    if(nome ===""){
        alert("Informe o nome do paciente.")
        inPaciente.focus()
        return
    }
    pacientes.unshift(nome)
    mostrarFila()
    inPaciente.value=""
    inPaciente.focus()
})
btAtender.addEventListener("click", () =>{
    if(pacientes.length === 0){
        alert("Não há pacientes na fila.")
        inPaciente.focus()
        return
    }
    const pacienteAtendido = pacientes.shift()
    outAtendimento.innerText = pacienteAtendido
    mostrarFila()
    inPaciente.focus()
})