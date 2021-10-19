import React,{useState,useEffect} from 'react';
import Data from "./components/data.json";
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

const data= Data;
function App() {

  const [list, setList] = useState([]);
  // console.log(list)

  useEffect(() => {
    setList(data)
  }, [list])
  return (
    <div className="container ">
      <Header/>
      <div className="d-flex justify-content-center align-items-center text-secondary  ">
   
    
     {list.map((item,i) => <Card list={item} key={i}/>)}
    
      </div>

      Hello
  
    </div>
  );
}

export default App;
