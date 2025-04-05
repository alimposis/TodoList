import { TodoActionsContext } from "@/TodoContext"
import { useContext } from "react"

export const useTodoActions = () =>{
    const todoContext = useContext(TodoActionsContext)

    if(!todoContext) throw new Error()

    return todoContext
}