import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "./main";



function App() {

  const dispatch=useDispatch()
  const cats=useSelector((state:RootState)=>state.cats.cats);
  
   
  return <div className="App">
    
  </div>;
}

export default App;
