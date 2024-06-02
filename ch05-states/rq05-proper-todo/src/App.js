import {useState} from 'react';

function TodoApp({ initialList }){
  const [todos, setTodos] = useState(initialList);
  return (
    <main>
      {todos.map((todo, index) => (
        <p key={todo}>
          {todo}
          <button onClick={() => {
            setTodos((value)=>[
              ...value.slice(0, index),
              ...value.slice(index+1),
            ]);
          }}>x</button>
        </p>
      ))}
    </main>
  );
}

function App(){
  const todos = ["Feed the cat", "Water plants", "Clean the floor"];
  return (
    <TodoApp initialList={todos} />
  );
}

export default App;
