import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

export default function App(){
    const [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])

    const addColor = (newColor) => {
      setColors([...colors, newColor])
    }

    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock key={i} color={color} />
        )
    })

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )
}
