import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Todos(){
const [todos,setTodos]=useState([])
useEffect(
()=>{
//------------axios------------------
// axios.get("https://jsonplaceholder.typicode.com/todos")
// .then((response)=>{
// setTodos(response.data)
//---------------fetch--------------
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((response)=> response.json())
// .then((data)=>setTodos(data))}

//----------async awiat---------------
const getdata=async ()=>{
 const response= await axios.get("https://jsonplaceholder.typicode.com/todos")
 setTodos(response.data)
}
getdata()}
,
[]
)

return(<div>
    <h1>todos nombre :{todos.length}</h1>
    <table border="1">
        <thead>
            <tr>
                <th>idUser</th>
                <th>id</th>
                <th>title</th>
                <th>details</th>
            </tr>
        </thead>
        <tbody>
{todos.map((todo)=>{
return(
    <tr key={todo.id}>
        <td>{todo.userId}</td>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td><Link to={`detail/${todo.id}`}><button>details</button></Link></td>
    </tr>
)

})}
        </tbody>
    </table>
</div>)

}