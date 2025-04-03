import { ITodo } from "@/models"

export function deleteTodo(params:number, stateTodo: [] | ITodo[], setStateTodo: React.Dispatch<React.SetStateAction<[] | ITodo[]>>) {
    const mewStateTodo = stateTodo.filter((e) => e.id !== params)
    setStateTodo(mewStateTodo)
  }