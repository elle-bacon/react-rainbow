import React, { useState } from 'react'

export default function ColorForm({ addColor }){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      addColor(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
              <div className="container input-group mt-3">
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setInput(e.target.value)} />
                <button className="btn btn-dark" type="submit">Submit!</button>
              </div>
            </form>
        </div>
    )
}