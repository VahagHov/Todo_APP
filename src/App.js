import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import TodoEnd from './Components/TodoEnd';
import Text from './Components/Text';

function App() {

const[todos, setTodos] = useState([

  {
    id: Math.random() ,
    text: 'Learn JS' ,
    isComleted: false 
  },

  {
    id: Math.random() ,
    text: 'Learn HTML' ,
    isComleted: false ,
  },

  {
    id: Math.random() ,
    text: 'Learn React.JS' ,
    isComleted: false ,
  },

])

  return (
    
    <div className="App">

      <Text />

      <TodoForm  onAdd={(oneText) => {

        setTodos([

          ...todos,

          {
            id: Math.random() ,
            text: oneText,
            isComleted: false ,
          }

        ])

      }}/>

      <List  

        oneTodos = {todos} 

        onDelete = {(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}

        onChange =  {(newTodo) => {
          setTodos(todos.map((t) => {
            if(t.id === newTodo.id) {
              return newTodo
            }
            return t;
          }))

        }}
        
      />

      <TodoEnd  threeTodos = {todos} clear = {() => {
          setTodos(todos.filter((todo) => !todo.isCompleted));
      }} />

    </div>
  );
}

export default App;
