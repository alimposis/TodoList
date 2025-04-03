import { render, screen, fireEvent } from '@testing-library/react';
import { Todo } from '@/components/Todo/Todo'; 
import { ITodo } from "@/models"; 

describe('Компонент задач', () => {
    const mockEditAnObject = jest.fn();
    const mockDeleteTodo = jest.fn();
    const mockSetState = jest.fn();
    const mockState: ITodo[] = []; 

  const todo: ITodo = {
    id: 1,
    title: "Test Todo",
    completed: false,
    date: "2025/04/05",
    term: "2025/12/31"
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call editAnObject when checkbox is clicked', () => {
    render(
      <Todo 
        props={[todo, mockEditAnObject, mockDeleteTodo, mockSetState, mockState]} 
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    
    expect(mockEditAnObject).not.toHaveBeenCalled();

    fireEvent.click(checkbox);

    expect(mockEditAnObject).toHaveBeenCalledWith(todo);
  });

  it('should call deleteTodo when close button is clicked', () => {
    render(
      <Todo 
        props={[todo, mockEditAnObject, mockDeleteTodo, mockSetState, mockState]} 
      />
    );
    
    const deleteButton = screen.getByRole('button');
    
    fireEvent.click(deleteButton);

    expect(mockDeleteTodo).toHaveBeenCalledWith(todo.id, mockState, mockSetState);
  });

  it('should change styles when task is completed', () => {

    const completedTodo: ITodo = { ...todo, completed: true };
    
    render(
      <Todo 
        props={[completedTodo, mockEditAnObject, mockDeleteTodo, mockSetState, mockState]} 
      />
    );
    
  });
});
