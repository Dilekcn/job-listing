import React from 'react'
import Content from './Content'
import Img from './Img'
import Skills from './Skills'

function Card({ list,listFilter  }) {
    function handleClick(skill){
        listFilter(skill)
    }

    const Skills = ({skill}) => (<div className=" mx-1  ">
        <button onClick={() => handleClick(skill)} className='me-2 m rounded-pill border-0 bg-info text-white' >
            {skill}
        </button>
        </div>)

    return (
        <div className=" m-3 d-flex flex-row bg-light text-dark card_content" style={{width: '80%'}}>
            <Img imgSrc={list.logo}  /> 
            <Content list={list} />
            <div className="d-flex flex-row justify-content-end align-content-end pt-5 ms-4">
            {
                [...list.languages, ...list.tools].map( skill => <Skills skill={skill}key={skill} />)
            }
        </div>
 

        </div>
    )
}

export default Card
