import React from 'react'

 function TodoEnd({threeTodos , clear}) {

    const completed = threeTodos.filter((todo) => todo.isCompleted).length;

  return (

    <div className='TodoEnd'>
        <span>{completed}/{threeTodos.length} Completed</span>
        <button onClick={(clear)}>Clear Completed</button>
    </div> 

  )
}

export default TodoEnd