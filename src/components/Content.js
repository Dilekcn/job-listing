import React from 'react'




function Content({list}) {
  
    
    // console.log(list)
    return (
        <div className="d-flex flex-column me-4">
            <div className="d-flex flex-grow pt-3 ">
                <h5 className=" px-4 me-2 " >{list.company}</h5>
                {list.new ? <p className="d-flex   rounded-pill bg-info text-white px-4 me-2">new</p> : null}
                {list.featured ? <p className=" rounded-pill bg-dark text-white px-4 ">featured</p> : null} 
            </div> 
            <h5 className="">{list.position}</h5>
            <div className="d-flex ">
                <span className="me-2">{list.postedAt}</span>
                <span><ul className="d-flex">
                <li className="me-5">{list.contract}</li>
                <li className="">{list.location}</li>
                </ul></span>
            </div>
       
          
        </div>
    )
}

export default Content
