import React,{useState,useEffect} from 'react';
import Data from "./components/data.json";
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import FilterItem from './components/FilterItem';
 

const data= Data;
function App() {

  const [list, setList] = useState([]);
  const [filters, setFilters] = useState([])

  // console.log(list)

  useEffect(() => {
    setList(data)
  }, [list])


  const listFilter = (filter_by = null) => {

    if (!filters.includes(filter_by) && filter_by !== null)
      setFilters([...filters, filter_by])

    setList(list.filter(listing => [...listing.languages, ...listing.tools].includes(filter_by)))
  }

  const removeFilter = (removed_filter) => {
    setFilters( filters.filter( item => item !== removed_filter ) )
  }




  return (
    <div className="container ">
      <Header />
     
      <div className=" d-flex  flex-column  justify-content-center align-items-center text-secondary main_content  " >
      <div className="d-flex my-3 p-2 list_item">
       { filters.map(filter => <FilterItem item={filter} _callback={removeFilter} key={filter} />)}
     </div>
    
     {list.map((item,i) => <Card list={item} key={i} listFilter={listFilter}/>)}
    
      </div>

     
  
    </div>
  );
}

export default App;
