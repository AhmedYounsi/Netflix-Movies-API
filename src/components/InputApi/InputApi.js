import React, { useState } from 'react'
import './InputApi.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function InputApi(props) {

   const [endpoint, setendpoint] = useState("")  

   const get_btn = () =>{
     if(props.Loaging || endpoint.length === 0) return
    props.Get(endpoint)
   }


    return (
        <div className='input-api'>
         <button className="api-adresse">
              Netflix/api/v2
         </button>
         <input value={endpoint} onChange={(text) => setendpoint(text.target.value)} placeholder="movies/{year}" type="text" />
         <button style={{width:150}} onClick={() => get_btn() } className="api-button">
          {
            props.Loaging ?  <Loader type="ThreeDots" color="white" height={50} width={50} />
            : 'Get Data '
          }
           {/* <i style={{marginLeft:10}} class="fas fa-chevron-right"></i> */}
         </button>
        </div>
    )
}

export default InputApi
