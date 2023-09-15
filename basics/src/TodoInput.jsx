import React from 'react'

function TodoInput({todo,setTodo,addTodo}) {
  return (
     <div>
        <input type="text" value={todo} 
        onChange={(e)=>setTodo(e.target.value)} />
        <button onClick={addTodo}>Add</button>
     </div>
  )
}

export default TodoInput
