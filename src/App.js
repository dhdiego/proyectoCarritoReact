import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Tienda De Rock" />
      
   </div>

  );
}

export default App;


