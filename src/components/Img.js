import React from 'react';


function Img({url,decs=""}) {
    console.log(url);
    return (
        <div className="flex-2 p-2">
           <img src={url} alt=""/> 
          
        </div>
    )
}

export default Img
