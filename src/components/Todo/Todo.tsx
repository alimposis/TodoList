import { Checkbox, CloseButton, Stack, Text } from "@chakra-ui/react";

import { ITodo } from "@/models";
import { useTodoActions } from "@/Hooks/useTodoActions";

export const Todo = ({ props }: { props: ITodo}) => {
  const todo = props;
  const {deleteTodo,editAnObject}= useTodoActions()
  return (
    <>
      <Stack alignItems="center" border="1px solid" borderColor={todo.completed ? "green" : "black"} borderRadius="5" color={todo.completed ? "green" : "black"} direction='row' justifyContent="space-between" display="flex" width="100%" padding="2" margin="1" >
          <Text>{todo.title}</Text>
          <Text>{todo.date} до {todo.term}</Text>
          <Stack direction='row' gap="5">
          <Checkbox colorScheme={todo.completed ? "green" : "black"}  onChange={() => editAnObject(todo)}  isChecked={todo.completed}/>
          <CloseButton onClick={() => deleteTodo(props.id)} color="black"/>
          </Stack>
      </Stack>
    </>
  );
};
