import React from 'react'


function Card({data,filtered}) {
    console.log(data.logo)

 const handleClick = (skill) =>{
    filtered(skill)
 }
    return (
   
 <div className="d-flex  mb-4  bg-white align-items-center p-0 card_content mt-3 px-4 ">
    <div className="flex-shrink-0 me-4">
         <img src={data.logo} alt="as"/>
     </div>
    <div className="p-2 bd-highlight">
        <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight d-flex flex-row justify-content-between "><h6>{data.company}</h6>
            { data.new ? (<span className="rounded-pill  px-2  new_featured pt-2 text-white">NEW </span> ): null}
            { data.featured ? (<span  className="rounded-pill px-2  new_featured pt-2 text-white">FEATURED</span> ): null}
            
            </div>
            <div className="p-2 bd-highlight position"><h5>{data.position}</h5></div>
            <div className="p-2 bd-highlight">
                <div className="d-flex flex-row text-secondary ">
                  <p>{data.postedAt}</p>                 
                  <ul className="d-flex flex-row">
                      <li className="me-5">{data.contract}</li>
                      <li>{data.location}</li>
                  </ul>                  
                </div>
            </div>
        </div>
    </div>
    <div className="ms-auto p-2 bd-highlight">
       <div className="d-flex flex-row bd-highlight mb-3">
           {
              [...data.languages, ...data.tools].map( (skill,i) =>  <button onClick={() => handleClick(skill)} className="p-1 px-2 border-0 me-3  skills " key={i}>{skill}</button> ) 
           }
           
        
        </div>
    </div>
</div>
    
       
    )
}

export default Card
