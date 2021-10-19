import React from 'react'
import img from './images/bg-header-desktop.svg';


function Header() {
    return (
        <div className="py-4 relative h-14 cyan">
            <img  src={img} alt="" className="w-full"/>
            
        </div>
    )
}

export default Header
