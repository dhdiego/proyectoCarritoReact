import "./navbar.css";
import Cartwidget from "../cartwidget/CartWidget";


const NavBar = () => {
    return (
        <nav>
            <img src="https://i.postimg.cc/zGsW9FRw/logotdr.png" />

        <ul>
        <li><a href="#">Vinilos</a></li>
        <li><a href="#">Cds</a></li>
        <li><a href="#">Cassettes</a></li>
        
       
      </ul>
      <Cartwidget/>

        </nav>
                 
  
    );
    
   
};



export default NavBar;