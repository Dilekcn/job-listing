
import React from 'react'

function FilterItem({item, _callback}) {

    const removeFilter = () => {
        _callback(item)
    }

    return (
     
        <span className="p-2 mr-4 bg-white rounded-pill cursor-pointer hover:bg-red-400" onClick={() => removeFilter()}>{item}</span>

    )
}

export default FilterItem;