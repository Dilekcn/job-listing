import React from 'react'

function Skills({ listFilter,list }) {
    function handleClick(skill){
        listFilter(skill)
    }
    console.log(list)
    return (
        <div className="d-flex flex-row justify-content-center  pt-5 ms-4">
           {
                [...list.languages, ...list.tools].map( skill => <div >
                <button onClick={() => handleClick(skill)} className="me-2 m rounded-pill border-0 bg-info ">
                    {skill}
                </button>
                </div>)
            } 
        </div>
    )
}

export default Skills
