import "./navbar.css";
import Cartwidget from "../cartwidget/CartWidget";


const NavBar = ({ src, alt }) => {
    return (
                 
    <nav>
       {/*  <img src={src} alt={alt} className="logo"/>; */}
        <div>
          
        <ul>
        
            <li><a href="#"> Vinilos</a></li>
            <li><a href="#"> Cds</a></li>
            <li><a href="#"> Cassettes</a></li>
        </ul>
        <Cartwidget/>
        </div>

     
 
    </nav>
   
    )
    
   
}



export default NavBar;