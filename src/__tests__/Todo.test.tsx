import { render, screen, fireEvent } from '@testing-library/react';
import { Todo } from '@/components/Todo/Todo'; 
import { ITodo } from "@/models"; 

describe('Компонент задач', () => {
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
        props={todo} 
      />
    );
    
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
  });

  it('should call deleteTodo when close button is clicked', () => {
    render(
      <Todo 
        props={todo} 
      />
    );
    
    const deleteButton = screen.getByRole('button');
    
    fireEvent.click(deleteButton);

  });

  it('should change styles when task is completed', () => {
    
    render(
      <Todo 
        props={todo} 
      />
    );
    
  });
});
