import { TodoContext } from "@/TodoContext"
import { useContext } from "react"

export const useTodo = () =>{
    const todoContext = useContext(TodoContext)

    if(!todoContext) throw new Error()

    return todoContext
}