import logo from './logo.svg';
import './App.css';
import Logo from "./components/logo"
import Links from "./components/links"
import Button from "./components/Button";

let arr=["Services","Products","About"]
function App() {
  
  return (
   <div className="container">
  <Logo></Logo>

 { arr.map(function(el){
  return( <Links a1={el}/> 
  )})}

  <Button></Button>

   </div>
  
  

  );
}

export default App;
