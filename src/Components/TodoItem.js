import React from 'react'

export default function ({twoTodos , onChange , onDelete}) {
  
  return (
    <div className='checked'>
        <label>
            <input type= 'checkbox' checked = {twoTodos.isCompleted}  onChange = {(e) => {
          
              onChange({

                ...twoTodos,
                isCompleted: e.target.checked

              })

            }}></input>

            {twoTodos.text}

            <button onClick={() => {
              onDelete(twoTodos)
            }}>X</button>

        </label>

    </div>
  )
}
