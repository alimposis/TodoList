import { createContext, FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { ITodo } from "./models";

interface TodoContextType {
  stateTodo: ITodo[];
  setStateTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
  stateTodoTrue: ITodo[];
  setStateTodoTrue: React.Dispatch<React.SetStateAction<ITodo[]>>;
  stateTodoFalse: ITodo[];
  setStateTodoFalse: React.Dispatch<React.SetStateAction<ITodo[]>>
}

interface TodoActionsContext {
  deleteTodo: (params: number) => void;
  newTodo: (e: FormData) => void;
  editAnObject: (params: ITodo) => void;
}
export const TodoContext = createContext<TodoContextType | null>(null)
export const TodoActionsContext = createContext<TodoActionsContext | null>(null)

export const TodoProvider: FC<PropsWithChildren> = ({children}) => {

    const stateLocalStorage = localStorage.getItem("todos")
    let formatMassITodo:ITodo[] = []

    if(stateLocalStorage){
      formatMassITodo = JSON.parse(stateLocalStorage)
    }

    const [stateTodo, setStateTodo] = useState<ITodo[]>(formatMassITodo);
    const [stateTodoTrue, setStateTodoTrue] = useState<ITodo[]>([]);
    const [stateTodoFalse, setStateTodoFalse] = useState<ITodo[]>([]);
  
    useEffect(() => {
      const todosTrue: ITodo[] = [];
      const todosFalse: ITodo[] = [];
      stateTodo.map((e) => {
          e.completed ? todosTrue.push(e) : todosFalse.push(e);
      });
      setStateTodoTrue(todosTrue);
      setStateTodoFalse(todosFalse);

      localStorage.setItem("todos",JSON.stringify(stateTodo));
    }, [stateTodo]);

    const deleteTodo = useCallback((params:number) => {
      setStateTodo((prevState) =>{
        return prevState.filter((e) => e.id !== params)
      })
    },[])

    const newTodo = useCallback((e: FormData)=>setStateTodo((prevState) => {
      const now = new Date();
      const title = e.get("title");
      const term = e.get("term");
  
      const todo: ITodo = {
        id: prevState.length + 1,
        title: `${title}`,
        completed: false,
        date: `${now.getFullYear()}/${now.getMonth()}/${now.getDay()}`,
        term: "Без срока",
      }
      term?.toString() ? (todo.term = `${term}`) : (todo.term = "Срок не был указан");
      return ([...prevState, todo]);
    }),[])
    const editAnObject = useCallback(
      (params: ITodo) => {
      setStateTodo((prevState) => {
      const updatedState = prevState?.map((e) => {
        if (e.id === params.id) {
          return { ...e, completed: !e.completed };
        }
        return e;
      });
      return updatedState!})
    },[])

    const value = useMemo(()=>({deleteTodo,newTodo,editAnObject}),[]);

  return( 
    <>
    <TodoContext.Provider value={{stateTodo,setStateTodo,stateTodoTrue,setStateTodoTrue,stateTodoFalse,setStateTodoFalse}}>
      <TodoActionsContext.Provider value={value}>
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
    </>
  )
}

