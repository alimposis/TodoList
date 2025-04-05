import { ITodo } from "@/models";
import { Todo } from "../Todo/Todo";
import { Heading } from "@chakra-ui/react";

export const StateTodoList = ({props}: {props: ITodo[] | null}) => {
  const state = props;

  if (state?.length) {
    return (
      <>
        {state.map((e) => {
          return (
            <>
              <Todo key={e.id} props={e} />
            </>
          );
        })}
      </>
    );
  } else {
    <Heading as="h2">Задач нету</Heading>;
  }
};
