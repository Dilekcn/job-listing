import React,{useState, useEffect } from 'react'
import Card from './components/Card';
import dataa from "./components/data.json";
import Header from './components/Header';
import './App.css'
import FilteredSkill from './components/FilteredSkill';



function App() {
  const[data,setData] = useState([])
  const[filterSkill,setFilterSkill] = useState([])


 

  useEffect(() => {
    if(filterSkill.length === 0)
        setData(dataa)
  }, [filterSkill])
  
 
 
 const filtered = (filter = null) =>{
   if(!filterSkill.includes(filter) && filter !== null )
   setFilterSkill([...filterSkill,filter])
  
   setData(data.filter(dat =>[...dat.languages, ...dat.tools].includes(filter)))
 }
 const removeFilter = (removed_filter) => {
  setFilterSkill( filterSkill.filter( item => item !== removed_filter ) )
}
 const clearFilter = ()=> {
  setFilterSkill([])
 }
  return (
    <div className="container main_content pb-2 ">
      <Header/>
    {filterSkill.length !==0?(
        <div className="d-flex  mb-4  bg-white align-items-center  card_content  px-4 py-3 top_skill  ">
        {filterSkill.map((filterr,i)=> <FilteredSkill filterSkills = {filterr} key={i} removeFilter={removeFilter} clearFilter={clearFilter}/>)}
        {filterSkill.length !==0 ? (<button className="clear_btn p-1 px-2 border-0 me-3 bg-white   " onClick={clearFilter} >Clear</button>):null}
        </div>): null }
      {data.map((item,i)=>  <Card data={item} key={i} filtered={filtered}/>)}
    
    </div>
  )
}

export default App
