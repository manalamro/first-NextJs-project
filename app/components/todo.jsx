// since all the components in next js are server component by default so ,
// to define an component as client component we need to write "use client" at the top of the component page like this:

"use client"
import {useState,useEffect} from 'react'
export default function Todo(){

const [todo,setTodo] = useState({})
useEffect(()=>{
   const fetchDate =async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result = await response.json();
    setTodo(result);
   }
   fetchDate();
},[])
return(
<>
<h2> ...... here is the todo title: {todo.title}</h2>
</>

);

}