import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Todo } from './Todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import { TodoType } from './types/todo';
import { User } from './types/user';

const user: User = {
  name: '猫太郎',
  hobbies: ['音楽', 'プログラミング'],
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const onClickFetchData = () => {
    axios
      .get<TodoType[]>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        res.data.map((todo) => todo.title);
        setTodos(res.data);
      });
  };
  return (
    <div className='App'>
      <UserProfile {...{ user }} />
      <Text color='red' fontSize='18px' />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
