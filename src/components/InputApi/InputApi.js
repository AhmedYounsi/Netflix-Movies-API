import React, { useState } from 'react'
import './InputApi.css'

function InputApi(props) {

   const [endpoint, setendpoint] = useState("")

    return (
        <div className='input-api'>
         <button className="api-adresse">
              Netflix/Api/
         </button>
         <input value={endpoint} onChange={(text) => setendpoint(text.target.value)} placeholder="Movies/2021" type="text" />
         <button onClick={() => props.Get(endpoint) } className="api-button">
           GET
         </button>
        </div>
    )
}

export default InputApi
