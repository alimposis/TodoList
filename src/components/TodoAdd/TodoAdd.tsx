import { Button, Flex, Input } from "@chakra-ui/react"

interface TodoListAddProps {
    props: (e: FormData) => void
}

export const TodoAdd = ({props}:TodoListAddProps) =>{
    const newTodo = props
    return(
        <>
        <form  action={newTodo} >
            <Flex display="flex" gap="1" width="100%">
              <Input
                required
                name="title"
                padding="1"
                placeholder="Enter a new task"
              />
              <Input name="term" padding="1" placeholder="Enter a term" />
              <Button type="submit" padding="0.5" maxW="200px" width="100%">
                Новая задача
              </Button>
            </Flex>
          </form>
        </>
    )
}