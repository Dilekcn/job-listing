import React from 'react'

function Content({list}) {
    // console.log(list)
    return (
        <div className="d-flex px-">
            <div className="d-flex flex-grow">
                <p className="d-flex justify-content-center align-items-center mr-2">{list.company}</p>
               
            </div>
            <p>{list.position}</p>
            Helll
        </div>
    )
}

export default Content
