import Todos from "./Todos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Menu from "./Menu";
import DetailTodo from "./DetailTodo";


export default function App(){

    return(<div>
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route  path="/" element={<Todos/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<DetailTodo/>} />
        </Routes>
        </BrowserRouter>
        
        
    </div>)
}