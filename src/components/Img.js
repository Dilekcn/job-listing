import React from 'react';
import img1 from './images/photosnap.svg'
 

function Img({ imgSrc,decs="" }) {
    // console.log(imgSrc)
 
    return (
        <div className="flex-2 p-2 me-3">
           <img src={img1} alt=""/> 
         
        </div>
    )
}

export default Img
