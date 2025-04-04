import { useEffect, useState } from "react";

import { ITodo } from "@/models";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { StateTodoList } from "../StateTodoList/StateTodoList";
import { TodoAdd } from "../TodoAdd/TodoAdd";
import { todoFilter } from "@/utils/todoFilter";
import { newTodo } from "@/utils/newTodo";
import { deleteTodo } from "@/utils/deleteTodo";

export const Main = () => {
  const stateLocalStorage = localStorage.getItem("todos")
  let formatMassITodo:ITodo[] = []
  if(stateLocalStorage){
    formatMassITodo = JSON.parse(stateLocalStorage)
  }
  const [stateTodo, setStateTodo] = useState<[] | ITodo[]>(formatMassITodo);
  const [stateTodoTrue, setStateTodoTrue] = useState<[] | ITodo[]>([]);
  const [stateTodoFalse, setStateTodoFalse] = useState<[] | ITodo[]>([]);

  function formActive(e: FormData) {
    newTodo(e,setStateTodo,stateTodo)
  }
  useEffect(() => {
    todoFilter(stateTodo,setStateTodoTrue,setStateTodoFalse)
    localStorage.setItem("todos",JSON.stringify(stateTodo))
  }, [stateTodo]);

  return (
    <>
    <Box width="100%" padding="4" color="black">
      <Box padding="1">
        <TodoAdd props={formActive} />
        <Tabs defaultIndex={0}>
          <TabList width="fit-content" margin="auto">
            <Tab value="all">Все</Tab>
            <Tab value="true">Выполненные</Tab>
            <Tab value="false">Не выполненные</Tab>
          </TabList>
          <TabPanels>
              <TabPanel>
                <StateTodoList props={[stateTodo, setStateTodo, deleteTodo,stateTodo]} />
              </TabPanel>
              <TabPanel >
              <StateTodoList
                props={[stateTodoTrue, setStateTodo, deleteTodo,stateTodo]}
              />
            </TabPanel>
            <TabPanel>
              <StateTodoList
                props={[stateTodoFalse, setStateTodo, deleteTodo,stateTodo]}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
    </>
  );
};
