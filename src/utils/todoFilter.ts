import { ITodo } from "@/models";

export const todoFilter = (stateTodo: ITodo[],setStateTodoTrue: React.Dispatch<React.SetStateAction<ITodo[] | []>>,setStateTodoFalse: React.Dispatch<React.SetStateAction<ITodo[] | []>>)=>{
    const todosTrue: ITodo[] = [];
    const todosFalse: ITodo[] = [];
    stateTodo.map((e) => {
        e.completed ? todosTrue.push(e) : todosFalse.push(e);
    });
    setStateTodoTrue(todosTrue);
    setStateTodoFalse(todosFalse);
}