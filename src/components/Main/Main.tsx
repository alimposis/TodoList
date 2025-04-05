import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { StateTodoList } from "../StateTodoList/StateTodoList";
import { TodoAdd } from "../TodoAdd/TodoAdd";
import { useTodo } from "@/Hooks/useTodo";

export const Main = () => {
  const {stateTodo,stateTodoTrue,stateTodoFalse} = useTodo()

  return (
    <>
    <Box width="100%" padding="4" color="black">
      <Box padding="1">
        <TodoAdd />
        <Tabs defaultIndex={0}>
          <TabList width="fit-content" margin="auto">
            <Tab value="all">Все</Tab>
            <Tab value="true">Выполненные</Tab>
            <Tab value="false">Не выполненные</Tab>
          </TabList>
          <TabPanels>
              <TabPanel>
                <StateTodoList props={stateTodo} />
              </TabPanel>
              <TabPanel >
              <StateTodoList
                props={stateTodoTrue}
              />
            </TabPanel>
            <TabPanel>
              <StateTodoList
                props={stateTodoFalse}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
    </>
  );
};
