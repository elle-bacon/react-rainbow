import React from 'react'

function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <div className="p-2 text-center fw-bold">{props.color}</div>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock
