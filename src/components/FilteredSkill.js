import React from 'react'

function FilteredSkill({filterSkills,removeFilter}) {

    const deleteFilter = () =>{
        removeFilter(filterSkills)
    }
  

    return (
      
        <div >
            <button onClick={() => deleteFilter()} className="p-1 px-2 border-0 me-3  skills" >{filterSkills}<i className="bi bi-x-lg ms-2"></i></button>
          
        </div>
     
    )
}

export default FilteredSkill
