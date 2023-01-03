import { Link } from "react-router-dom"
export default function Menu(){


    return(<div>
        <ul>
            <li><Link to="/">todos</Link> </li>
            <li><Link to="/about">about</Link> </li>
           
        </ul>
    </div>)
}