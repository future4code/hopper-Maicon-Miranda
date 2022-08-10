const tarefas = ["acordar", "escovar os dentes", "tomar banho"]
const novaTarefa = tarefas.push(process.argv[2])

console.log(`Tarefa adicionada: ${tarefas}`)

