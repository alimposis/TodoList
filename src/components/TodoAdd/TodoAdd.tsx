import { useTodoActions } from "@/Hooks/useTodoActions"
import { Button, Flex, Input } from "@chakra-ui/react"
import { useRef, useState } from "react"

export const TodoAdd = () =>{
    const [stateInputValue, setStateInputValue ] = useState<string>("")
    
    const inputRef = useRef<HTMLInputElement | null>(null)

    const {newTodo: newTodoActuion} = useTodoActions()

    const focus = () =>  {
      stateInputValue.length ? null : inputRef.current?.focus
    }
    const newTodo = (e: FormData) =>{
      newTodoActuion(e)
      setStateInputValue("")
    }
    const getCurrentDate = () => {
      const today = new Date();
      today.setDate(today.getDate()); 
      return today.toISOString().split('T')[0]; 
    };
    return(
        <>
        <form  action={newTodo} >
            <Flex display="flex" gap="1" width="100%">
              <Input
                value={stateInputValue}
                onChange={e=>setStateInputValue(e.target.value)}
                required
                name="title"
                padding="1"
                placeholder="Название задачи"
              />
              <Input ref={inputRef} name="term" padding="1" placeholder="Срок задачи" size='md' type='datetime-local' min={getCurrentDate() + "T00:00"}/>
              <Button onClick={focus} type="submit" padding="0.5" maxW="200px" width="100%">
                Новая задача
              </Button>
            </Flex>
          </form>
        </>
    )
}