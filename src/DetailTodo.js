import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
export default function DetailTodo(){
const {id}=useParams();
const [todo,setTodo]=useState({})

useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
.then((response)=>{
    setTodo({...response.data})
}

)
}
)


    return(<div>

<h1>datails de :{id}</h1>
<h4>{todo.title}</h4>
    </div>)
}