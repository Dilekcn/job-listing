import React from 'react'
import Content from './Content'
import Img from './Img'

function Card({list,data}) {
    console.log(list)
    console.log(list.logo)

    return (
        <div>
            <Img url={list.logo}  /> 
            <Content list={list}/>
 

        </div>
    )
}

export default Card
