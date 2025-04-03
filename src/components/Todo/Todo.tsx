import { Box, Checkbox, CloseButton, Stack, Text } from "@chakra-ui/react";

import { ITodo } from "@/models";

export const Todo = ({ props }: { props: [ITodo, Function, Function,React.Dispatch<React.SetStateAction<ITodo[] | []>>, ITodo[]]}) => {
  const todo = props[0];
  const editAnObject = props[1];
  const deleteTodo = props[2];
  const setState = props[3];
  const state = props[4];
  return (
    <>
      <Stack alignItems="center" border="1px solid" borderColor={todo.completed ? "green" : "black"} borderRadius="5" color={todo.completed ? "green" : "black"} direction='row' justifyContent="space-between" display="flex" width="100%" padding="2" margin="1" >
          <Text>{todo.title}</Text>
          <Text>{todo.date} до {todo.term}</Text>
          <Stack direction='row' gap="5">
          <Checkbox colorScheme={todo.completed ? "green" : "black"}  onChange={() => editAnObject(todo)}  isChecked={todo.completed}/>
          <CloseButton onClick={() => deleteTodo(todo.id,state,setState)} color="black"/>
          </Stack>
      </Stack>
    </>
  );
};
