import { ITodo } from "@/models";
import { Todo } from "../Todo/Todo";
import { Heading } from "@chakra-ui/react";

export const StateTodoList = ({
  props,
}: {
  props: [
    ITodo[] | null,
    React.Dispatch<React.SetStateAction<ITodo[] | []>>,
    Function
  ];
}) => {
  const setState = props[1];
  const state = props[0];
  function editAnObject(params: ITodo) {
    const updatedState = state?.map((e) => {
      if (e.id === params.id) {
        return { ...e, completed: !e.completed };
      }
      return e;
    });
    setState(updatedState!);
  }
  if (state?.length) {
    return (
      <>
        {state.map((e) => {
          return (
            <>
              <Todo key={e.id} props={[e, editAnObject, props[2], setState, state]} />
            </>
          );
        })}
      </>
    );
  } else {
    <Heading as="h2">Задач нету</Heading>;
  }
};
