import { ITodo } from "@/models";

export function newTodo(e: FormData,setStateTodo: React.Dispatch<React.SetStateAction<[] | ITodo[]>>,stateTodo: [] | ITodo[]) {
    const now = new Date();
    const title = e.get("title");
    const term = e.get("term");

    const todo: ITodo = {
      id: stateTodo.length + 1,
      title: `${title}`,
      completed: false,
      date: `${now.getFullYear()}/${now.getMonth()}/${now.getDay()}`,
      term: "Без срока",
    }
    term?.toString() ? (todo.term = `${term}`) : (todo.term = "Срок не был указан");
    setStateTodo([...stateTodo, todo]);
}