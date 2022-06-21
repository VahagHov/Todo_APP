import React from 'react'
import TodoItem from './TodoItem'


export default function List({oneTodos , onChange , onDelete}) {
  return (
    <div className='List'>
        {
            oneTodos.map((twoTodos)=> {
                return (
                    <TodoItem  
                    key = {twoTodos.id} 
                    twoTodos = {twoTodos}
                    onChange = {onChange}
                    onDelete = {onDelete}
                    />
                )
            })
        }
    </div>
  )
}
