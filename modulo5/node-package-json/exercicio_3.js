
import { tarefas } from "./tarefas_exercicio_3.js";

const novaTarefa = tarefas.push(process.argv[2])

console.log(`Tarefa adicionada: ${tarefas}`)

