import React from 'react'
import { AddTodo } from "./todoitem";

export const todos = (props) => {
     let myStyle = {
          minHeight: "70vh",
          margin: "40px auto"
     }
     return (
          <div classnameName="container" style={myStyle}>
               <h3 classnamename="my-3">Todos List</h3 >
               {
                    props.todos.length === 0 ? "no todos":
                         props.todos.map((todo) =>{
                              return (<todo todo={todo} key={todo.sno} ondelete={props.ondelete}/> 
                              
                              )
                         })
               }   
          </div >

     )
}
