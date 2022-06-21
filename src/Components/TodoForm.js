import React, { useState } from 'react'

export default function TodoForm({onAdd}) {

    const [text , setText] = useState('')

  return (

        <form className='Form' onSubmit={(e) => {

            e.preventDefault() ;
            onAdd(text) ;
            setText('')

        }}>

        <input type='text' placeholder='What needs to be done ?' value={text} onChange={(e) => {
            setText(e.target.value)
        }}>
        </input>

        <button>Add</button>

        </form>
  )
}

